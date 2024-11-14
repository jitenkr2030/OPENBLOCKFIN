// src/store/defiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const defiSlice = createSlice({
  name: 'defi',
  initialState: {
    investments: [],
  },
  reducers: {
    setInvestments: (state, action) => {
      state.investments = action.payload;
    },
  },
});

export const { setInvestments } = defiSlice.actions;
export default defiSlice.reducer;
