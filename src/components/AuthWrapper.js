// src/components/AuthWrapper.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming useAuth is a custom hook for authentication

const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
