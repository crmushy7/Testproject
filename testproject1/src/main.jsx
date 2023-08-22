import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
//core
import "primereact/resources/primereact.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store.jsx";
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
