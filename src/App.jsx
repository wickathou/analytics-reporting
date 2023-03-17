import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  const { pageList, filterSettings, status } = useSelector((store) => store.pages);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home pages={pageList} />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
