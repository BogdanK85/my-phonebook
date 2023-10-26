import { createAsyncThunk } from '@reduxjs/toolkit';
import token from 'Api/tokenAxios';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/signup', credentials);
      token.set(response.data.token);
      toast.success(`Registration is successful! Welcome! `);
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Please try again..');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/login', credentials);
      token.set(response.data.token);
      toast.success('Congratulations');
      return response.data;
    } catch (error) {
      toast.error('The password or e-mail address is incorrect');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refrechCurrentUser = createAsyncThunk(
  'auth/refrech',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkApi.rejectWithValue('Failed to get user');
    }

    try {
      token.set(persistToken);
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
