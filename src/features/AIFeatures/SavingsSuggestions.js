// src/features/AIFeatures/SavingsSuggestions.js
import React, { useState, useEffect } from 'react';

const SavingsSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simulate fetching AI-based suggestions
    const fetchSuggestions = () => {
      setSuggestions([
        'Save 10% of your monthly income in an emergency fund.',
        'Invest in tax-advantaged accounts like IRAs.',
        'Reduce discretionary spending by 15%.',
      ]);
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="savings-suggestions">
      <h2>Savings Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsSuggestions;
