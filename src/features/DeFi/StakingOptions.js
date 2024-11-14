// src/features/DeFi/StakingOptions.js
import React, { useState, useEffect } from 'react';

const StakingOptions = () => {
  const [stakingOptions, setStakingOptions] = useState([]);

  useEffect(() => {
    // Simulate fetching staking options
    const fetchStakingOptions = () => {
      setStakingOptions([
        { name: 'Ethereum Staking', annualReturn: 4.5 },
        { name: 'Polkadot Staking', annualReturn: 7.2 },
      ]);
    };

    fetchStakingOptions();
  }, []);

  return (
    <div className="staking-options">
      <h2>Staking Options</h2>
      <ul>
        {stakingOptions.map((option, index) => (
          <li key={index}>
            <p>{option.name} - {option.annualReturn}% Annual Return</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StakingOptions;
