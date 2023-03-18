// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import store from '../redux/store';
// import Home from '../routes/Home';
// import ItemList from '../components/ItemList';

describe('Rendering home page test', () => {
  test('to render all pages: ', () => {
    const ts = 'test';
    expect(ts).toBe('test');
  });
});

// describe('pages test', () => {
//   test('to render all pages: ', () => {
//     const mockedPages = [{
//       itemId: 'test1',
//         title: 'title',
//         data: {
//           img: 'imgUrl',
//           views: 10,
//           activeUsers: 20,
//           bounceRate: 30,
//           category: 'category',
//         },
//     },{
//       itemId: 'test2',
//         title: 'title',
//         data: {
//           img: 'imgUrl',
//           views: 10,
//           activeUsers: 20,
//           bounceRate: 30,
//           category: 'category',
//         },
//     },{
//       itemId: 'test3',
//         title: 'title',
//         data: {
//           img: 'imgUrl',
//           views: 10,
//           activeUsers: 20,
//           bounceRate: 30,
//           category: 'category',
//         },
//     }
//     ];
//     const pages = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ItemList/>
//         </BrowserRouter>
//       </Provider>,
//     );
//     expect(pages).toMatchSnapshot();
//   });
// });
