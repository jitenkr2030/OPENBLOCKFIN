// src/services/transferService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/transfer';

const sendFunds = async (fromUserId, toUserId, amount) => {
  try {
    const response = await axios.post(`${API_URL}/send`, {
      fromUserId,
      toUserId,
      amount,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const receiveFunds = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/receive`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { sendFunds, receiveFunds };
