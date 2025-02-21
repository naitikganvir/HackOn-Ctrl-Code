// backend/routes/predictRoute.js

const express = require('express');
const { checkFraud } = require('../models/fraudModel');
const { getBalance } = require('../utils/blockchainUtils');
const router = express.Router();

router.post('/', async (req, res) => {
  const { amount, sender, receiver } = req.body;

  if (!amount || !sender || !receiver) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Call fraud detection model
    const prediction = checkFraud(amount, sender, receiver);

    // Fetch sender's balance from the blockchain
    const balance = await getBalance(sender);

    // Respond with prediction result and balance
    res.json({
      prediction: prediction,
      balance: balance,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
