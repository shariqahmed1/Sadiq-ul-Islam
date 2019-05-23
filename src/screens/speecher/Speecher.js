import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import { FIRESTORE } from "../../constants/firebase/firebase";
// import _ from "lodash";
import { bayanDetails } from "../../redux/actions/actions";

class Speecher extends Component {
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
      speecherName: ""
    };
  }

  componentDidMount() {
    let state = store.getState().AuthReducer;
    if (state) {
      if (state.speecherName) {
        this.setState({
          speecherName: state.speecherName
        });
        this.fetchBayans(state.speecherName);
        // this.fetchLimits(state.speecherName);
      } else {
        this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }

  fetchBayans(speecherName) {
    let { bayans } = this.state;
    FIRESTORE.collection("bayans")
      .where("speecherName", "==", speecherName)
      // .orderBy("speecherName")
      // .orderBy("index", "desc")
      // .limit(9)
      .onSnapshot(snapshot => {
        bayans = [];
        if (snapshot.empty) {
          this.props.history.push("/");
        } else {
          snapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            bayans.push(obj);
          });
          this.setState({
            bayans,
            isLoading: false
          });
        }
      });
  }

  // fetchLimits(speecherName) {
  //   FIRESTORE.collection("bayans")
  //     .where("speecherName", ">=", speecherName)
  //     .orderBy("speecherName")
  //     .orderBy("index", "desc")
  //     .onSnapshot(snapshot => {
  //       this.setState({
  //         total: snapshot.size
  //       });
  //       this.calculatePagination(snapshot.size);
  //     });
  // }

  // fetchByPagination(pageNum) {
  //   let { bayans, total, speecherName } = this.state;
  //   let startAt = total - pageNum * 9;
  //   let endAt = startAt + 9;
  //   this.setState({
  //     isLoading: true
  //   });
  //   FIRESTORE.collection("bayans")
  //     .where("speecherName", "==", speecherName)
  //     .orderBy("index")
  //     .startAt(startAt + 1)
  //     .endAt(endAt)
  //     .get()
  //     .then(snapshot => {
  //       bayans = [];
  //       snapshot.forEach(doc => {
  //         bayans.push(doc.data());
  //       });
  //       let reverse = _.reverse(bayans);
  //       this.setState({
  //         bayans: reverse,
  //         isLoading: false,
  //         activeIndex: pageNum
  //       });
  //     });
  // }

  // calculatePagination(size) {
  //   let { pages } = this.state;
  //   pages = [];
  //   let dvd = size / 9;
  //   let ceil = Math.ceil(dvd);
  //   for (let index = 1; index <= ceil; index++) {
  //     pages.push(index);
  //   }
  //   this.setState({
  //     pages,
  //     isPagination: true,
  //     activePages: pages.slice(0, 3)
  //   });
  // }

  render() {
    const {
      isLoading,
      bayans,
      pages,
      activePages,
      isPagination,
      activeIndex,
      speecherName
    } = this.state;
    const length = pages.length;
    const activePagelength = activePages.length;
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
              title: speecherName,
              isActive: true,
              link: "/speecher"
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
                : bayans.map((v, i) => {
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
                            <div class="news_desc">
                              <h3 class="text-capitalize font-light darkcolor">
                                <a href="javascript:void(0)">{v.title}</a>
                              </h3>
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
                                to="/bayan-details"
                                class="button btnprimary btn-gradient-hvr"
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
                          key={v}
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

        {/* <!--Contact--> */}
        {/* <Contact /> */}

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Speecher;
