import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getPages } from "./redux/pages/pagesSlice";
import { getCategories } from "./redux/categories/categoriesSlice";

store.dispatch(getPages());
store.dispatch(getCategories());


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/analytics-reporting">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
