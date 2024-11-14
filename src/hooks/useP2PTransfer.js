// src/hooks/useP2PTransfer.js
import transferService from '../services/transferService';

export const useP2PTransfer = () => {
  const sendFunds = async (fromUserId, toUserId, amount) => {
    return await transferService.sendFunds(fromUserId, toUserId, amount);
  };

  const receiveFunds = async (userId) => {
    return await transferService.receiveFunds(userId);
  };

  return { sendFunds, receiveFunds };
};
