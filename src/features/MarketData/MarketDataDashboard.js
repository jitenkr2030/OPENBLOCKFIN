// src/features/MarketData/MarketDataDashboard.js
import React, { useState, useEffect } from 'react';

const MarketDataDashboard = () => {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    // Fetch market data from an API (e.g., stock prices, indices, etc.)
    // This is a mock example of fetching market data
    setMarketData({
      stocks: { symbol: 'AAPL', price: 145.09 },
      crypto: { symbol: 'BTC', price: 47000 },
      forex: { symbol: 'USD/EUR', price: 1.12 },
    });
  }, []);

  return (
    <div className="market-data-dashboard">
      <h2>Market Data Dashboard</h2>
      {marketData ? (
        <div className="market-summary">
          <div>Stock Price (AAPL): ${marketData.stocks.price}</div>
          <div>Crypto Price (BTC): ${marketData.crypto.price}</div>
          <div>Forex Rate (USD/EUR): {marketData.forex.price}</div>
        </div>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
};

export default MarketDataDashboard;
