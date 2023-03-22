import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pages/pagesSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    pages: pagesReducer,
    categories: categoriesReducer,
  },
});

export default store;
