// src/features/Security/SecuritySettings.js
import React, { useState } from 'react';

const SecuritySettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className="security-settings">
      <h2>Security Settings</h2>
      <div>
        <label>
          Enable Two-Factor Authentication
          <input
            type="checkbox"
            checked={twoFactorEnabled}
            onChange={toggleTwoFactor}
          />
        </label>
      </div>
      <p>{twoFactorEnabled ? 'Two-Factor Authentication is enabled.' : 'Two-Factor Authentication is disabled.'}</p>
    </div>
  );
};

export default SecuritySettings;
