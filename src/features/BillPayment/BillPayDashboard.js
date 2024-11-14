// src/features/BillPayment/BillPayDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BillPayDashboard = () => {
  const bills = [
    { name: 'Electricity Bill', amount: 120, dueDate: '2024-11-15' },
    { name: 'Water Bill', amount: 50, dueDate: '2024-11-18' },
  ];

  return (
    <div className="bill-pay-dashboard">
      <h2>Your Bills</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            <p><strong>{bill.name}</strong></p>
            <p>Amount: ${bill.amount}</p>
            <p>Due Date: {bill.dueDate}</p>
            <Link to="/bill-payment-form">Pay Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillPayDashboard;

