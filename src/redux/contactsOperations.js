import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  allContacts,
  removeContact,
  updateContact,
} from 'Api/apiContacts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await allContacts();
      return response;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/FetchAddNewContact',
  async (data, thunkAPI) => {
    try {
      const response = await addContact(data);
      toast.success('the contact has been successfully created');
      return response;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contact/fetchDeleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await removeContact(id);
      toast.info('The contact has been successfully deleted');
      return response.id;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactById = createAsyncThunk(
  'contacts/fetchUpdateContact',
  async ({ id, name, number }, thunkAPI) => {
    const contact = { name, number };
    try {
      const response = await updateContact(id, contact);
      toast.info('The contact has been successfully updated');
      return response.id;
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
