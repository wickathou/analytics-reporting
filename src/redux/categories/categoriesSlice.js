import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';
import returnStatus from '../util/util';

const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE }).base(import.meta.env.VITE_AIRTABLEBASE);

const initialState = {
  categories: ['All categories', 'Uncategorized'],
  categoryFilter: 'All categories',
  status: {
    loading: false,
    error: '',
  },
};

export const getCategories = createAsyncThunk('categories/get', async () => {
  try {
    const data = [];

    const records = await new Promise((resolve, reject) => {
      base('data')
        .select({
          fields: ['category'],
        })
        .all((err, records) => {
          if (err) {
            reject(err);
          } else {
            resolve(records);
          }
        });
    });

    records.forEach((record) => {
      const pageCategory = record.fields.category;
      if (!data.includes(pageCategory)) {
        data.push(pageCategory);
      }
    });
    return data;
  } catch (error) {
    return error;
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    applyFilter: (state, { payload }) => ({ ...state, categoryFilter: payload, status: { ...state.status, loading: false, error: '' } }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => returnStatus('pending', state))
      .addCase(getCategories.fulfilled, (state, action) => {
        const categories = action.payload;
        return { ...state, categories: [...state.categories, ...categories], status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getCategories.rejected, (state, action) => returnStatus('rejected', state, action));
  },
});

export const { applyFilter } = categoriesSlice.actions;

export default categoriesSlice.reducer;
