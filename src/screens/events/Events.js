import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { store } from "../../redux/store/store";
import "../404/style.css";
import { FIRESTORE } from "../../constants/firebase/firebase";
// import _ from "lodash";
import { eventDetails } from "../../redux/actions/actions";
import axios from "axios";
import { withRouter } from "react-router-dom";
// const instance = axios.create({
//   baseURL: "https://us-central1-websadiqulislam.cloudfunctions.net",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" }
// });

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      events: []
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }
  sendMail() {
    // instance
    //   .post("/sendMail", {
    //     name: "shariq",
    //     email: "shariq.ahmed525@gmail.com",
    //     message: "Hello"
    //   })
    //   .then(v => {
    //     console.log(v.data, " mail response");
    //   })
    //   .catch(err => {
    //     console.log(err, " error in mail response");
    //   });
    // axios
    //   .post("https://us-central1-websadiqulislam.cloudfunctions.net/sendMail", {
    //     name: "shariq",
    //     email: "shariq.ahmed525@gmail.com",
    //     message: "Hello"
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    axios({
      method: "post",
      url: "https://sadiq-ul-islam-mail.herokuapp.com/",
      timeout: 180000, // Let's say you want to wait at least 180 seconds
      data: {
        name: "shariq",
        email: "shariq.ahmed525@gmail.com",
        message: "Hello"
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  fetchEvents() {
    let { events } = this.state;
    FIRESTORE.collection("events").onSnapshot(snapshot => {
      events = [];
      if (snapshot.empty) {
        this.props.history.push("/");
      } else {
        snapshot.forEach(doc => {
          var obj = doc.data();
          obj.id = doc.id;
          events.push(obj);
        });
        this.setState({
          events,
          isLoading: false
        });
      }
    });
  }

  render() {
    console.clear();
    const { isLoading, events } = this.state;
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Our Events"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Events",
              isActive: true,
              link: "/events"
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
                ? [0, 1, 2, 3].map(v => {
                    return (
                      <div
                        key={"events-loader" + v}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-8 wow fadeIn offset-lg-0 offset-md-0 offset-sm-0 offset-xs-2"
                        data-wow-delay="300ms"
                      >
                        <div className="cbp-item-wrapper">
                          <div className="news_item shadow">
                            <a className="image" href="false">
                              <div
                                className="loader-details-bayan"
                                style={{ height: 400 }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : events.map((v, i) => {
                    return (
                      <div
                        key={"events-" + i}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-8 wow fadeIn offset-lg-0 offset-md-0 offset-sm-0 offset-xs-2 top10"
                        data-wow-delay="300ms"
                      >
                        <div
                          className="center programs text-center center-block"
                          style={{
                            backgroundPosition: "center",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundImage: `url('${v.url}')`
                          }}
                        >
                          <div className="top20 bottom20 left10 right10">
                            <div className="programsBg">
                              <h4>{v.title.toUpperCase()}</h4>
                              <p className="top10">{v.type.toUpperCase()}</p>
                              <a
                                //  href="false"
                                className="top10 button btnwhite-hole wow fadeInUp"
                                data-wow-delay="350ms"
                                onClick={() => {
                                  store.dispatch(eventDetails(v));
                                  this.props.history.push("/event-details");
                                }}
                              >
                                learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Events);
