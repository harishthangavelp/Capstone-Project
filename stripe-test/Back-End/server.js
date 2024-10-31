// server.js (or your main server file)
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const cors = require('cors');

// Use CORS middleware
app.use(cors());

// Middleware
app.use(express.json()); // Middleware to parse JSON requests

const PORT = process.env.PORT || 3000;

// POST create checkout session
app.post('/create-checkout-session', async (req, res) => {
    const { quantity, priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceId, // Use the price ID passed from the client
                    quantity: quantity, // Set the quantity from the request body
                },
            ],
            success_url: '/success', // Adjust as necessary
            cancel_url: '/cancel',   // Adjust as necessary
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// GET checkout session details
app.get('/checkout-session/:sessionId', async (req, res) => {
    const { sessionId } = req.params;

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        res.json(session);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
