// models/fraudModel.js
const tf = require("@tensorflow/tfjs-node");

// Placeholder function to simulate fraud detection model training
const trainModel = () => {
  // Fake data for training (you'll replace this with actual data later)
  const data = tf.tensor2d([
    [1000, 12, 15], // amount, sender, receiver length
    [50, 15, 20],
    [10000, 20, 25], // fraud example
  ]);

  const labels = tf.tensor2d([
    [0], // Legitimate
    [0], // Legitimate
    [1], // Fraudulent
  ]);

  // Create a simple neural network
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 4, inputShape: [3], activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  // Compile the model
  model.compile({ optimizer: "adam", loss: "binaryCrossentropy", metrics: ["accuracy"] });

  // Train the model
  model.fit(data, labels, { epochs: 50 }).then(() => {
    console.log("Model trained!");
  });

  return model;
};

module.exports = { trainModel };
