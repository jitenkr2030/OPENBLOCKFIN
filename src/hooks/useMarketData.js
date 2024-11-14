// src/hooks/useMarketData.js
import { useEffect, useState } from 'react';
import marketDataService from '../services/marketDataService';

export const useMarketData = (symbol) => {
  const [price, setPrice] = useState(null);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const cryptoPrice = await marketDataService.getCryptoPrices(symbol);
      const marketTrends = await marketDataService.getMarketTrends();
      setPrice(cryptoPrice);
      setTrends(marketTrends);
    };

    fetchMarketData();
  }, [symbol]);

  return { price, trends };
};
