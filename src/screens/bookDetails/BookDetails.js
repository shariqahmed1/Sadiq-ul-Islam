import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { store } from "../../redux/store/store";
import "../404/style.css";
import { FIRESTORE } from "../../constants/firebase/firebase";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      type: "slideInDown",
      isLoading: true,
      data: null,
      recommendedLoader: true
    };
  }

  componentDidMount() {
    let { AuthReducer } = store.getState();
    this.checkDetailIsExistOrNot(AuthReducer);
  }

  checkDetailIsExistOrNot(AuthReducer) {
    if (AuthReducer) {
      if (AuthReducer.bookDetails) {
        let data =
          AuthReducer && AuthReducer.bookDetails && AuthReducer.bookDetails;
        this.setState({ data, isLoading: data ? false : true });
      } else {
        this.props.history.push("/books");
      }
    } else {
      this.props.history.push("/books");
    }
  }

  render() {
    const { isLoading, data } = this.state;
    console.clear();
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />
        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Book Details"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Books",
              isActive: false,
              link: "/books"
            },
            {
              title: "Details",
              isActive: true,
              link: "/books-details"
            }
          ]}
        />
        <section id="our-blog" class="padding bglight">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="news_item shadow">
                  <div class="image" style={{ paddingTop: 20 }}>
                    {isLoading ? (
                      <div class="loader-details-image" />
                    ) : (
                      <img
                        src={data.bookImage}
                        alt="Latest News"
                        class="img-responsive details-page-image-wrapper"
                      />
                    )}
                  </div>
                  <div class="news_desc text-left" style={{ marginTop: 20 }}>
                    <h3 class="text-capitalize font-light darkcolor text-center">
                      {isLoading ? (
                        <div class="loader-title-line" />
                      ) : (
                        data.title
                      )}
                    </h3>
                    <ul class="meta-tags top20 bottom20">
                      <li>
                        {" "}
                        {!isLoading && (
                          <i style={{ marginBottom: 6 }} class="fa fa-user-o" />
                        )}
                        {isLoading ? (
                          <div class="loader-text-line" />
                        ) : (
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              marginLeft: 5
                            }}
                          >
                            {data.author}
                          </span>
                        )}
                      </li>
                    </ul>
                    {isLoading ? (
                      <div class="bottom35">
                        <p class="loader-desc-line" />
                        <p class="loader-desc-line" />
                        <p class="loader-desc-line" />
                      </div>
                    ) : (
                      <p
                        class="bottom35"
                        dangerouslySetInnerHTML={{
                          __html: data.description
                        }}
                      />
                    )}
                    {!isLoading && (
                      <div
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row"
                        }}
                      >
                        <a
                          href={data.pdf}
                          class="button btnsecondary scndry-gradient-hvr"
                        >
                          Online Read
                        </a>
                        <a
                          href={data.pdf}
                          className="button btnprimary btn-gradient-hvr"
                        >
                          <span style={{ marginRight: 10 }}>Download</span>
                          <i className="fa fa-download" />{" "}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* <div class="col-md-4">
                <aside class="sidebar whitebox">
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Recommended Books
                    </h4>
                    {recommendedLoader ? (
                      [0, 1].map(v => {
                        return (
                          <div key={"loader-" + v} class="single_post bottom15">
                            <a href="#." class="post">
                              <div class="loader-recommended-image" />
                            </a>
                            <div class="text">
                              <a href="#.">
                                <div class="loader-text-line" />
                              </a>
                              <span>
                                <div class="loader-text-line" />
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div class="single_post bottom15">
                        <a href="#." class="post">
                          <img
                            src={require("../../images/book.jpg")}
                            alt="post image"
                          />
                        </a>
                        <div class="text">
                          <a href="#.">Book Title</a>
                          <span>September 22,2018</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">Authors</h4>
                    <ul class="webcats">
                      <li>
                        <a href="#.">
                          Mufti Sahab <span>(20)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          Allam Sahab <span>(05)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          marketing <span>(11)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          Ali Sahab <span>(19)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
             */}
            </div>
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

export default BookDetails;
