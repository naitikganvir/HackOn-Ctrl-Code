// backend/models/fraudModel.js

const checkFraud = (amount, sender, receiver) => {
    // Simple fraud detection logic for demonstration purposes
    if (amount > 1000 && sender !== receiver) {
      return 'Fraudulent';
    }
    return 'Legitimate';
  };
  
  module.exports = { checkFraud };
  