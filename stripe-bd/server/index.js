// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import Mongoose model
const Payment = require('../payment/payment');

// Create a payment endpoint
// app.post('/create-payment', async (req, res) => {
//     const { amount, currency, source, customerEmail } = req.body; // Extract fields from the request body

//     try {
//         // Create a charge with Stripe
//         const charge = await stripe.charges.create({
//             amount,
//             currency,
//             source, // This is the token returned by Stripe.js
//             receipt_email: customerEmail, // Optional: send a receipt to the customer
//         });

//         // Save payment to MongoDB
//         const payment = new Payment({
//             amount: charge.amount,
//             currency: charge.currency,
//             stripeChargeId: charge.id,
//             customerEmail, // Store customer email for reference
//         });

//         await payment.save();

//         res.json({ success: true, charge });
//     } catch (error) {
//         console.error('Payment error:', error);
//         res.status(500).json({ error: 'Payment failed' });
//     }
// });

app.post('/create-payment', async (req, res) => {
    const { amount, currency, source, customerEmail } = req.body;

    // Input validation
    if (!amount || !currency || !source || !customerEmail) {
        return res.status(400).json({ error: 'Missing required payment fields' });
    }

    

    try {
        // Create a charge with Stripe
        const charge = await stripe.charges.create({
            amount: amount , // Convert to cents
            currency,
            source, // Use the source from req.body
            receipt_email: customerEmail,
        });

        // Save payment to MongoDB
        const payment = new Payment({
            amount: charge.amount,
            currency: charge.currency,
            stripeChargeId: charge.id,
            customerEmail,
        });


        
        await payment.save();

        res.json({ success: true, charge });
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({ error: 'Payment failed' });
    }
});



// app.get('/payment/:id', async (req, res) => {
//     const { amount, currency, source, customerEmail } = req.body; // Get the payment ID from the URL parameters

//     try {
//         // Find the payment in MongoDB by ID
//         const payment = await Payment.find({
//             amount,
//             currency,
//             source, 
//             customerEmail,
// });
        
//         // Check if the payment exists
//         if (!payment) {
//             return res.status(404).json({ error: 'Payment not found' });
//         }

//         // Return the payment details
//         res.json({ amount: amount, currency, source, customerEmail, success: true, payment });
//     } catch (error) {
//         console.error('Error fetching payment:', error);
//         res.status(500).json({ error: error.message }); // Return the error message
//     }
// });

app.get('/payment/:id', async (req, res) => {
    const { id } = req.params; // Extract the id from the URL parameters

    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid payment ID format' });
    }

    try {
        // Find the payment in MongoDB by its ObjectId
        const payment = await stripe.payment.retrieve(paymentId);
        const isValidId = (id) => id.startsWith('pi_') || id.startsWith('ch_'); // Adjust based on the expected ID format
    
        if (!isValidId(paymentId)) {
            return res.status(400).json({ error: 'Invalid payment ID format' });
        }

        // Check if the payment exists
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }

        // Return the payment details
        res.json({ success: true, payment });
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(500).json({ error: error.message });
    }
});


// app.get('/payment/:id', async (req, res) => {
//     const { id } = req.params; // Extract payment ID from URL parameters

//     try {
//         // Find the payment in MongoDB by ID
//         const payment = await Payment.findById(id);

//         // Check if the payment exists
//         if (!payment) {
//             return res.status(404).json({ error: 'Payment not found' });
//         }

//         // Return the payment details
//         res.json({ success: true, payment });
//     } catch (error) {
//         console.error('Error fetching payment:', error);
//         res.status(500).json({ error: error.message });
//     }
// });


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});





