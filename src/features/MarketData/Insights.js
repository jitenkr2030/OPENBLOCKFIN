// src/features/MarketData/Insights.js
import React from 'react';

const Insights = () => {
  return (
    <div className="insights">
      <h2>Market Insights</h2>
      <p>Latest trends, predictions, and market analysis.</p>
      {/* You can add charts, reports, and predictions here */}
      <div className="insight-summary">
        <p>Market is showing bullish trends for the next quarter.</p>
        <p>Predicted growth for tech stocks is 15% in Q1 2025.</p>
      </div>
    </div>
  );
};

export default Insights;
