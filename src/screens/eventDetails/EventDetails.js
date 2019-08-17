import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../components/header/Header";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { store } from "../../redux/store/store";
import "../404/style.css";

class EventDetails extends Component {
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
      if (AuthReducer.eventDetails) {
        this.setState({
          data: AuthReducer.eventDetails,
          isLoading: false
        });
      } else {
        this.props.history.goBack();
      }
    } else {
      this.props.history.goBack();
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
          title={"Event Details"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Events",
              isActive: false,
              link: "/events"
            },
            {
              title: "Details",
              isActive: true,
              link: "/event-details"
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
                      <div className="loader-details-image" />
                    ) : (
                      <img
                        src={data.url}
                        alt="Latest News"
                        className="img-responsive"
                        style={{
                          height: 200,
                          width: 200,
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: 30,
                          marginBottom: 0
                        }}
                      />
                    )}
                  </div>
                  <div className="news_desc text-left">
                    <h2
                      className="text-capitalize font-light darkcolor text-center"
                      style={{ fontSize: 35 }}
                    >
                      {isLoading ? (
                        <div className="loader-title-line" />
                      ) : (
                        data.title
                      )}
                    </h2>
                    <ul className="meta-tags top20 bottom20">
                      <li>
                        {" "}
                        {!isLoading && (
                          <i
                            style={{ marginBottom: 6 }}
                            className="fa fa-calendar"
                          />
                        )}
                        {isLoading ? (
                          <div className="loader-text-line" />
                        ) : (
                          <span
                            style={{
                              fontSize: 15,
                              fontWeight: 400,
                              marginLeft: 5
                            }}
                          >
                            This event celebrate by every{" "}
                            {data.type === "Monthly" ? "month" : "year"}
                          </span>
                        )}
                      </li>
                    </ul>
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
                          textAlign: !data.description ? "center" : "justify"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data.description
                            ? data.description
                            : "No About"
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

export default EventDetails;
