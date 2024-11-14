// src/pages/Profile.js
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch profile data from an API (mocked here)
    setProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  }, []);

  const handleSave = () => {
    // Handle saving profile (e.g., update API)
    setEditing(false);
    console.log('Profile saved', profile);
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>
      {editing ? (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
