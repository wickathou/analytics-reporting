import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';
import returnStatus, { dataFormatter, totalViewCounter } from '../util/util';

const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE })
  .base(import.meta.env.VITE_AIRTABLEBASE);

export const getPages = createAsyncThunk('pages/get', async () => {
  try {
    const data = [];

    const records = await new Promise((resolve, reject) => {
      base('data')
        .select({
          fields: ['title', 'imgUrl', 'category', 'views', 'activeUsers', 'bounceRate', 'identifier'],
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
      const pageData = record.fields;
      const pageItem = dataFormatter(
        pageData.identifier,
        pageData.title,
        pageData.imgUrl,
        pageData.views,
        pageData.activeUsers,
        pageData.bounceRate,
        pageData.category,
      );
      data.push(pageItem);
    });
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  pageList: [],
  totalViews: 0,
  status: {
    loading: false,
    error: '',
  },
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPages.pending, (state) => returnStatus('pending', state))
      .addCase(getPages.fulfilled, (state, action) => {
        const pageList = action.payload;
        const totalViewCount = totalViewCounter(pageList);
        return {
          ...state, pageList: [...state.pageList, ...pageList], totalViews: totalViewCount, status: { ...state.status, loading: false, error: '' },
        };
      })
      .addCase(getPages.rejected, (state, action) => returnStatus('rejected', state, action));
  },
});

export const allpages = (state) => state.pages;

export const {
  filterpages, clearFilters,
} = pagesSlice.actions;

export default pagesSlice.reducer;
