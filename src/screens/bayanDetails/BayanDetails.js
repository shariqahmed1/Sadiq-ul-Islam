import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { store } from "../../redux/store/store";
import "../404/style.css";
import { FIRESTORE, FIREBASE } from "../../constants/firebase/firebase";

class Bayans extends Component {
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
      if (AuthReducer.bayanDetails) {
        let data =
          AuthReducer && AuthReducer.bayanDetails && AuthReducer.bayanDetails;
        this.setState({ data, isLoading: data ? false : true });
      } else {
        this.props.history.push("/bayans");
      }
    } else {
      this.props.history.push("/bayans");
    }
  }

  render() {
    // console.clear();
    const { isLoading, data } = this.state;
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Bayan Details"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Bayans",
              isActive: false,
              link: "/books"
            },
            {
              title: "Details",
              isActive: true,
              link: "/bayans-details"
            }
          ]}
        />
        <section id="our-blog" className="padding bglight">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="news_item shadow">
                  <div className="image">
                    {isLoading ? (
                      <div className="loader-details-bayan" />
                    ) : (
                      <div className="img-responsive bayans-details">
                        <audio src={data.embed} controls />
                      </div>
                    )}
                  </div>
                  <div className="news_desc text-left">
                    <h3 className="text-capitalize font-light darkcolor text-center">
                      {isLoading ? (
                        <div className="loader-title-line" />
                      ) : (
                        data.title
                      )}
                    </h3>
                    <ul className="meta-tags top20 bottom20">
                      <li>
                        {" "}
                        {!isLoading && (
                          <i
                            style={{ marginBottom: 6 }}
                            className="fa fa-user-o"
                          />
                        )}
                        {isLoading ? (
                          <div className="loader-text-line" />
                        ) : (
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              marginLeft: 5
                            }}
                          >
                            {data.speecherName}
                          </span>
                        )}
                      </li>
                    </ul>
                    {isLoading ? (
                      <div className="bottom35">
                        <p className="loader-desc-line" />
                        <p className="loader-desc-line" />
                        <p className="loader-desc-line" />
                      </div>
                    ) : (
                      <p
                        className="bottom35"
                        style={{ textAlign: !data.description && "center" }}
                        dangerouslySetInnerHTML={{
                          __html: data.description
                            ? data.description
                            : "No Description"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* <div class="col-md-4">
                <aside class="sidebar whitebox">
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Recommended Bayans
                    </h4>
                    <div class="single_post bottom15">
                      <div class="text">
                        <a href="#.">Bayan Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                    <div class="single_post bottom15">
                      <div class="text">
                        <a href="#.">Bayan Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                  </div>
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Speechers
                    </h4>
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

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Bayans;
