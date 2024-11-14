// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userStats, setUserStats] = useState({ balance: 0, nfts: 0, defiInvestments: 0 });

  useEffect(() => {
    // Fetch user stats from an API (this is a mock for demonstration)
    setUserStats({
      balance: 10, // Example ETH balance
      nfts: 5, // Number of NFTs
      defiInvestments: 3, // Number of DeFi investments
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h3>Balance</h3>
          <p>{userStats.balance} ETH</p>
        </div>
        <div className="stat">
          <h3>My NFTs</h3>
          <p>{userStats.nfts} NFTs</p>
        </div>
        <div className="stat">
          <h3>DeFi Investments</h3>
          <p>{userStats.defiInvestments} Investments</p>
        </div>
      </div>
      <div className="actions">
        <Link to="/wallet">
          <button>Go to Wallet</button>
        </Link>
        <Link to="/defi">
          <button>View DeFi Investments</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
