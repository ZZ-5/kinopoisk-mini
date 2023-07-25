import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import "./styles/index.scss";
import "./styles/pagination.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
