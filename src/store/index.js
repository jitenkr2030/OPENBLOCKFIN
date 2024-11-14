// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './walletSlice';
import transferReducer from './transferSlice';
import paymentReducer from './paymentSlice';
import defiReducer from './defiSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    transfer: transferReducer,
    payment: paymentReducer,
    defi: defiReducer,
    user: userReducer,
  },
});

export default store;
