// src/features/FinanceIntegration/BankAccountLink.js
import React, { useState } from 'react';

const BankAccountLink = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [isLinked, setIsLinked] = useState(false);

  const handleLinkBank = () => {
    // Logic to integrate with backend or payment gateway for bank linking
    setIsLinked(true);
  };

  return (
    <div className="bank-account-link">
      <h2>Link Your Bank Account</h2>
      {!isLinked ? (
        <div>
          <div>
            <label>Bank Name: </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </div>
          <div>
            <label>Account Number: </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <button onClick={handleLinkBank}>Link Bank Account</button>
        </div>
      ) : (
        <p>Your bank account is successfully linked!</p>
      )}
    </div>
  );
};

export default BankAccountLink;
