import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { returnStatus } from '../util/util';

const initialState = {
  categories: [],
  status: {
    loading: false,
    error: '',
  },
};

export const getCategories = createAsyncThunk('categories/get', async () => {
  try {
    console.log('test');
    // const res = await fetch(pagesAPI);
    // const data = await res.json();
    const data = ['something', 'else', 'that', 'this', 'those']
    // return Error('something')
    return data;
  } catch (error) {
    return error;
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state };
      console.log(newState);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => returnStatus('pending', state))
      .addCase(getCategories.fulfilled, (state, action) => {
        const categories = action.payload;
        return { ...state, categories: [...state.categories, ...categories], status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getCategories.rejected, (state, action) => returnStatus('rejected', state, action))
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;