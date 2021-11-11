import { configureStore } from '@reduxjs/toolkit';
import EmployeesReducer from '../features/employees.feature';

const store = configureStore({
  reducer: {
    employees: EmployeesReducer,
  },
});

export default store;
