// src/features/FinanceIntegration/BalanceUpdater.js
import React, { useState } from 'react';

const BalanceUpdater = () => {
  const [currentBalance, setCurrentBalance] = useState(1000);
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    setCurrentBalance(currentBalance + parseFloat(amount));
    setAmount('');
  };

  const handleWithdraw = () => {
    setCurrentBalance(currentBalance - parseFloat(amount));
    setAmount('');
  };

  return (
    <div className="balance-updater">
      <h2>Update Your Balance</h2>
      <p>Current Balance: ${currentBalance}</p>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default BalanceUpdater;
