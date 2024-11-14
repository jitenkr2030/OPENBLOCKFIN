// src/features/MultiAsset/AssetManager.js
import React, { useState } from 'react';

const AssetManager = () => {
  const [assets, setAssets] = useState([
    { id: 1, name: 'Real Estate', value: 500000 },
    { id: 2, name: 'Stocks', value: 200000 },
  ]);

  return (
    <div className="asset-manager">
      <h2>Your Assets</h2>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            {asset.name}: ${asset.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetManager;
