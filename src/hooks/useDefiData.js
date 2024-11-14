// src/hooks/useDefiData.js
import { useEffect, useState } from 'react';
import defiService from '../services/defiService';

export const useDefiData = (userId) => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchDefiData = async () => {
      const userInvestments = await defiService.getInvestments(userId);
      setInvestments(userInvestments);
    };

    fetchDefiData();
  }, [userId]);

  return { investments };
};
