// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'harishthangavelp@gmail.com', // Your email
        pass: 'fexk pvsb hvpr olfs', // Your email password or app password
    },
});

// POST endpoint to send email
app.post('/send-email', (req, res) => {
    const { name, message } = req.body;
    const toEmail = req.body.toEmail || 'harishthangavelp@gmail.com'; // Use a default email if toEmail is not provided

    const mailOptions = {
        from: 'Unknown <no-reply@yourapp.com>', // Your email
        to: toEmail, // Recipient email
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
