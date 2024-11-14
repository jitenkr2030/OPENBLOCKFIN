// src/features/MultiAsset/AssetAddForm.js
import React, { useState } from 'react';

const AssetAddForm = ({ onAddAsset }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAsset({ name, value: parseFloat(value) });
    setName('');
    setValue('');
  };

  return (
    <div className="asset-add-form">
      <h3>Add New Asset</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
};

export default AssetAddForm;
