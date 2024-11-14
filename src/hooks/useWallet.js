// src/hooks/useWallet.js
import { useEffect, useState } from 'react';
import walletService from '../services/walletService';

export const useWallet = (userId) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchWalletData = async () => {
      const userBalance = await walletService.getBalance(userId);
      const transactionHistory = await walletService.getTransactionHistory(userId);
      setBalance(userBalance);
      setTransactions(transactionHistory);
    };

    fetchWalletData();
  }, [userId]);

  return { balance, transactions };
};
