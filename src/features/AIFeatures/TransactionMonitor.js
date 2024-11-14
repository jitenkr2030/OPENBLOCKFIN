// src/features/AIFeatures/TransactionMonitor.js
import React, { useState, useEffect } from 'react';

const TransactionMonitor = () => {
  const [transactions, setTransactions] = useState([]);
  const [suspicious, setSuspicious] = useState(false);

  useEffect(() => {
    // Simulate fetching transaction data
    const fetchTransactions = () => {
      const sampleTransactions = [
        { id: 1, amount: 200, type: 'debit', date: '2024-11-15' },
        { id: 2, amount: 10000, type: 'credit', date: '2024-11-16' },
      ];

      setTransactions(sampleTransactions);
      checkForSuspiciousTransactions(sampleTransactions);
    };

    fetchTransactions();
  }, []);

  const checkForSuspiciousTransactions = (transactions) => {
    const suspiciousTransaction = transactions.some(
      (transaction) => transaction.amount > 5000
    );
    setSuspicious(suspiciousTransaction);
  };

  return (
    <div className="transaction-monitor">
      <h2>Transaction Monitor</h2>
      {suspicious && <p>Suspicious activity detected!</p>}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type} of ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionMonitor;
