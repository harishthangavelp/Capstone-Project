// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const checkoutRouter = require('./routes/checkout'); // Assuming your route is saved in routes/checkout.js

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs'); // Use EJS for rendering views
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

// // Routes
// app.use('/', checkoutRouter);

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

















// server.js (or your main server file)
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const cors = require('cors');

// Use CORS middleware
app.use(cors());

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Middleware to parse JSON requests

app.post('/create-checkout-session', async (req, res) => {
    const { quantity, priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceId, // Use the price ID passed from the client
                    quantity: quantity, // Set the quantity from the request body
                },
            ],
            success_url: 'http://localhost:5173/success', // Adjust as necessary
            cancel_url: 'http://localhost:5173/cancel',   // Adjust as necessary
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

