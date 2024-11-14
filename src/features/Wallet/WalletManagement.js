// src/features/Wallet/WalletManagement.js
import React, { useState, useEffect } from 'react';

const WalletManagement = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const savedWallet = JSON.parse(localStorage.getItem('userWallet')); // Get saved wallet
    if (savedWallet) {
      setWallet(savedWallet);
    }
  }, []);

  if (!wallet) {
    return <p>No wallet found. Please create one first.</p>;
  }

  return (
    <div className="wallet-management">
      <h2>Wallet Details</h2>
      <p><strong>Wallet Name:</strong> {wallet.walletName}</p>
      <p><strong>Balance:</strong> $1000.00</p> {/* Dummy Balance */}
      <button>Edit Wallet</button>
      <button>Deposit Funds</button>
      <button>Withdraw Funds</button>
    </div>
  );
};

export default WalletManagement;
