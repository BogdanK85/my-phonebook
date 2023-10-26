// contactsSlice;
//  ===> import {
//   updateContactById,
// } from './contactsOperations';
// .addCase(updateContactById.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         const updatedIndex = state.contacts.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         if (updatedIndex !== -1) {
//           state.contacts.items[updatedIndex] = action.payload;
//         }
// })

// contactsOperations.js
// import {
//     updateContactById,
// }
// export const updateContactById = createAsyncThunk(
//   'contacts/fetchUpdateContact',
//   async ({ id, name, number }, thunkAPI) => {
//     const contact = { name, number };
//     try {
//       const response = await updateContact(id, contact);
//       toast.info('The contact has been successfully updated');
//       return response.id;
//     } catch (error) {
//       toast.error('Something went wrong. Please try again.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// auth - operations.js
// export const refrechCurrentUser = createAsyncThunk(
//   'auth/refrech',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const persistToken = state.auth.token;
//     if (persistToken === null) {
//       return thunkApi.rejectWithValue('Failed to get user');
//     }

//     try {
//       token.set(persistToken);
//       const response = await axios.get('users/current');
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const selectRefreshing = state => state.auth.isRefresing;
