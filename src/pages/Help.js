// src/pages/Help.js
import React from 'react';

const Help = () => {
  return (
    <div className="help">
      <h1>Help & Support</h1>
      <h2>FAQs</h2>
      <ul>
        <li>
          <strong>How do I transfer funds?</strong>
          <p>To transfer funds, go to your wallet and click on "Transfer Funds".</p>
        </li>
        <li>
          <strong>How can I contact support?</strong>
          <p>You can reach us by emailing support@platform.com.</p>
        </li>
      </ul>
      <h2>Contact Support</h2>
      <button>Email Support</button>
    </div>
  );
};

export default Help;
