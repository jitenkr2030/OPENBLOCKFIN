// src/features/DeFi/InterestAccounts.js
import React, { useState, useEffect } from 'react';

const InterestAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Simulate fetching interest account data
    const fetchInterestAccounts = () => {
      setAccounts([
        { name: 'StableCoin Savings', interestRate: 3 },
        { name: 'ETH Staking', interestRate: 5 },
        { name: 'DeFi Lending', interestRate: 8 },
      ]);
    };

    fetchInterestAccounts();
  }, []);

  return (
    <div className="interest-accounts">
      <h2>Interest Accounts</h2>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            <p>{account.name} - {account.interestRate}% interest</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestAccounts;

