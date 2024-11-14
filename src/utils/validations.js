// src/utils/validations.js
export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isAmountValid = (amount) => {
    return amount > 0;
  };
  