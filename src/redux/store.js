import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
import asyncStorageMiddleware from './middleware/asyncStorageMiddleware';

if (__DEV__) {
  require('../../ReactotronConfig');
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk, asyncStorageMiddleware),
});

export default store;
