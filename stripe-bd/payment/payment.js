// models/Payment.js
const mongoose = require('mongoose');

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
    customerEmail: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('collect-data', paymentSchema);
