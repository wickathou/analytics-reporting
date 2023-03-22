import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';
import returnStatus, { totalViewCounter } from '../util/util';


// const puppeteer = require("puppeteer");
// import puppeteer from 'puppeteer'

// async function getLogo() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage(); 
//     await page.goto('https://ly.enddesign.co/code-review-feedback', { waitUntil: 'networkidle2' });
//     const titles = await page.evaluate(() => { 
//         return document.querySelector('img').getAttribute('src');
//     });
//     await browser.close();
//     console.log(titles);
// }

// getLogo();





const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE }).base(import.meta.env.VITE_AIRTABLEBASE);

const dataFormatter = (itemId, title, img, views, activeUsers = 0, bounceRate = 0, category = 'Uncategorized') => {
  return {
    itemId: itemId,
    title: title,
    data: {
      img: img,
      views: views,
      activeUsers: activeUsers,
      bounceRate: bounceRate,
      category: category,
    },
  }
}

// const pageItem = {
//         itemId: pageData.identifier,
//         title: pageData.title,
//         data: {
//           img: pageData.imgUrl,
//           viegetPagesws: pageData.views,
//           activeUsers: pageData.activeUsers,
//           bounceRate: pageData.bounceRate,
//           category: pageData.category,
//         },
//       };

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
      const pageItem = dataFormatter(pageData.identifier, pageData.title, pageData.imgUrl, pageData.views, pageData.activeUsers, pageData.bounceRate, pageData.category)
      data.push(pageItem);
    });
    return data;
  } catch (error) {
    return error;
  }
});

export const getRebrandly = createAsyncThunk('rebrandly/get', async () => {
  const data = [];
  console.log('Starting');
  console.log(import.meta.env.RAPI);
  fetch('https://api.rebrandly.com/v1/links?orderBy=createdAt&orderDir=desc&limit=25', {
    method: 'GET',
    headers: {accept: 'application/json', apikey: import.meta.env.VITE_RAPI}
  })
  .then(response => response.json())
  .then(links => {
    links.forEach((link)=>{
      console.log(link);
      console.log(dataFormatter(link.id,link.title,));
    })
  })
  .catch(err => console.error(err));
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
