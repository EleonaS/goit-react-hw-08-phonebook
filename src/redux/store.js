//import { createStore } from "redux";
//const reducer = (state = {a:5}, action) => state;
//const store = createStore(reducer);
//export default store;

import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from './contacts/contacts_reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(
      contactsPersistConfig,
      Reducer,
    ),
  },
  middleware,
  devTools:
    process.env.NODE_ENV ===
    'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
