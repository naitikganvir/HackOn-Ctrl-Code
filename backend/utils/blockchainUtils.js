// backend/utils/blockchainUtils.js

const Web3 = require('web3');

// Connect to Ethereum node (using Infura or your own node)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Function to get balance of an Ethereum address
const getBalance = async (address) => {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');  // Convert balance from Wei to Ether
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw new Error('Blockchain error');
  }
};

module.exports = { getBalance };
