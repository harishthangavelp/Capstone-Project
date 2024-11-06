// // server.js (or your main server file)
// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const app = express();
// const cors = require('cors');

// // Use CORS middleware
// app.use(cors());

// // Middleware
// app.use(express.json()); // Middleware to parse JSON requests

// const PORT = process.env.PORT || 3000;

// // POST create checkout session
// app.post('/create-checkout-session', async (req, res) => {
//     const { quantity, priceId } = req.body;

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             mode: 'payment',
//             line_items: [
//                 {
//                     price: priceId, // Use the price ID passed from the client
//                     quantity: quantity, // Set the quantity from the request body
//                 },
//             ],
//             success_url: `${req.headers.origin}/success`, // Adjust as necessary
//             cancel_url: `${req.headers.origin}/cancel`,   // Adjust as necessary
//         });
//         res.json({ id: session.id });
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

// // GET checkout session details
// app.get('/checkout-session/:sessionId', async (req, res) => {
//     const { sessionId } = req.params;

//     try {
//         const session = await stripe.checkout.sessions.retrieve(sessionId);
//         res.json(session);
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: 'application/json' })); // Needed for Stripe webhook

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST create checkout session
app.post('/create-checkout-session', async (req, res) => {
    const { quantity, priceId } = req.body;

    try {
      
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceId,
                    quantity: quantity,
                },
            ],
success_url: `${req.headers.origin}/success`, // Ensure 'req.headers.origin' resolves to a valid domain
cancel_url: `${req.headers.origin}/cancel`,

        });
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: error.message });
    }
});

// Webhook endpoint for Stripe
app.post('/webhook', async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Extract payment details
        const email = session.customer_details.email;
        const amount_total = (session.amount_total / 100).toFixed(2); // Convert cents to dollars
        const currency = session.currency.toUpperCase();
        const paymentStatus = session.payment_status;

        // Format the email content
        const emailContent = `
            <h1>Payment Confirmation</h1>
            <p>Thank you for your payment.</p>
            <p><strong>Payment Details:</strong></p>
            <ul>
                <li>Email: ${email}</li>
                <li>Amount: ${amount_total} ${currency}</li>
                <li>Status: ${paymentStatus}</li>
            </ul>
            <p>Thank you for your purchase!</p>
        `;

        // Send email
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email, // Send to customer email
                subject: 'Payment Confirmation',
                html: emailContent,
            });
            console.log(`Payment confirmation email sent to ${email}`);
        } catch (err) {
            console.error(`Error sending email: ${err}`);
        }
    }

    // Acknowledge receipt of the event
    res.json({ received: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
