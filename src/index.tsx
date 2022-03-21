import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import "src/react-i18next/i18next";
import {Provider} from "react-redux";
import {store} from "src/store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
