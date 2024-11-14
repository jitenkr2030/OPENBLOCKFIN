// src/features/BillPayment/BillPaymentForm.js
import React, { useState } from 'react';

const BillPaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [billName, setBillName] = useState('');
  const [error, setError] = useState(null);

  const handlePayment = () => {
    if (!amount || !billName) {
      setError("Please fill in both fields.");
      return;
    }

    // Simulate payment processing
    alert(`Payment of $${amount} for ${billName} successful!`);
    setError(null);
  };

  return (
    <div className="bill-payment-form">
      <h2>Pay Bill</h2>
      <input 
        type="text" 
        placeholder="Bill Name" 
        value={billName} 
        onChange={(e) => setBillName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default BillPaymentForm;
