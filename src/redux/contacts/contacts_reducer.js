import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
} from './contact_actions';
//import toast from "react-hot-toast";
//import { nanoid } from 'nanoid';

const contactsInitial = [];

const items = createReducer(
  contactsInitial,
  {
    [addContact]: (
      state,
      { payload },
    ) => [...state, payload],

    [deleteContact]: (
      state,
      { payload },
    ) =>
      state.filter(
        ({ id }) => id !== payload,
      ),
  },
);

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) =>
    payload,
});

export default combineReducers({
  items,
  filter,
});
