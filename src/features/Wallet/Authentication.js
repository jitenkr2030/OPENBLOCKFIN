// src/features/Wallet/Authentication.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Authentication = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = () => {
    const savedWallet = JSON.parse(localStorage.getItem('userWallet'));
    if (savedWallet && savedWallet.password === password) {
      history.push('/wallet-management');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="wallet-auth">
      <h2>Wallet Authentication</h2>
      <input 
        type="password" 
        placeholder="Enter Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
