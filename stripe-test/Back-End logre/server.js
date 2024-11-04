const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5555;

app.use(cors());
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

// Registration endpoint
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user data' });
        }

        let users = data.length ? JSON.parse(data) : [];

        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Username already exists!' });
        }

        users.push({ username, password });

        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), err => {
            if (err) {
                return res.status(500).json({ message: 'Error saving user data' });
            }
            res.status(201).json({ message: 'Registration successful!' });
        });
    });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user data' });
        }

        const users = data.length ? JSON.parse(data) : [];
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // If everything is okay, return a success response
        res.status(200).json({ message: 'Login successful!', username: user.username });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
