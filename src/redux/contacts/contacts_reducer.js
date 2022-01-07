import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts_actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts_operations';

const contactsInitial = [];

const items = createReducer(contactsInitial, {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: error => console.log(error),
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: error => console.log(error),
  [addContact.pending]: () => null,
  [deleteContact.rejected]: error => console.log(error),
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

//export default ContactsReducer;
