import { createAsyncThunk } from '@reduxjs/toolkit';
import token from 'Api/tokenAxios';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const registration = createAsyncThunk(
  'auth/registration',
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
      const response = await axios.post('user/login', credentials);
      token.set(response.data.token);
      toast.success('Сongratulations');
      return response.data;
    } catch (error) {
      toast.error('The password or e-mail address is incorrect');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
