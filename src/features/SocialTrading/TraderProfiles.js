// src/features/SocialTrading/TraderProfiles.js
import React from 'react';

const TraderProfiles = () => {
  const traders = [
    { name: 'John Doe', totalInvestments: 50000, performance: '15%' },
    { name: 'Jane Smith', totalInvestments: 100000, performance: '25%' },
    { name: 'Mark Lee', totalInvestments: 75000, performance: '18%' },
  ];

  return (
    <div className="trader-profiles">
      <h2>Trader Profiles</h2>
      <div className="profile-list">
        {traders.map((trader, index) => (
          <div key={index} className="profile">
            <p><strong>{trader.name}</strong></p>
            <p>Total Investments: ${trader.totalInvestments}</p>
            <p>Performance: {trader.performance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraderProfiles;

