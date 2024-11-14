// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/p2p-transfer">P2P Transfer</Link></li>
        <li><Link to="/bills">Bill Payment</Link></li>
        <li><Link to="/defi">DeFi</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

