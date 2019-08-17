import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../components/header/Header";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import _ from "lodash";
import { bookDetails } from "../../redux/actions/actions";

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

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPagination: false,
      books: [],
      limit: 9,
      total: 0,
      pages: [],
      activePages: [],
      activeIndex: 1,
      authorName: ""
    };
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let books = AuthReducer ? (AuthReducer.books ? AuthReducer.books : []) : [];
    let authorName = AuthReducer
      ? AuthReducer.authorName
        ? AuthReducer.authorName
        : ""
      : "";
    let filter = books.filter(v => v.authorName === authorName);
    let reverse = _.sortBy(filter, ["timeStamp"]).reverse();
    this.setState({ books: reverse, isLoading: false, authorName });
    reverse.length > 0 && this.calculatePagination(reverse.length);
  };

  calculatePagination(size) {
    let { pages } = this.state;
    pages = [];
    let dvd = size / 9;
    let ceil = Math.ceil(dvd);
    for (let index = 1; index <= ceil; index++) {
      pages.push(index);
    }
    this.setState({
      pages,
      isPagination: true,
      activePages: pages.slice(0, 3)
    });
  }

  render() {
    const {
      isLoading,
      books,
      pages,
      activePages,
      isPagination,
      activeIndex,
      authorName
    } = this.state;
    const length = pages.length;
    const activePagelength = activePages.length;
    const sliceStartPoint =
      activeIndex - 1 === 0 ? 0 : (activeIndex - 1) * 9 + 1;
    const sliceEndPoint = sliceStartPoint + 9;
    const sliceArr = books.slice(sliceStartPoint, sliceEndPoint);

    return (
      <div>
        {/* <!-- header --> */}
        <Header />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Books"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: authorName,
              isActive: true,
              link: "/books"
            }
          ]}
        />
        <section id="our-blog" className="bglight padding text-center">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              {isLoading
                ? [0, 1, 2].map(v => {
                    return (
                      <div
                        key={"bayans-" + v}
                        className="cbp-item"
                        style={{ width: 350, left: 0, top: 0 }}
                      >
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
                : sliceArr.map((v, i) => {
                    return (
                      // <Link
                      //   key={i}
                      //   to="/book-details"
                      //   onClick={() => store.dispatch(bookDetails(v))}
                      // >
                      <div className="books-wrapper" key={i}>
                        <div className="img-responsive books">
                          <img
                            src={v.bookImage}
                            alt="Not found!"
                            style={styles.image}
                          />
                        </div>
                        <div className="books-bottom-wrapper">
                          <h5 style={styles.cbpItemH5}>{v.authorName}</h5>
                          <h3 className="text-capitalize font-light darkcolor">
                            {v.title}
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
                      // </Link>
                    );
                  })}
            </div>

            {isPagination && (
              <div className="row">
                <div className="col-sm-12">
                  <ul
                    className="pagination justify-content-center top50"
                    style={{ display: "flex" }}
                  >
                    <li
                      className={
                        activePages[0] === pages[0]
                          ? "page-item disabled"
                          : "page-item"
                      }
                      onClick={() => {
                        activePages[0] !== pages[0]
                          ? this.setState({
                              activePages: pages.slice(
                                activePages[0] - 4,
                                activePages[0] - 1
                              )
                            })
                          : console.log("No Pages");
                      }}
                    >
                      <a className="page-link" href="javascript:void(0)">
                        <i className="fa fa-angle-left" />
                      </a>
                    </li>
                    {activePages.map(v => {
                      return (
                        <li
                          className={
                            activeIndex === v ? "page-item active" : "page-item"
                          }
                          onClick={() =>
                            activeIndex !== v && this.fetchByPagination(v)
                          }
                          key={v}
                        >
                          <a className="page-link" href="javascript:void(0)">
                            {v}
                          </a>
                        </li>
                      );
                    })}
                    <li
                      className={
                        activePages[activePagelength - 1] === pages[length - 1]
                          ? "page-item disabled"
                          : "page-item"
                      }
                      onClick={() => {
                        activePages[activePagelength - 1] !== pages[length - 1]
                          ? this.setState({
                              activePages: pages.slice(
                                activePages[activePagelength - 1],
                                activePages[activePagelength - 1] + 3
                              )
                            })
                          : console.log("No Pages");
                      }}
                    >
                      <a className="page-link" href="javascript:void(0)">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Author;
