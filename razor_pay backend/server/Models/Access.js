const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define your Mongoose schema
const accessSchema = new mongoose.Schema({
    data: String,
    key: String,
    amount: Number,
    currency: String, // Should typically be a string like 'INR'
    name: String,
    description: String,
    image: String,
    order_id: String,
    orderUrl: String
});

// Create a Mongoose model
const accessModel = mongoose.model('accesslist', accessSchema);

module.exports = accessModel;
