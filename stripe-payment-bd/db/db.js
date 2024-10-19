// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51QAvR5FxddvTxBZJPGHULoTo9d5Db1bhy9VGvrD25VuJo7ksfyzQ5Z5AXVSZE6b7aU1YfvVW7cTSIZ9iYIZ88yOL00WKdT95EN');
const Payment = require('../payment/payment');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://harishthangavelp:LXxXUkf2D5j68IfH@hamongvel.6riq9qs.mongodb.net/Stripe-Data').then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
