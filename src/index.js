// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';  // Import global styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
