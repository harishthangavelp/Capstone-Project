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

// Start server
app.listen(3001, () => {
    console.log('Server is live on port 3001');
});
