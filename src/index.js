import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { fetchAllAuthors } from "./redux/actions/authors";

import App from "./App";

import { Provider } from "react-redux";

import store from "./redux";

store.dispatch(fetchAllAuthors());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
