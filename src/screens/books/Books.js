import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import _ from "lodash";
import { bookDetails } from "../../redux/actions/actions";

class Bayans extends Component {
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
      activeIndex: 1
    };
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let books = AuthReducer
      ? AuthReducer.books
        ? _.sortBy(AuthReducer.books, ["timeStamp"]).reverse()
        : this.props.history.push("/")
      : this.props.history.push("/");
    this.setState({ books, isLoading: false });
    books.length > 0 && this.calculatePagination(books.length);
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
      activeIndex
    } = this.state;
    const length = pages.length;
    const activePagelength = activePages.length;
    const sliceStartPoint =
      activeIndex - 1 === 0 ? 0 : (activeIndex - 1) * 9 + 1;
    const sliceEndPoint = sliceStartPoint + 9;
    const sliceArr = books.slice(sliceStartPoint, sliceEndPoint);
    console.clear();
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

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
              title: "Books",
              isActive: true,
              link: "/books"
            }
          ]}
        />
        <section id="our-blog" class="bglight padding text-center">
          <div class="container">
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
                        class="cbp-item"
                        style={{ width: 350, left: 0, top: 0 }}
                      >
                        <div class="cbp-item-wrapper">
                          <div class="news_item shadow">
                            <a class="image" href="javascript:void(0)">
                              <div
                                class="loader-details-bayan"
                                style={{ height: 250 }}
                              />
                            </a>
                            <div class="news_desc">
                              <h3 class="text-capitalize font-light darkcolor">
                                <a href="javascript:void(0)">
                                  <div class="loader-title-line" />
                                </a>
                              </h3>
                              <p class="top20 bottom35">
                                <div class="loader-desc-line" />
                                <div class="loader-desc-line" />
                                <div class="loader-desc-line" />
                                <div class="loader-desc-line" />
                                <div class="loader-desc-line" />
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
                        class="cbp-item"
                        style={{
                          width: 350,
                          left: 0,
                          top: 0
                        }}
                      >
                        <div class="cbp-item-wrapper">
                          <div class="news_item shadow">
                            <a class="image" href="javascript:void(0)">
                              <img
                                src={v.url}
                                alt="Latest News"
                                class="img-responsive bayans"
                              />
                            </a>
                            <div class="news_desc">
                              <h3 class="text-capitalize font-light darkcolor">
                                <a href="javascript:void(0)">{v.title}</a>
                              </h3>
                              <h5
                                style={{
                                  fontSize: 16,
                                  fontWeight: 400,
                                  marginTop: 10
                                }}
                              >
                                {v.author}
                              </h5>
                              <p
                                class="top20 bottom35"
                                dangerouslySetInnerHTML={{
                                  __html: v.description
                                    ? v.description.length > 160
                                      ? `${v.description.substr(0, 160)}...`
                                      : v.description
                                    : "Bayan Desc Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                }}
                              />
                              <Link
                                to="/book-details"
                                class="button btnprimary btn-gradient-hvr"
                                onClick={() => {
                                  store.dispatch(bookDetails(v));
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
              <div class="row">
                <div class="col-sm-12">
                  <ul
                    class="pagination justify-content-center top50"
                    style={{ display: "flex" }}
                  >
                    <li
                      class={
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
                      <a class="page-link" href="javascript:void(0)">
                        <i class="fa fa-angle-left" />
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
                        >
                          <a className="page-link" href="javascript:void(0)">
                            {v}
                          </a>
                        </li>
                      );
                    })}
                    <li
                      class={
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
                      <a class="page-link" href="javascript:void(0)">
                        <i class="fa fa-angle-right" />
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

export default Bayans;
