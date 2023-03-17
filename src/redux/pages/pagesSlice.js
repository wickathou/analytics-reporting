import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { returnStatus } from '../util/util';

// const pagesAPI = 'https://us-central1-pagestore-api-e63c8.cloudfunctions.net/pagestoreApi/apps/VUqoXEBLxjrzkWMVNCqp/pages/';

export const getPages = createAsyncThunk('pages/get', async () => {
  try {
    console.log('test');
    // const res = await fetch(pagesAPI);
    // const data = await res.json();
    const data = [
      {
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'something'
        }},{
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'else'
        }},{
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'else'
        }},{
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'else'
        }},{
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'else'
        }},{
        itemId: uuidv4(),
        title: 'A title',
        data: {
          img: 'something',
          views: 10,
          activeUsers: 5,
          bounceRate: 10,
          category: 'else'
        }}
    ]
    // return Error('something')
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  pageList: [],
  filterSettings: {
    filterApplied: false,
    filterSet: [],
  },
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
        return { ...state, pageList: [...state.pageList, ...pageList], status: { ...state.status, loading: false, error: '' } };
      })
      .addCase(getPages.rejected, (state, action) => returnStatus('rejected', state, action))
  },
});

export const allpages = (state) => state.pages;

export const {
  filterpages, clearFilters,
} = pagesSlice.actions;

export default pagesSlice.reducer;
