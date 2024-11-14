// src/features/P2PTransfer/TransactionConfirmation.js
import React, { useState, useEffect } from 'react';

const TransactionConfirmation = () => {
  const [transferDetails, setTransferDetails] = useState(null);

  useEffect(() => {
    const savedTransfer = JSON.parse(localStorage.getItem('transferDetails'));
    if (savedTransfer) {
      setTransferDetails(savedTransfer);
    }
  }, []);

  if (!transferDetails) {
    return <p>No transfer details found.</p>;
  }

  return (
    <div className="transaction-confirmation">
      <h2>Confirm Transaction</h2>
      <p><strong>Recipient:</strong> {transferDetails.recipient}</p>
      <p><strong>Amount:</strong> ${transferDetails.amount}</p>
      <p><strong>Message:</strong> {transferDetails.message}</p>
      <p><strong>Date:</strong> {new Date(transferDetails.date).toLocaleString()}</p>
      <button>Confirm Transfer</button>
      <button>Cancel</button>
    </div>
  );
};

export default TransactionConfirmation;
