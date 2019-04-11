import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../screens/home/Home";
import Bayans from "../screens/bayans/Bayans";
// import { connect } from 'react-redux';

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bayans" component={Bayans} />
        </Switch>
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
