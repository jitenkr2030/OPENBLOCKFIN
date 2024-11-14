// src/features/Freemium/SubscriptionDashboard.js
import React, { useState } from 'react';

const SubscriptionDashboard = () => {
  const [subscription, setSubscription] = useState('Free');

  const handleUpgrade = () => {
    setSubscription('Premium');
  };

  return (
    <div className="subscription-dashboard">
      <h2>Your Subscription</h2>
      <p>Current Plan: {subscription}</p>
      {subscription === 'Free' && (
        <button onClick={handleUpgrade}>Upgrade to Premium</button>
      )}
    </div>
  );
};

export default SubscriptionDashboard;
