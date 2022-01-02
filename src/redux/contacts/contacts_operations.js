import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://61cccc9f198df60017aec23f.mockapi.io/api/v1/';

// First, create the thunk
//const fetchUserById = createAsyncThunk(
//  'users/fetchByIdStatus',
//  async (userId, thunkAPI) => {
//    const response = await userAPI.fetchById(userId)
//    return response.data
//  }
//)
///

//-----v1-----
/*export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios
    .get('/contacts')
    return data
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {

    const item = { name, phone };
    const { data } = await axios
      .post('/contacts', item)
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async itemId => {
    const {
      data: { id }
    } = await axios.delete(`/contacts/${itemId}`);
    return id;
  }
);
*/
//------v2-------

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const item = { name, phone };
      const { data } = await axios.post('/contacts', item);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
