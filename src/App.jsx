import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Details from './routes/Details';
import Home from './routes/Home';

function App() {
  const { pageList } = useSelector((store) => store.pages);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home pages={pageList} />} />
        {pageList.map((page) => <Route key={page.itemId} path={`/${page.itemId}`} element={<Details page={page} />} />)}
      </Routes>
    </>
  );
}

export default App;
