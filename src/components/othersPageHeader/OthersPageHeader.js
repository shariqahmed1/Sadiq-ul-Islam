import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import SearchBox from "../searchBox/SearchBox";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      speechers: [],
      authors: [],
      personalities: []
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.fetchingSpeechers();
    this.fetchingAuthors();
    this.fetchingPersonalities();
  }

  fetchingSpeechers = () => {
    let { speechers } = this.state;
    FIRESTORE.collection("speechers").onSnapshot(snap => {
      speechers = [];
      snap.forEach(doc => {
        var obj = {};
        obj.id = doc.id;
        obj.name = doc.data().name;
        speechers.push(obj);
      });
      this.setState({ speechers });
    });
  };

  fetchingAuthors = () => {
    let { authors } = this.state;
    FIRESTORE.collection("authors").onSnapshot(snap => {
      authors = [];
      snap.forEach(doc => {
        var obj = {};
        obj.id = doc.id;
        obj.name = doc.data().name;
        authors.push(obj);
      });
      this.setState({ authors });
    });
  };

  fetchingPersonalities = () => {
    let { personalities } = this.state;
    FIRESTORE.collection("personalities").onSnapshot(snap => {
      personalities = [];
      snap.forEach(doc => {
        var obj = {};
        obj.id = doc.id;
        obj.name = doc.data().name;
        personalities.push(obj);
      });
      this.setState({ personalities });
    });
  };

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
              <a className="navbar-brand" href="index.html">
                <img
                  src={require("../../images/logo-default.png")}
                  alt="logo"
                  style={{ width: "150px", height: "30px" }}
                  className="logo-default"
                />
                <img
                  src={require("../../images/logo-dark.png")}
                  alt="logo"
                  className="logo-scrolled"
                  style={{ width: "150px", height: "30px" }}
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
                                href="#"
                              >
                                {val.name}
                              </a>
                            );
                          })
                        : ""}
                    </div>
                  </li>
                  <li className="nav-item has-sub dropdown">
                    <Link
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
                    </Link>
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
                                href="#"
                              >
                                {val.name}
                              </a>
                            );
                          })
                        : ""}
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pagescroll" to="/#programs">
                      EVENTS
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-pricings">
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
                      <Link className="dropdown-item" to="/#latest-book">
                        ABOUT US
                      </Link>
                      {personalities.length > 0 && (
                        <div className="dropdown-divider" />
                      )}
                      {personalities.length > 0
                        ? personalities.map((val, index) => {
                            return (
                              <a
                                className="dropdown-item"
                                key={"authors" + index}
                                href="#"
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
                  {/* <li className="nav-item">
                    <a className="nav-link pagescroll" href="#our-testimonial">LOGIN</a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link pagescroll"
                      href="javascript:void(0)"
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
      </div>
    );
  }
}

export default Header;
