// src/features/NFT/NftDetailView.js
import React from 'react';

const NftDetailView = ({ nft }) => {
  return (
    <div className="nft-detail-view">
      <h2>{nft.title}</h2>
      <p>Price: {nft.price} ETH</p>
      <p>Description: {nft.description}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default NftDetailView;

