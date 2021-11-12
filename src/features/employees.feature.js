import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const counterSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      localStorage.setItem('employeesList', JSON.stringify(state));
      return state;
    },
    set(state, action) {
      return action?.payload || state;
    },
  },
});

export const { add, set } = counterSlice.actions;
export default counterSlice.reducer;
