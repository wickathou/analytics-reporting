import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';
import returnStatus from '../util/util';

const base = new Airtable({ apiKey: 'patdFlbfSagayM2Zj.81e5c96f34f9e00e1604a27e0d7c8fbf7c9a4cda0ddd9f2f2f4c4a9536c06b55' }).base('appKnChYCcpEyb5IP');

const initialState = {
  categories: ['All categories'],
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
