import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { handleFetchContactsThunk } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push({ id: nanoid(), ...action.payload });
    },
    deleteContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(handleFetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(handleFetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(handleFetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsReducer;
