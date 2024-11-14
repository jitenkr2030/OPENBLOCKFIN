// src/features/DeFi/PortfolioOverview.js
import React, { useState, useEffect } from 'react';

const PortfolioOverview = () => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Simulate fetching portfolio data
    const fetchPortfolioData = () => {
      setPortfolio([
        { asset: 'Bitcoin', amount: 2, currentValue: 40000 },
        { asset: 'Ethereum', amount: 10, currentValue: 2500 },
        { asset: 'DeFi Token', amount: 500, currentValue: 5 },
      ]);
    };

    fetchPortfolioData();
  }, []);

  if (!portfolio) return <p>Loading portfolio...</p>;

  return (
    <div className="portfolio-overview">
      <h2>Portfolio Overview</h2>
      {portfolio.map((item, index) => (
        <div key={index}>
          <p>{item.asset}: {item.amount} tokens</p>
          <p>Current Value: ${item.amount * item.currentValue}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioOverview;
