import { createAsyncThunk } from '@reduxjs/toolkit';
import token from 'Api/tokenAxios';
import axios from 'axios';

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
