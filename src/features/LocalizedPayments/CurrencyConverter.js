// src/features/LocalizedPayments/CurrencyConverter.js
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    // Mock conversion rate
    const conversionRate = 1.2; // Example: 1 USD = 1.2 EUR
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div>
        <label>Amount in USD: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={convertCurrency}>Convert to EUR</button>
      {convertedAmount && <p>Converted Amount: {convertedAmount} EUR</p>}
    </div>
  );
};

export default CurrencyConverter;
