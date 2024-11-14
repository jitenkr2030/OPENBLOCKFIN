// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} OpenBlockFin. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
