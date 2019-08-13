import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import SearchBox from "../searchBox/SearchBox";
import { Link, withRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import {
  speecher,
  author,
  personalityDetails
} from "../../redux/actions/actions";
import SnackBar from "../snackBar/SnackBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      speechers: [],
      authors: [],
      personalities: [],
      open: false,
      message: ""
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSnackBar = this.handleSnackBar.bind(this);
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let speechers = AuthReducer
      ? AuthReducer.speechers
        ? AuthReducer.speechers
        : []
      : [];
    let authors = AuthReducer
      ? AuthReducer.authors
        ? AuthReducer.authors
        : []
      : [];
    let personalities = AuthReducer
      ? AuthReducer.personalities
        ? AuthReducer.personalities
        : []
      : [];
    this.setState({
      speechers,
      authors,
      personalities
    });
  };

  handleCloseSnackBar = () => {
    this.setState({
      open: false,
      message: ""
    });
  };

  handleSnackBar(flag, message) {
    this.setState({
      open: flag,
      message
    });
  }

  handleClose(open) {
    this.setState({
      isShow: open
    });
  }

  render() {
    const { isShow, speechers, authors, personalities } = this.state;

    return (
      <div>
        <header className="site-header">
          <nav className="navbar navbar-expand-xl center-brand static-nav">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={require("../../images/1.png")}
                  alt="logo"
                  className="logo-default"
                />
                <img
                  src={require("../../images/2.png")}
                  alt="logo"
                  className="logo-scrolled"
                />
              </a>
              <button
                className="navbar-toggler navbar-toggler-right collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#xenav"
              >
                <span> </span>
                <span> </span>
                <span> </span>
              </button>
              <div className="collapse navbar-collapse" id="xenav">
                <ul className="navbar-nav" id="container">
                  <li className="nav-item">
                    <Link className="nav-link" to="/#top">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item has-sub dropdown">
                    <a
                      className="nav-link pagescroll drop"
                      id="navbarDropdown"
                      data-toggle="dropdown"
                    >
                      BAYANS
                      <span
                        id="submenu-btn"
                        className="submenu-button"
                        style={{ paddingLeft: "5px" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                    <div
                      className="dropdown-menu zoom-in"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="/#latest-audio">
                        Latest
                      </Link>
                      {speechers.length > 0 && (
                        <div className="dropdown-divider" />
                      )}
                      {speechers.length > 0
                        ? speechers.map((val, index) => {
                            return (
                              <a
                                className="dropdown-item"
                                key={"speechers" + index}
                                href="false"
                                onClick={() => {
                                  store.dispatch(speecher(val.name));
                                  this.props.history.push("/speecher");
                                }}
                              >
                                {val.name}
                              </a>
                            );
                          })
                        : ""}
                      <div className="dropdown-divider" />
                      <Link
                        to="/bayans"
                        className="dropdown-item"
                        href="#latest-book"
                      >
                        All Bayans
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item has-sub dropdown">
                    <a
                      className="nav-link pagescroll drop"
                      id="navbarDropdown2"
                      data-toggle="dropdown"
                    >
                      BOOKS
                      <span
                        id="submenu-btn"
                        className="submenu-button"
                        style={{ paddingLeft: "5px" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                    <div
                      className="dropdown-menu zoom-in"
                      aria-labelledby="navbarDropdown2"
                    >
                      <Link className="dropdown-item" to="/#latest-book">
                        Latest
                      </Link>
                      {authors.length > 0 && (
                        <div className="dropdown-divider" />
                      )}
                      {authors.length > 0
                        ? authors.map((val, index) => {
                            return (
                              <a
                                className="dropdown-item"
                                key={"authors" + index}
                                href="false"
                                onClick={() => {
                                  store.dispatch(author(val.name));
                                  this.props.history.push("/author");
                                }}
                              >
                                {val.name}
                              </a>
                            );
                          })
                        : ""}
                      <div className="dropdown-divider" />
                      <Link
                        to="/books"
                        className="dropdown-item"
                        href="#latest-book"
                      >
                        All Books
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link pagescroll"
                      to="/events"
                      onClick={() => this.props.history.push("/events")}
                    >
                      EVENTS
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link pagescroll"
                      href="false"
                      onClick={() =>
                        this.setState({
                          open: true,
                          message: "This feature will be available soon"
                        })
                      }
                    >
                      IFTA
                    </a>
                  </li>
                  <li className="nav-item has-sub dropdown">
                    <a
                      className="nav-link pagescroll drop"
                      id="navbarDropdown3"
                      data-toggle="dropdown"
                    >
                      ABOUTS
                      <span
                        id="submenu-btn"
                        className="submenu-button"
                        style={{ paddingLeft: "5px" }}
                      >
                        <i className="fa fa-angle-down" />
                      </span>
                    </a>
                    <div
                      className="dropdown-menu zoom-in"
                      aria-labelledby="navbarDropdown3"
                    >
                      {personalities.length > 0
                        ? personalities.map((val, index) => {
                            return (
                              <a
                                className="dropdown-item"
                                key={"authors" + index}
                                href="false"
                                onClick={() => {
                                  store.dispatch(personalityDetails(val));
                                  this.props.history.push(
                                    "/personality-details"
                                  );
                                }}
                              >
                                {val.name}
                              </a>
                            );
                          })
                        : ""}
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pagescroll" to="/#contactus">
                      CONTACT US
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pagescroll"
                      href="false"
                      onClick={() => this.setState({ isShow: true })}
                    >
                      <i className="fa fa-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <SearchBox overlayShow={isShow} searchBar={this.handleClose} />
        <SnackBar
          handleClose={this.handleCloseSnackBar}
          message={this.state.message}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default withRouter(Header);
