// src/services/walletService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/wallet';

const getBalance = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/balance`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const getTransactionHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/transactions`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { getBalance, getTransactionHistory };
