// src/components/Notifications.js
import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Example: Fetch notifications from an API or service
    const fetchNotifications = async () => {
      // Simulate an API request
      const data = [
        { id: 1, message: 'New transaction confirmed!' },
        { id: 2, message: 'Your wallet balance is low.' },
      ];
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
