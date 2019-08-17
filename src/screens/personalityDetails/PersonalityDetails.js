import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../components/header/Header";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { store } from "../../redux/store/store";
import "../404/style.css";

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
      if (AuthReducer.personalityDetails) {
        this.setState({
          data: AuthReducer.personalityDetails,
          isLoading: false
        });
      } else {
        this.props.history.push("/");
      }
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div>
        {/* <!-- header --> */}
        <Header />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={data && data.name}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: data && data.name,
              isActive: true,
              link: "/personality-details"
            }
          ]}
        />
        <section id="our-blog" className="padding bglight">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="news_item shadow">
                  <div className="image">
                    {isLoading ? (
                      <div className="loader-title-line" />
                    ) : (
                      <h2
                        style={{ fontWeight: 400 }}
                        className="text-center top30"
                      >
                        {data.name}
                      </h2>
                    )}
                  </div>
                  <div className="news_desc text-left">
                    {/* <h3 class="text-capitalize font-light darkcolor">
                      <a href="javascript:void(0)">
                        {isLoading ? (
                          <div class="loader-title-line" />
                        ) : (
                          data.title
                        )}
                      </a>
                    </h3>
                    <ul class="meta-tags top20 bottom20">
                      <li>
                        <a href="#.">
                          {" "}
                          {!isLoading && <i class="fa fa-user-o" />}
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
                              {data.speecherName}
                            </span>
                          )}
                        </a>
                      </li>
                    </ul> */}
                    {isLoading ? (
                      <div className="bottom35">
                        <div className="loader-desc-line" />
                        <div className="loader-desc-line" />
                        <div className="loader-desc-line" />
                      </div>
                    ) : (
                      <p
                        className="bottom35"
                        style={{
                          textAlign: !data.about ? "center" : "justify"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data.about ? data.about : "No About"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
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
