// src/features/LocalizedPayments/LocalizedPayments.js
import React, { useState } from 'react';

const LocalizedPayments = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Logic to process localized payment
    alert(`Payment of ${amount} via ${paymentMethod} successful!`);
  };

  return (
    <div className="localized-payments">
      <h2>Localized Payments</h2>
      <div>
        <label>Select Payment Method: </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default LocalizedPayments;
