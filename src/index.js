import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import ErrorHandler from "./components/ErrorHandler";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <App />
        <ErrorHandler />
      </>
    </Provider>
  </React.StrictMode>,
  rootElement
);
