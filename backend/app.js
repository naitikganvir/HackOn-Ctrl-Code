const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Parse incoming JSON data

// Dummy AI Model (Fraud Prediction Logic)
const predictFraud = (amount, sender, receiver) => {
  // Simple dummy fraud prediction logic
  if (amount > 1000) {
    return "Fraudulent"; // If amount is greater than 1000, mark as fraudulent
  } else {
    return "Real Transaction";
  }
};

// Dummy Blockchain Check (for Sender's Balance)
const getSenderBalance = (sender) => {
  // Dummy balance return based on sender address
  if (sender === "0x1234567890abcdef1234567890abcdef12345678") {
    return 5; // Return balance as 5 ETH
  } else {
    return 0; // No balance for other addresses
  }
};

// Endpoint for fraud prediction
app.post("/predict", async (req, res) => {
  const { amount, sender, receiver } = req.body;

  // Print received data for debugging
  console.log(`Received Data: Amount: ${amount}, Sender: ${sender}, Receiver: ${receiver}`);

  // Perform fraud prediction
  const prediction = predictFraud(amount, sender, receiver);

  // Get sender's balance (dummy blockchain check)
  const balance = getSenderBalance(sender);

  // Respond with prediction and balance data
  res.json({ prediction, balance });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
