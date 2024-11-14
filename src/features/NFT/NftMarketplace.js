// src/features/NFT/NftMarketplace.js
import React from 'react';

const NftMarketplace = () => {
  const nfts = [
    { title: 'NFT 1', price: 0.5 },
    { title: 'NFT 2', price: 1.2 },
  ];

  return (
    <div className="nft-marketplace">
      <h2>NFT Marketplace</h2>
      <div className="nft-list">
        {nfts.map((nft, index) => (
          <div key={index} className="nft-item">
            <h3>{nft.title}</h3>
            <p>Price: {nft.price} ETH</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftMarketplace;
