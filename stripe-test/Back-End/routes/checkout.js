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
    const quantity = parseInt(req.body.quantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).send({ error: 'Invalid quantity' });
    }

    const session = await stripe.checkout.sessions.create({
      customer: 'cus_R3MFnzXaNAv4p3', // Replace with your actual customer ID
      payment_method_types: ['card'],
      mode: "payment",
      line_items: [{
        price: 'price_1QEVO5FxddvTxBZJV9BX1A0X', // One-time pricing ID
        quantity: quantity
      }],
      success_url: 'https://capstone-project-140.onrender.com/success.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://capstone-project-140.onrender.com/cancel.html',
    });

    res.send({ id: session.id });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: e.message });
  }
});

// Export the router
module.exports = router;
