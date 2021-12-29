import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction(
  'contact/addContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  }),
);

const deleteContact = createAction(
  'contact/deleteContact',
);
const changeFilter = createAction(
  'contact/changeFilter',
);

export {
  addContact,
  deleteContact,
  changeFilter,
};

//const myAction =
