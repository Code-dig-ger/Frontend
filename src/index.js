// REACT
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// APP
import App from "./App";

// ROOT-REDUCER
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
