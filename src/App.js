import React, { Component } from "react";
import Routes from "./routes/Routes";
import { FIRESTORE } from "./constants/firebase/firebase";
import {
  bayans,
  events,
  books,
  speechers,
  authors,
  personalities
} from "./redux/actions/actions";
import { store } from "./redux/store/store";

class App extends Component {
  componentDidMount() {
    this.fetchBayans();
    this.fetchBooks();
    this.fetchEvents();
    this.fetchSpeechers();
    this.fetchAuthors();
    this.fetchPersonalities();
  }

  fetchBayans = () => {
    FIRESTORE.collection("bayans")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          obj.searchType = "bayans";
          arr.push(obj);
        });
        store.dispatch(bayans(arr));
      });
  };

  fetchBooks = () => {
    FIRESTORE.collection("books")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          obj.searchType = "books";
          arr.push(obj);
        });
        store.dispatch(books(arr));
      });
  };

  fetchEvents = () => {
    FIRESTORE.collection("events")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          obj.searchType = "events";
          arr.push(obj);
        });
        store.dispatch(events(arr));
      });
  };

  fetchSpeechers = () => {
    FIRESTORE.collection("speechers")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          arr.push(obj);
        });
        store.dispatch(speechers(arr));
      });
  };

  fetchAuthors = () => {
    FIRESTORE.collection("authors")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          arr.push(obj);
        });
        store.dispatch(authors(arr));
      });
  };

  fetchPersonalities = () => {
    FIRESTORE.collection("personalities")
      .orderBy("timeStamp", "asc")
      .onSnapshot(snap => {
        let arr = [];
        snap.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          obj.searchType = "personalities";
          arr.push(obj);
        });
        store.dispatch(personalities(arr));
      });
  };

  render() {
    return <Routes />;
  }
}

export default App;
