// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


contract FraudDetection {
    address public owner;
    
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
        bool flagged;
    }

    Transaction[] public transactions;
    mapping(address => uint256) public flaggedCount;
    event TransactionRecorded(address indexed sender, address indexed receiver, uint256 amount, bool flagged);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function recordTransaction(address _receiver, uint256 _amount, bool _flagged) public {
        transactions.push(Transaction(msg.sender, _receiver, _amount, block.timestamp, _flagged));
        if (_flagged) {
            flaggedCount[msg.sender]++;
        }
        emit TransactionRecorded(msg.sender, _receiver, _amount, _flagged);
    }

    function getTransaction(uint256 index) public view returns (address, address, uint256, uint256, bool) {
        require(index < transactions.length, "Invalid index");
        Transaction memory txn = transactions[index];
        return (txn.sender, txn.receiver, txn.amount, txn.timestamp, txn.flagged);
    }

    function getTotalTransactions() public view returns (uint256) {
        return transactions.length;
    }
}
