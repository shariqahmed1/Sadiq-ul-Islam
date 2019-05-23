import React, { Component } from "react";
import Routes from "./routes/Routes";
import { FIRESTORE } from "./constants/firebase/firebase";
import { bayans, events, books } from "./redux/actions/actions";

class App extends Component {
  componentDidMount() {
    this.fetchBayans();
    this.fetchBooks();
    this.fetchEvents();
  }

  fetchBayans() {}

  fetchBooks() {}

  fetchEvents() {}

  render() {
    return <Routes />;
  }
}

export default App;
