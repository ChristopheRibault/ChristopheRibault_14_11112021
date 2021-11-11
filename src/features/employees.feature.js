import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const counterSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
