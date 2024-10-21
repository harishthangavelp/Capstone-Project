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

// Ensure this route exists in your backend (Express)
app.post('/api/create-payment-intent', async (req, res) => {
    try {
      // PaymentIntent creation logic
      const { email } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Example amount in cents ($10)
        currency: 'usd',
        receipt_email: email,
      });
 
      // Send the clientSecret to the frontend
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).send('Internal Server Error');
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

app.get('/api/payment-intent/:id/', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if the ID is valid
    if (!id) {
      return res.status(400).json({ error: 'Payment Intent ID is required' });
    }

    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(id);

    // Send the payment intent data back to the client
    res.json({ paymentIntent });
  } catch (error) {
    console.error('Error retrieving payment intent:', error.message);

    // Send a response with the error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
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
