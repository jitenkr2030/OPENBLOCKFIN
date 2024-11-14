// src/pages/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  return (
    <div className={`settings ${darkMode ? 'dark' : ''}`}>
      <h1>Settings</h1>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          Dark Mode
        </label>
      </div>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Enable Notifications
        </label>
      </div>
    </div>
  );
};

export default Settings;
