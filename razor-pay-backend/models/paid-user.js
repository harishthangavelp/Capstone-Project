
const mongoose = require('mongoose');

const paiduserSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    amount_due: { type: Number, required: true },
    amount_paid: { type: Number, required: true },
    attempts: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }, // Use Date for easier querying
    currency: { type: String, required: true },
    entity: { type: String, default: 'payment' },
    id: { type: String, unique: true, required: true }, // Unique constraint
    notes: { type: [String], default: [] }, // Array of strings if notes are text
    offer_id: { type: String, default: null },
    receipt: { type: String, required: true },
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' }
}, { timestamps: true });


const paiduserModel = mongoose.model('accessdata',paiduserSchema)

module.exports = paiduserModel;