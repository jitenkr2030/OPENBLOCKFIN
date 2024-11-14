// src/services/marketDataService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/market-data';

const getCryptoPrices = async (symbol) => {
  try {
    const response = await axios.get(`${API_URL}/price`, { params: { symbol } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const getMarketTrends = async () => {
  try {
    const response = await axios.get(`${API_URL}/trends`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

const getHistoricalData = async (symbol, timeframe) => {
  try {
    const response = await axios.get(`${API_URL}/historical`, { params: { symbol, timeframe } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export default { getCryptoPrices, getMarketTrends, getHistoricalData };
