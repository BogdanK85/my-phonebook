import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContactById,
  getAllContacts,
  updateContactById,
} from './contactsOperations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== contactId
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContactById.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
        // state.contactDeleted(action.payload.id);
      })
      .addCase(updateContactById.pending, state => {
        state.contacts.isLoading = true;
        state.error = null;
      })

      .addCase(updateContactById.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const updatedIndex = state.contacts.items.findIndex(
          contact => contact.id === action.payload
        );
        if (updatedIndex !== -1) {
          state.contacts.items[updatedIndex] = action.payload;
        }
      })
      .addCase(updateContactById.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.error = payload;
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const { addFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { deleteContact } = contactsSlice.actions;
