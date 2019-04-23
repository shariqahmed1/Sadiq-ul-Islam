import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../screens/home/Home";
import Bayans from "../screens/bayans/Bayans";
import Books from "../screens/books/Books";
import BookDetails from "../screens/bookDetails/BookDetails";
import BayanDetails from "../screens/bayanDetails/BayanDetails";

const history = createBrowserHistory();

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      login: nextProps.isLogin
    };
  }

  render() {
    // const { login } = this.state;
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/bayans" component={Bayans} />
          <Route path="/bayan-details" component={BayanDetails} />
          <Route exact path="/books" component={Books} />
          <Route path="/book-details" component={BookDetails} />
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
};

export default Routes;
