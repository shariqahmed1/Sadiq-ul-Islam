import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { bookDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";
import _ from "lodash";

const styles = {
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cbpItem: {
    width: 350,
    left: 0,
    top: 0
  },
  cbpItemH5: {
    fontSize: 16,
    fontWeight: 400,
    marginTop: 10
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  }
};

class LatestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBook: null
    };
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let latestBook =
      AuthReducer &&
      AuthReducer.books &&
      AuthReducer.books.length &&
      _.sortBy(AuthReducer.books, ["timeStamp"]).reverse();
    latestBook = latestBook && latestBook.slice(0, 3);
    this.setState({ latestBook });
  };

  render() {
    // console.clear();
    const { latestBook } = this.state;
    return latestBook ? (
      <section id="latest-book" className="bglight padding_half text-center">
        <div className="container-fluid">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
              <h3>Latest Books</h3>
            </div>
          </div>
          <div style={styles.wrapper} className="top20">
            {!latestBook
              ? [0, 1, 2].map((v, i) => {
                  return (
                    <div className="cbp-item" key={i} style={styles.cbpItem}>
                      <div className="cbp-item-wrapper">
                        <div className="news_item shadow">
                          <a className="image" href="javascript:void(0)">
                            <div
                              className="loader-details-bayan"
                              style={{ height: 250 }}
                            />
                          </a>
                          <div className="news_desc">
                            <h3 className="text-capitalize font-light darkcolor">
                              <a href="javascript:void(0)">
                                <div className="loader-title-line" />
                              </a>
                            </h3>
                            <div className="top20 bottom35">
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : latestBook.map((v, i) => {
                  return (
                    <Link
                      key={i}
                      to="/book-details"
                      onClick={() => store.dispatch(bookDetails(v))}
                    >
                      <div className="cbp-item" style={styles.cbpItem}>
                        <div className="cbp-item-wrapper">
                          <div className="news_item shadow">
                            <div className="img-responsive books">
                              <img
                                src={v.bookImage}
                                alt="Not found!"
                                style={styles.image}
                              />
                            </div>
                            <div className="news_desc">
                              <h5 style={styles.cbpItemH5}>{v.authorName}</h5>
                              <h3 className="text-capitalize font-light darkcolor">
                                <a href="javascript:void(0)">{v.title}</a>
                              </h3>
                              <div style={styles.btnWrapper}>
                                <a
                                  href={v.pdf}
                                  className="button btnsecondary btn-gradient-hvr"
                                >
                                  <i className="fa fa-book" />
                                </a>
                                <Link
                                  to="/book-details"
                                  className="button btnprimary btn-gradient-hvr"
                                  onClick={() => {
                                    store.dispatch(bookDetails(v));
                                  }}
                                >
                                  Read More
                                </Link>
                                <a
                                  href={v.pdf}
                                  download={v.pdf}
                                  className="button btnsecondary btn-gradient-hvr"
                                >
                                  <i className="fa fa-download" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 center-block text-center">
              <div className="wow fadeInUp" data-wow-delay="300ms">
                <br />
                <a
                  href="javascript:void(0)"
                  className="top20 button btnprimary wow fadeInUp"
                  data-wow-delay="450ms"
                  onClick={() => this.props.history.push("/books")}
                >
                  {" "}
                  MORE BOOKS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}

export default withRouter(LatestBook);
