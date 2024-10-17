const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const paiduserModel = require('../models/paid-user');

const Razorpay = require('razorpay');
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Create order
app.post('/api/payment/orders', async (req, res) => {
    const { amount, currency, receipt } = req.body;

    try {
        // Create Razorpay order
        const options = {
            amount: amount * 100, // Amount in paise (Razorpay expects the amount in smallest currency unit)
            currency,
            receipt
        };
        const order = await razorpay.orders.create(options);

        // Save to MongoDB
        const accessdata = await paiduserModel.create({
            ...req.body,
            orderId: order.id, // Storing Razorpay's order ID
            status: "created"
        });

        res.json({ order, accessdata });
    } catch (err) {
        res.status(400).json({ error: 'Failed to create order', message: err.message });
    }
});



// Get paid users
app.get('/payment-details/:paymentId',async(req,res) => {
    const paymentId = req.params.paymentId;
    try{
    const payment = await razorpay.payments.fetch(paymentId);
    res.json(payment);
    }
    catch(error){
    res.status(500).json({error: 'Failed to retrieve payment details',message: error.message});
    }
    });

// Start server
app.listen(3001, () => {
    console.log('Server is live on port 3001');
});
