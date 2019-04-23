import React, { Component } from "react";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import PreLoader from "./components/preloader/Preloader";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<PreLoader />} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
