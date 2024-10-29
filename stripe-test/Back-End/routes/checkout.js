// Import the necessary modules
require('dotenv').config();
const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stripe Checkout Example' });
});

// POST create checkout session
router.post('/create-checkout-session', async function(req, res, next) {
  try {
    const { quantity, priceId } = req.body; // Destructure quantity and priceId from the request body

    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return res.status(400).send({ error: 'Invalid quantity' });
    }

    if (!priceId) {
      return res.status(400).send({ error: 'Price ID is required' });
    }

    const session = await stripe.checkout.sessions.create({
      customer: 'cus_R3MFnzXaNAv4p3', // Replace with your actual customer ID
      payment_method_types: ['card'],
      mode: "payment",
      line_items: [{
        price: priceId, // Use the price ID passed from the client
        quantity: parsedQuantity
      }],
      success_url: `https://your-frontend-app.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'https://your-frontend-app.com/cancel',
    });

    res.send({ id: session.id });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: e.message });
  }
});

// Export the router
module.exports = router;
