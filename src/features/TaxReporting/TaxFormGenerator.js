// src/features/TaxReporting/TaxFormGenerator.js
import React, { useState } from 'react';

const TaxFormGenerator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxForm, setTaxForm] = useState(null);

  const handleGenerateForm = () => {
    // Logic for generating the tax form based on income and deductions
    const form = {
      income,
      deductions,
      taxableIncome: income - deductions,
      estimatedTax: (income - deductions) * 0.2, // Example tax rate of 20%
    };
    setTaxForm(form);
  };

  return (
    <div className="tax-form-generator">
      <h2>Generate Tax Form</h2>
      <form>
        <div>
          <label>Income: </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div>
          <label>Deductions: </label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleGenerateForm}>
          Generate Tax Form
        </button>
      </form>

      {taxForm && (
        <div className="generated-tax-form">
          <p>Taxable Income: ${taxForm.taxableIncome}</p>
          <p>Estimated Tax: ${taxForm.estimatedTax}</p>
        </div>
      )}
    </div>
  );
};

export default TaxFormGenerator;
