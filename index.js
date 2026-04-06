const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock user data
const user = {
    username: 'robert.gordon',
    password: 'SecureBank123!'
};

// API endpoint for login
app.post('/api/login', (req, res) => {
    // Here should handle login logic based on req.body username and password
    res.json({ message: 'Login successful!', user });
});

// API endpoint for balance
app.get('/api/balance', (req, res) => {
    // Return mock balance data
    res.json({ balance: 1000 }); // Mock balance
});

// API endpoint for transactions
app.get('/api/transactions', (req, res) => {
    // Return mock transaction data
    res.json({ transactions: [
        { id: 1, amount: -50, type: 'withdrawal' },
        { id: 2, amount: 500, type: 'deposit' }
    ] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});