const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const paiduserModel = require('../models/paid-user');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
router.post('/orders', async (req, res) => {
    const { amount } = req.body; // Assuming amount is sent in the request body

    try {
        const options = {
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'),
        };

        const order = await razorpay.orders.create(options);

        // Save to MongoDB
        const accessdata = await paiduserModel.create({
            ...req.body,
            orderId: order.id,
            status: 'created',
        });

        res.status(200).json({ order, accessdata });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create order', message: err.message });
    }
});

// Verify payment
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ message: 'Invalid signature sent!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});

// Get payment details
router.get('/payment-details/:paymentId', async (req, res) => {
    const paymentId = req.params.paymentId;
    try {
        const payment = await razorpay.payments.fetch(paymentId);
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve payment details', message: error.message });
    }
});

module.exports = router;
