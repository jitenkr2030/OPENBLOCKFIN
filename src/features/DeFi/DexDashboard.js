// src/features/DeFi/DexDashboard.js
import React, { useState } from 'react';

const DexDashboard = () => {
  const [tradeHistory, setTradeHistory] = useState([]);

  const performTrade = () => {
    // Simulate a trade
    const trade = { pair: 'ETH/USDT', amount: 2, price: 3000 };
    setTradeHistory([...tradeHistory, trade]);
  };

  return (
    <div className="dex-dashboard">
      <h2>DEX Dashboard</h2>
      <button onClick={performTrade}>Perform Trade</button>
      <ul>
        {tradeHistory.map((trade, index) => (
          <li key={index}>
            {trade.pair}: {trade.amount} at ${trade.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DexDashboard;
