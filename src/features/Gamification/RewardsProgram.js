// src/features/Gamification/RewardsProgram.js
import React, { useState } from 'react';

const RewardsProgram = () => {
  const [points, setPoints] = useState(0);

  const handleEarnPoints = () => {
    setPoints(points + 50); // Example of earning points
  };

  const handleRedeemPoints = () => {
    if (points >= 100) {
      setPoints(points - 100); // Redeem 100 points
      alert('Points redeemed!');
    } else {
      alert('Not enough points!');
    }
  };

  return (
    <div className="rewards-program">
      <h2>Rewards Program</h2>
      <p>Your Points: {points}</p>
      <button onClick={handleEarnPoints}>Earn Points</button>
      <button onClick={handleRedeemPoints}>Redeem Points</button>
    </div>
  );
};

export default RewardsProgram;
