// src/features/SocialTrading/InvestmentClubDashboard.js
import React from 'react';

const InvestmentClubDashboard = () => {
  return (
    <div className="investment-club-dashboard">
      <h2>Investment Club Dashboard</h2>
      <p>Overview of the club’s investments, gains, and performance.</p>
      {/* You can add investment summary, club performance graph here */}
      <div className="club-performance">
        <p>Total Investment: $XX,XXX</p>
        <p>Total Gain: $X,XXX</p>
        <p>Performance: +X%</p>
      </div>
    </div>
  );
};

export default InvestmentClubDashboard;
