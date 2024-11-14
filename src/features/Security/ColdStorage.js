// src/features/Security/ColdStorage.js
import React, { useState } from 'react';

const ColdStorage = () => {
  const [isStored, setIsStored] = useState(false);

  const toggleColdStorage = () => {
    setIsStored(!isStored);
  };

  return (
    <div className="cold-storage">
      <h2>Cold Storage</h2>
      <button onClick={toggleColdStorage}>
        {isStored ? 'Remove from Cold Storage' : 'Store in Cold Storage'}
      </button>
      <p>{isStored ? 'Your assets are securely stored in cold storage.' : 'Your assets are not in cold storage.'}</p>
    </div>
  );
};

export default ColdStorage;
