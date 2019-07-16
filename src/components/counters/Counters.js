import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bayans: 0,
      books: 0,
      articles: 0
    };
  }

  componentDidMount() {
    this.fetchingBayansLength();
    this.fetchingBooksLength();
  }

  fetchingBayansLength = () => {
    FIRESTORE.collection("bayans").onSnapshot(snap => {
      this.setState({ bayans: snap.size });
    });
  };

  fetchingBooksLength = () => {
    FIRESTORE.collection("books").onSnapshot(snap => {
      this.setState({ books: snap.size });
    });
  };

  render() {
    const { books, bayans } = this.state;
    // console.clear();
    return (
      <section
        id="funfacts"
        className="padding_top fact-iconic gradient_bg parallaxie"
      >
        <div className="container text-center">
          <div className="row">
            <div
              className="col-md-5 col-sm-12 margin_bottom whitecolor text-md-left text-center wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <h3 className="bottom25">Important things for our website</h3>
              <p className="title">
                We show you how many bayans, books and articles are inside in
                our website in numbers that will be beneficial to people{" "}
              </p>
            </div>
            <div className="col-md-7 col-sm-12 text-center">
              <div className="row">
                <div
                  className="col-md-4 col-sm-4 icon-counters whitecolor margin_bottom  wow fadeInRight"
                  data-wow-delay="400ms"
                >
                  <div className="img-icon bottom15">
                    <i className="fa fa-headphones" />
                  </div>
                  <div className="counters">
                    <span
                      className="count_nums"
                      data-to={bayans - 1}
                      data-speed={bayans - 1}
                    >
                      {bayans - 1}
                    </span>{" "}
                    <i className="fa fa-plus" />
                  </div>
                  <p className="title">ULAMA BAYANS</p>
                </div>
                <div
                  className="col-md-4 col-sm-4 icon-counters whitecolor margin_bottom wow fadeInRight"
                  data-wow-delay="350ms"
                >
                  <div className="img-icon bottom15">
                    <i className="fa fa-book"> </i>
                  </div>
                  <div className="counters">
                    <span
                      className="count_nums"
                      data-to={books - 1}
                      data-speed={books - 1}
                    >
                      {books - 1}
                    </span>{" "}
                    <i className="fa fa-plus" />
                  </div>
                  <p className="title">ULAMA BOOKS</p>
                </div>
                <div
                  className="col-md-4 col-sm-4 icon-counters whitecolor margin_bottom wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="img-icon bottom15">
                    <i className="fa fa-file-text-o" />
                  </div>
                  <div className="counters">
                    <span
                      className="count_nums"
                      data-to="6000"
                      data-speed="2500"
                    >
                      6000
                    </span>{" "}
                    <i className="fa fa-plus" />
                  </div>
                  <p className="title">SHARAI ARTICLES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counters;
