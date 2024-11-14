// src/features/Gamification/RewardsDashboard.js
import React from 'react';

const RewardsDashboard = () => {
  const rewards = [
    { name: 'Referral Bonus', points: 100 },
    { name: 'Milestone Achievement', points: 500 },
    { name: 'Activity Points', points: 200 },
  ];

  return (
    <div className="rewards-dashboard">
      <h2>Rewards Dashboard</h2>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>
            <p>{reward.name}: {reward.points} points</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsDashboard;
