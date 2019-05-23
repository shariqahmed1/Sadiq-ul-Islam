import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import PreLoader from "./components/preloader/Preloader";
import * as serviceWorker from "./serviceWorker";

const Container = () => (
  <Provider store={store}>
    <PersistGate loading={<PreLoader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Container />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
