import React, { useState } from "react";
import axios from "axios";
import "./../styles/styles.css";

const HeroSection = () => {
  const [transactionData, setTransactionData] = useState({
    amount: "",
    sender: "",
    receiver: "",
  });
  const [fraudResult, setFraudResult] = useState(null);
  const [balance, setBalance] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  // Ensure handleSubmit is properly bound to the button click
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Validate inputs
      if (!transactionData.amount || !transactionData.sender || !transactionData.receiver) {
        alert("All fields are required.");
        return;
      }

      // Send the data to the backend for fraud prediction
      const response = await axios.post("http://localhost:5000/predict", transactionData);
      
      // Update fraud result and balance from response
      setFraudResult(response.data.prediction); 
      setBalance(response.data.balance); 
    } catch (error) {
      console.error("Error in prediction", error);
      alert("An error occurred while predicting fraud. Please try again.");
    }
  };

  return (
    <section className="hero">
      <h1>AI Powered <span className="highlight">Transaction</span> Fraud Detection</h1>
      <p>
        AI-powered Blockchain based fraud detection for ultimate security—secure every transaction in real time and prevent fraudulent activities effectively.
      </p>

      <div className="transaction-input">
        {/* Input Fields */}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={transactionData.amount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="sender"
          placeholder="Sender Address"
          value={transactionData.sender}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="receiver"
          placeholder="Receiver Address"
          value={transactionData.receiver}
          onChange={handleInputChange}
        />

        {/* Submit Button */}
        <button className="btn" onClick={handleSubmit}>Submit</button>

        {/* Display Results */}
        {fraudResult && <p>Prediction: {fraudResult}</p>}
        {balance !== null && <p>Sender Balance: {balance} ETH</p>}
      </div>
    </section>
  );
};

export default HeroSection;
