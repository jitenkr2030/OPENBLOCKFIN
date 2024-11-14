// src/services/paymentService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/payment';

const initiatePayment = async (userId, amount) => {
  try {
    const response = await axios.post(`${API_URL}/initiate`, { userId, amount });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const checkPaymentStatus = async (paymentId) => {
  try {
    const response = await axios.get(`${API_URL}/status`, { params: { paymentId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { initiatePayment, checkPaymentStatus };
