// src/features/AIFeatures/FraudAlerts.js
import React, { useState, useEffect } from 'react';

const FraudAlerts = () => {
  const [fraudAlerts, setFraudAlerts] = useState([]);

  useEffect(() => {
    // Simulate fetching fraud alert data
    const fetchFraudAlerts = () => {
      setFraudAlerts([
        'Suspicious login from new device.',
        'Unusual spending pattern detected on your card.',
      ]);
    };

    fetchFraudAlerts();
  }, []);

  return (
    <div className="fraud-alerts">
      <h2>Fraud Alerts</h2>
      {fraudAlerts.length === 0 ? (
        <p>No fraud alerts at the moment.</p>
      ) : (
        <ul>
          {fraudAlerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FraudAlerts;
