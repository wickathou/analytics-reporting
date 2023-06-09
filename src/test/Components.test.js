import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Item from '../components/Item';
import Hero from '../components/Hero';
import DetailList from '../components/DetailList';
import Header from '../components/Header';
import { dataFormatter, totalViewCounter } from '../redux/util/util';

const initialState = {
  pages: {
    pageList: [{
      itemId: 'test1',
      title: 'title',
      data: {
        img: 'imgUrl',
        views: 10,
        activeUsers: 20,
        bounceRate: 30,
        category: 'category',
      },
    }, {
      itemId: 'test2',
      title: 'title',
      data: {
        img: 'imgUrl',
        views: 20,
        activeUsers: 10,
        bounceRate: 23,
        category: 'other',
      },
    }],
    totalViews: 0,
    status: {
      loading: false,
      error: '',
    },
  },
  categories: {
    categories: ['All categories'],
    categoryFilter: 'All categories',
    status: {
      loading: false,
      error: '',
    },
  },
};
const mockStore = configureMockStore()(initialState);

const mockedItem = {
  itemId: 'test1',
  title: 'title',
  data: {
    img: 'imgUrl',
    views: 10,
    activeUsers: 20,
    bounceRate: 30,
    category: 'category',
  },
};

describe('Pure function test', () => {
  test('view count total function: ', () => {
    const views = totalViewCounter(initialState.pages.pageList);
    expect(views).toBe(30);
  });
  test('Formatter function default values: ', () => {
    const item = dataFormatter(mockedItem.itemId, mockedItem.title, mockedItem.data.img);
    expect(item.data.views).toBe(0);
    expect(item.data.bounceRate).toBe(0);
    expect(item.data.activeUsers).toBe(0);
    expect(item.data.category).toMatch('Uncategorized');
  });
});

describe('Item tests', () => {
  test('to render item: ', () => {
    render(
      <BrowserRouter>
        <Item page={mockedItem} styler={1} />
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});

describe('Header tests', () => {
  test('to render Header: ', () => {
    render(
      <BrowserRouter>
        <Header route="home" />
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});

describe('Hero tests', () => {
  test('to render hero: ', () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Hero page={mockedItem} route="details" />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});

describe('DetailList tests', () => {
  test('to render DetailList: ', () => {
    render(
      <BrowserRouter>
        <DetailList page={mockedItem} />
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
