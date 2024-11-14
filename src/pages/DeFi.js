// src/pages/DeFi.js
import React, { useState, useEffect } from 'react';

const DeFi = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Fetch user's DeFi investments (mocked here)
    setInvestments([
      { id: 1, name: 'Staking Pool 1', amount: 2, roi: 12, status: 'Active' },
      { id: 2, name: 'Liquidity Pool 2', amount: 5, roi: 8, status: 'Completed' },
    ]);
  }, []);

  return (
    <div className="defi">
      <h1>My DeFi Investments</h1>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            <h3>{investment.name}</h3>
            <p>Amount: {investment.amount} ETH</p>
            <p>ROI: {investment.roi}%</p>
            <p>Status: {investment.status}</p>
          </li>
        ))}
      </ul>
      <button>View More</button>
    </div>
  );
};

export default DeFi;
