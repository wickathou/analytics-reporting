import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
