// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/auth';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    return { message: 'Logged out successfully' };
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { login, register, logout };
