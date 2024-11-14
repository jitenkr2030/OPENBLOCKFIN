// src/features/DeFi/BorrowingDashboard.js
import React, { useState } from 'react';

const BorrowingDashboard = () => {
  const [borrowedAmount, setBorrowedAmount] = useState(0);

  const borrowAsset = () => {
    // Simulate borrowing logic
    setBorrowedAmount(borrowedAmount + 1000); // Adding borrowed amount
  };

  return (
    <div className="borrowing-dashboard">
      <h2>Borrowing Dashboard</h2>
      <p>Total Borrowed: ${borrowedAmount}</p>
      <button onClick={borrowAsset}>Borrow $1000</button>
    </div>
  );
};

export default BorrowingDashboard;

