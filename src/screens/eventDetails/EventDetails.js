import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
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
    console.clear();
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

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
        <section id="our-blog" class="padding bglight">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="news_item shadow">
                  <div class="image">
                    {isLoading ? (
                      <div class="loader-details-image" />
                    ) : (
                      <img
                        src={data.url}
                        alt="Latest News"
                        class="img-responsive"
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
                  <div class="news_desc text-left">
                    <h2
                      class="text-capitalize font-light darkcolor text-center"
                      style={{ fontSize: 35 }}
                    >
                      {isLoading ? (
                        <div class="loader-title-line" />
                      ) : (
                        data.title
                      )}
                    </h2>
                    <ul class="meta-tags top20 bottom20">
                      <li>
                        {" "}
                        {!isLoading && (
                          <i
                            style={{ marginBottom: 6 }}
                            class="fa fa-calendar"
                          />
                        )}
                        {isLoading ? (
                          <div class="loader-text-line" />
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
                      <div class="bottom35">
                        <div class="loader-desc-line" />
                        <div class="loader-desc-line" />
                        <div class="loader-desc-line" />
                      </div>
                    ) : (
                      <p
                        class="bottom35"
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
