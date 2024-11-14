// src/features/DeFi/LendingDashboard.js
import React, { useState } from 'react';

const LendingDashboard = () => {
  const [lentAmount, setLentAmount] = useState(0);

  const lendAsset = () => {
    // Simulate lending logic
    setLentAmount(lentAmount + 1000);
  };

  return (
    <div className="lending-dashboard">
      <h2>Lending Dashboard</h2>
      <p>Total Lent: ${lentAmount}</p>
      <button onClick={lendAsset}>Lend $1000</button>
    </div>
  );
};

export default LendingDashboard;
