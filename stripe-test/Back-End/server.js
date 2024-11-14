// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' })); // Required for Stripe webhooks

// POST: Create a new checkout session
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { quantity, priceId } = req.body;
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceId,
                    quantity,
                },
            ],
            success_url:`${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/cancel`,
        });
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: error.message });
    }
});

// GET: Retrieve checkout session details
app.get('/checkout-session/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.json(session);
    } catch (error) {
        console.error('Error retrieving session:', error);
        res.status(500).send({ error: error.message });
    }
});

// GET: Retrieve payment details using payment ID
app.get('/payment-details/:paymentId', async (req, res) => {
    try {
        const { paymentId } = req.params;
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);
        res.json(paymentIntent);
    } catch (error) {
        console.error('Error retrieving payment details:', error);
        res.status(500).send({ error: error.message });
    }
});


// Webhook endpoint for Stripe events
app.post('/webhook', (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error(`Webhook error: ${err.message}`);
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // Handle session completion, e.g., send confirmation email
        console.log('Checkout session completed:', session);
    }

    res.json({ received: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
