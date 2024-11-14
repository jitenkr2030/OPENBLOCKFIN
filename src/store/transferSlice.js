// src/store/transferSlice.js
import { createSlice } from '@reduxjs/toolkit';

const transferSlice = createSlice({
  name: 'transfer',
  initialState: {
    transferHistory: [],
  },
  reducers: {
    setTransferHistory: (state, action) => {
      state.transferHistory = action.payload;
    },
  },
});

export const { setTransferHistory } = transferSlice.actions;
export default transferSlice.reducer;
