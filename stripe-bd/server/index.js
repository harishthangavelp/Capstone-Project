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
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from your frontend
app.use(bodyParser.json());

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import Mongoose model
const Payment = require('../payment/payment'); // Ensure this path is correct

// Create a payment endpoint
app.post('/create-payment', async (req, res) => {
    const { amount, currency, source, customerEmail } = req.body; // Extract fields from the request body

    try {
        // Create a charge with Stripe
        const charge = await stripe.charges.create({
            amount,
            currency,
            source, // This is the token returned by Stripe.js
            receipt_email: customerEmail, // Optional: send a receipt to the customer
        });

        // Save payment to MongoDB
        const payment = new Payment({
            amount: charge.amount,
            currency: charge.currency,
            stripeChargeId: charge.id,
            customerEmail, // Store customer email for reference
        });

        await payment.save();

        res.json({ success: true, charge });
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({ error: error.message }); // Return the error message
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
















































// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const Stripe = require('stripe');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(cors({ origin: "http://localhost:5173" }));

// // Initialize Stripe
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Import Mongoose model
// const Payment = require('../payment/payment');

// // Create a payment endpoint
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

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
