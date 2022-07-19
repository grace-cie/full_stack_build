import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../auth/authSlice';

export const authStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
