import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../screens/home/Home";
import Bayans from "../screens/bayans/Bayans";
import Books from "../screens/books/Books";
import BookDetails from "../screens/bookDetails/BookDetails";
import BayanDetails from "../screens/bayanDetails/BayanDetails";
import EventDetails from "../screens/eventDetails/EventDetails";
import PersonalityDetails from "../screens/personalityDetails/PersonalityDetails";
import Error404 from "../screens/404/404";
import Speecher from "../screens/speecher/Speecher";
import Author from "../screens/author/Author";
import Events from "../screens/events/Events";

const history = createBrowserHistory();

class Routes extends Component {
  state = {
    open: false,
    message: ""
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bayans" component={Bayans} />
          <Route path="/bayan-details" component={BayanDetails} />
          <Route exact path="/books" component={Books} />
          <Route path="/book-details" component={BookDetails} />
          <Route exact path="/speecher" component={Speecher} />
          <Route exact path="/author" component={Author} />
          <Route exact path="/events" component={Events} />
          <Route path="/event-details" component={EventDetails} />
          <Route path="/personality-details" component={PersonalityDetails} />
          <Route exact path="/*" component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
