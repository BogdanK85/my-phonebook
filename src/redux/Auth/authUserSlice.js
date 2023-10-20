import { createSlice } from '@reduxjs/toolkit';
import { logIn, registration } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
};

const authUserSlise = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
        state.error = null;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const authReducer = authUserSlise;
