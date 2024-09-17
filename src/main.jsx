import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/sass/style.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import { Provider } from "react-redux";
import "./i18n/i18next.jsx";
import { WishListProvider } from "./context/WishlistContext.jsx";
import store from "./tools/store/index.js";
import { callProduct } from "./config/defaultFunc.js";
import { AddtoCartProvider } from "./context/AddToCartContext.jsx";
AOS.init();

callProduct();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <WishListProvider>
        <AddtoCartProvider>
          <App />
        </AddtoCartProvider>
      </WishListProvider>
    </Provider>
  </React.StrictMode>
);
