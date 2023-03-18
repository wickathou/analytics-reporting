import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { returnStatus } from '../util/util';

import Airtable from 'airtable';
const base = new Airtable({apiKey: 'patdFlbfSagayM2Zj.81e5c96f34f9e00e1604a27e0d7c8fbf7c9a4cda0ddd9f2f2f4c4a9536c06b55'}).base('appKnChYCcpEyb5IP');


export const getPages = createAsyncThunk('pages/get', async () => {
  try {
    const data = []

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
      const pageItem = {
        itemId: pageData.identifier,
        title: pageData.title,
        data: {
          img: pageData.imgUrl,
          views: pageData.views,
          activeUsers: pageData.activeUsers,
          bounceRate: pageData.bounceRate,
          category: pageData.category,
        },
      };
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
  reducers: {
    filterpages: (state, { payload }) => {
      console.log(payload);
      return {
        ...state
      };
    },
    clearFilters: (state) => {
      console.log(state);
      return {
      ...state
      }
  }},
  //   filterpages: (state, { payload }) => {
  //     const filters = payload;
  //     return {
  //       ...state,
  //       filterSettings: {
  //         filterApplied: true,
  //         filterSet: state.pageList.filter((item) => item.category === filters),
  //       },
  //     };
  //   },
  //   clearFilters: (state) => ({
  //     ...state,
  //     filterSettings: {
  //       filterApplied: false,
  //       filterSet: [],
  //     },
  //   }),
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getPages.pending, (state) => returnStatus('pending', state))
      .addCase(getPages.fulfilled, (state, action) => {
        const pageList = action.payload;
        let totalViewCount = 0
        pageList.forEach((page) => {
          totalViewCount = totalViewCount + page.data.views
        })
        console.log(totalViewCount);
        console.log(pageList);
        return { ...state, pageList: [...state.pageList, ...pageList], totalViews: totalViewCount, status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getPages.rejected, (state, action) => returnStatus('rejected', state, action))
  },
});

export const allpages = (state) => state.pages;

export const {
  filterpages, clearFilters,
} = pagesSlice.actions;

export default pagesSlice.reducer;
