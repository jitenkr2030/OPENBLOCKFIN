// src/features/Wallet/WalletCreation.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const WalletCreation = () => {
  const [walletName, setWalletName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleCreateWallet = () => {
    if (!walletName || !password) {
      setError("Both fields are required!");
      return;
    }
    
    // Simulate wallet creation process
    const newWallet = { walletName, password, createdAt: new Date() };
    localStorage.setItem('userWallet', JSON.stringify(newWallet)); // Store wallet in localStorage (for demo purposes)

    history.push('/wallet-management');
  };

  return (
    <div className="wallet-creation">
      <h2>Create a New Wallet</h2>
      <input 
        type="text" 
        placeholder="Wallet Name" 
        value={walletName} 
        onChange={(e) => setWalletName(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleCreateWallet}>Create Wallet</button>
    </div>
  );
};

export default WalletCreation;
