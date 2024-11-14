// src/services/defiService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/defi';

const getInvestments = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/investments`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const addInvestment = async (userId, investmentDetails) => {
  try {
    const response = await axios.post(`${API_URL}/add`, { userId, ...investmentDetails });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { getInvestments, addInvestment };
