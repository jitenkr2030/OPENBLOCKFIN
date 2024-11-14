// src/features/AIFeatures/BudgetingTool.js
import React, { useState } from 'react';

const BudgetingTool = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  const handleSubmit = () => {
    const suggestedSavings = income * 0.2; // AI suggests 20% savings
    setSavings(suggestedSavings);
  };

  return (
    <div className="budgeting-tool">
      <h2>Budgeting Tool</h2>
      <div>
        <label>Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Expenses:</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(Number(e.target.value))}
        />
      </div>
      <button onClick={handleSubmit}>Get Budget Suggestions</button>
      <div>
        <h3>Suggested Savings:</h3>
        <p>${savings}</p>
      </div>
    </div>
  );
};

export default BudgetingTool;
