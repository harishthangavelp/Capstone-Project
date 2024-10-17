// server.js
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const connectDB = require('../db/db'); // Make sure this path is correct
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Connect to MongoDB
connectDB(); // Call the connectDB function to connect to MongoDB

// Define a sample schema and model
const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    stripeChargeId: {
        type: String,
        required: true,
    },
});
const Payment = mongoose.model('collect-data', paymentSchema); // Use a clear model name

// Create a payment endpoint
app.post('/create-payment', async (req, res) => {
    const { amount, currency, source } = req.body; // Extract source from the request body

    try {
        // Create a charge with Stripe
        const charge = await stripe.charges.create({
            amount,
            currency,
            source, // This is the token returned by Stripe.js
        });

        // Save payment to MongoDB
        const payment = new Payment({
            amount: charge.amount,
            currency: charge.currency,
            stripeChargeId: charge.id,
        });
        await payment.save();

        res.json({ success: true, charge });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Payment failed' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
