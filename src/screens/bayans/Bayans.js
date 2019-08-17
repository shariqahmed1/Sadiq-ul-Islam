import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../components/header/Header";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import _ from "lodash";
import { bayanDetails } from "../../redux/actions/actions";

const styles = {
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
  }
};

class Bayans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPagination: false,
      bayans: [],
      limit: 9,
      total: 0,
      pages: [],
      activePages: [],
      activeIndex: 1,
      showMsg: false,
      open: true
    };
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let bayans = AuthReducer
      ? AuthReducer.bayans
        ? _.sortBy(AuthReducer.bayans, ["timeStamp"]).reverse()
        : this.props.history.push("/")
      : this.props.history.push("/");
    this.setState({ bayans, isLoading: false });
    bayans.length > 0 && this.calculatePagination(bayans.length);
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
      bayans,
      pages,
      activePages,
      isPagination,
      activeIndex
    } = this.state;
    const length = pages.length;
    const activePagelength = activePages.length;
    const sliceStartPoint =
      activeIndex - 1 === 0 ? 0 : (activeIndex - 1) * 9 + 1;
    const sliceEndPoint = sliceStartPoint + 9;
    const sliceArr = bayans.slice(sliceStartPoint, sliceEndPoint);

    return (
      <div>
        {/* <!-- header --> */}
        <Header />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Bayans"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Bayans",
              isActive: true,
              link: "/bayans"
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
              {isLoading ? (
                [0, 1, 2].map(v => {
                  return (
                    <div className="cbp-item" key={v} style={styles.cbpItem}>
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
              ) : sliceArr.length > 0 ? (
                sliceArr.map((v, i) => {
                  return (
                    // <Link
                    //   key={i}
                    //   to="/bayan-details"
                    //   onClick={() => store.dispatch(bayanDetails(v))}
                    // >
                    <div className="bayans-wrapper" key={i}>
                      <div className="img-responsive bayans">
                        <audio src={v.embed} controls />
                      </div>
                      <div className="bayans-bottom-wrapper">
                        <h5 style={styles.cbpItemH5}>{v.speecherName}</h5>
                        <h3 className="text-capitalize font-light darkcolor">
                          {v.title}
                        </h3>
                        <div style={styles.btnWrapper}>
                          <Link
                            to="/bayan-details"
                            className="button btnprimary btn-gradient-hvr"
                            onClick={() => {
                              store.dispatch(bayanDetails(v));
                            }}
                          >
                            Read more
                          </Link>
                          <a
                            href={v.embed}
                            download={v.embed}
                            className="button btnsecondary btn-gradient-hvr"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  );
                })
              ) : (
                <p>No Bayans Found</p>
              )}
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
                    {activePages.map((v, i) => {
                      return (
                        <li
                          className={
                            activeIndex === v ? "page-item active" : "page-item"
                          }
                          onClick={
                            () => this.setState({ activeIndex: v })
                            // activeIndex !== v && this.fetchByPagination(v)
                          }
                          key={"row-" + i}
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

        {/* <!--Contact--> */}
        {/* <Contact /> */}

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Bayans;
