const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const paiduserModel = require('../models/paid-user');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Create order
app.post('/api/payment/orders', (req, res) => {
    paiduserModel.create(req.body)
        .then(accessdata => res.json(accessdata))
        .catch(err => res.status(400).json(err)); // 400 for bad requests
});

// Get paid users
app.get("/getpaid", async (req, res) => {
    try {
        const paiduserData = await paiduserModel.find();
        res.json(paiduserData);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

// Start server
app.listen(3001, () => {
    console.log('Server is live on port 3001');
});
