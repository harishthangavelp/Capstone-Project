// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// POST: Create a new checkout session
router.post('/create-checkout-session', async (req, res) => {
    try {
        const { quantity, priceId } = req.body; // Destructure request body

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

        res.send({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: error.message });
    }
});

// GET: Retrieve checkout session details
router.get('/checkout-session/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params; // Extract sessionId from URL parameters
        const session = await stripe.checkout.sessions.retrieve(sessionId); // Retrieve the session details from Stripe
        res.send(session);
    } catch (error) {
        console.error('Error retrieving session:', error);
        res.status(500).send({ error: error.message });
    }
});

// GET: Retrieve payment details using payment ID
router.get('/payment-details/:paymentId', async (req, res) => {
    try {
        const { paymentId } = req.params; // Extract paymentId from URL parameters
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId); // Retrieve the payment intent details from Stripe
        res.send(paymentIntent);
    } catch (error) {
        console.error('Error retrieving payment details:', error);
        res.status(500).send({ error: error.message });
    }
});

// Export the router
module.exports = router;
