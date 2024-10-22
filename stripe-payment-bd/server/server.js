// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const Payment = require('../models/Stripe-Payments')
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Existing POST endpoint
app.post('/create-payment-intent', async (req, res) => {
    console.log(req.body); // Log the incoming request body
    const { amount, currency } = req.body;

    // Validate amount and currency
    if (!amount || !currency) {
        return res.status(400).send({ error: 'Amount and currency are required.' });
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        // Save payment details to MongoDB
        const payment = new Payment({
            paymentId: paymentIntent.id,
            amount: paymentIntent.amount,
            currency: paymentIntent.currency,
            status: paymentIntent.status,
        });

        await payment.save(); // Save the payment to the database

        res.status(200).send(paymentIntent);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).send({ error: error.message });
    }
});


// New GET endpoint to retrieve payment history
// New GET endpoint to retrieve payment history
app.get('/payment-history', async (req, res) => {
    try {
        const payments = await Payment.find().limit(10).sort({ createdAt: -1 }); // Fetch latest 10 payments
        res.status(200).send(payments);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
