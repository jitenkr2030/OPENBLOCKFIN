// src/features/P2PTransfer/P2PTransferForm.js
import React, { useState } from 'react';

const P2PTransferForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleTransfer = () => {
    if (!recipient || !amount || !message) {
      setError("All fields are required.");
      return;
    }

    // Simulate transfer logic (could be an API call in a real app)
    const transferDetails = { recipient, amount, message, date: new Date() };
    localStorage.setItem('transferDetails', JSON.stringify(transferDetails));

    setError(null);
    alert('Transfer Successful!');
  };

  return (
    <div className="p2p-transfer-form">
      <h2>Transfer Funds</h2>
      <input 
        type="text" 
        placeholder="Recipient" 
        value={recipient} 
        onChange={(e) => setRecipient(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <textarea 
        placeholder="Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default P2PTransferForm;
