// src/pages/Wallet.js
import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch wallet balance and transactions (mocked here)
    setBalance(10); // Example balance in ETH
    setTransactions([
      { id: 1, type: 'Sent', amount: 0.5, date: '2024-11-01' },
      { id: 2, type: 'Received', amount: 1.0, date: '2024-11-02' },
    ]);
  }, []);

  return (
    <div className="wallet">
      <h1>My Wallet</h1>
      <p>Balance: {balance} ETH</p>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type} {transaction.amount} ETH on {transaction.date}
          </li>
        ))}
      </ul>
      <button>Transfer Funds</button>
    </div>
  );
};

export default Wallet;
