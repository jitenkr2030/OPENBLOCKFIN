// src/features/BillPayment/PaymentHistory.js
import React from 'react';

const PaymentHistory = () => {
  const payments = [
    { billName: 'Electricity Bill', amount: 120, date: '2024-11-01' },
    { billName: 'Water Bill', amount: 50, date: '2024-10-25' },
  ];

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            <p><strong>{payment.billName}</strong></p>
            <p>Amount: ${payment.amount}</p>
            <p>Date: {payment.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
