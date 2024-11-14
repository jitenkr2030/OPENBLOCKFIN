// src/features/P2PTransfer/TransferHistory.js
import React from 'react';

const TransferHistory = () => {
  const transfers = [
    { recipient: 'John Doe', amount: 100, date: '2024-11-10 14:00' },
    { recipient: 'Jane Smith', amount: 250, date: '2024-11-09 16:00' },
  ];

  return (
    <div className="transfer-history">
      <h2>Transfer History</h2>
      <ul>
        {transfers.map((transfer, index) => (
          <li key={index}>
            <p><strong>Recipient:</strong> {transfer.recipient}</p>
            <p><strong>Amount:</strong> ${transfer.amount}</p>
            <p><strong>Date:</strong> {transfer.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferHistory;
