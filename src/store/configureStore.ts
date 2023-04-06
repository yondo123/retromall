import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import logger from 'redux-logger';

const isDevelopment = process.env.NEXT_PUBLIC_ENV === 'development';

const createStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      return isDevelopment ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
    },
    devTools: isDevelopment
  });
};

const wrapper = createWrapper(createStore, {
  debug: isDevelopment
});

export default wrapper;
