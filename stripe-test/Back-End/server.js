const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const checkoutRouter = require('./routes/checkout'); // Assuming your route is saved in routes/checkout.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Use EJS for rendering views
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

// Routes
app.use('/', checkoutRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
