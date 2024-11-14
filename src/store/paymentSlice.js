// src/store/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payments: [],
  },
  reducers: {
    addPayment: (state, action) => {
      state.payments.push(action.payload);
    },
  },
});

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
