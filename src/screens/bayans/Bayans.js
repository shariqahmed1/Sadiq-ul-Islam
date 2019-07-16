import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import _ from "lodash";
import { bayanDetails } from "../../redux/actions/actions";

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
    console.clear();
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

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
              {isLoading
                ? [0, 1, 2].map(v => {
                    return (
                      <div
                        key={"bayans-" + v}
                        className="cbp-item"
                        style={{
                          width: 350,
                          left: 0,
                          top: 0
                        }}
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
                              <p className="top20 bottom35">
                                <div className="loader-desc-line" />
                                <div className="loader-desc-line" />
                                <div className="loader-desc-line" />
                                <div className="loader-desc-line" />
                                <div className="loader-desc-line" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : sliceArr.map((v, i) => {
                    return (
                      <div
                        key={i}
                        className="cbp-item"
                        style={{
                          width: 350,
                          left: 0,
                          top: 0
                        }}
                      >
                        <div className="cbp-item-wrapper">
                          <div className="news_item shadow">
                            <a className="image" href="javascript:void(0)">
                              <iframe
                                className="img-responsive bayans"
                                title={"bayans" + i}
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={v.embed}
                              />
                            </a>
                            <h5
                              style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginTop: 10
                              }}
                            >
                              {v.speecherName}
                            </h5>
                            <div className="news_desc">
                              <h3 className="text-capitalize font-light darkcolor">
                                <a href="javascript:void(0)">{v.title}</a>
                              </h3>
                              <p
                                className="top20 bottom35"
                                dangerouslySetInnerHTML={{
                                  __html: v.description
                                    ? v.description.length > 160
                                      ? `${v.description.substr(0, 160)}...`
                                      : v.description
                                    : "Bayan Desc Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                }}
                              />
                              <Link
                                to="/bayan-details"
                                className="button btnprimary btn-gradient-hvr"
                                onClick={() => {
                                  store.dispatch(bayanDetails(v));
                                }}
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
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
