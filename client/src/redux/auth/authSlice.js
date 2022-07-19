import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoading: false,
  err: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, action) => {
      state.isLoading = true;
      state.currentUser = action.payload;
    },
    authFailure: (state) => {
      state.isLoading = false;
      state.err = true;
    },
    authLogout: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.err = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authStart, authSuccess, authFailure, authLogout } =
  userSlice.actions;

export default userSlice.reducer;
