const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoutes = require('../routes/payment'); // Adjust path as needed

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Use the payment routes
app.use('/api/payment', paymentRoutes);

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.post('/api/payment/orders', (req, res) => {
        paiduserModel.create(req.body)
            .then(accessdata => res.json(accessdata))
            .catch(err => res.status(400).json(err)); // 400 for bad requests
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
