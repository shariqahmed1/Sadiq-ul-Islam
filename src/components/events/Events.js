import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { Link } from "react-router-dom";
import { eventDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";
import _ from "lodash";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    let { events } = this.state;
    FIRESTORE.collection("events")
      .where("isShowOnMainPage", "==", true)
      .onSnapshot(snapshot => {
        events = [];
        if (!snapshot.empty) {
          snapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            events.push(obj);
          });
          this.setState({
            events
          });
        }
      });
  }

  render() {
    console.clear();
    const { events } = this.state;
    const sort = _.sortBy(events, [
      function(o) {
        return o.timeStamp;
      }
    ]);
    return (
      events.length > 0 && (
        <section id="programs" className="normal-padding bglight parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                <div
                  className="heading-title wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h3>Our Events</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {sort.map((v, i) => {
                return (
                  <div className="col-lg-3 wow fadeIn" data-wow-delay="400ms">
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
                          <Link
                            to={{
                              pathname: `/event-details`
                            }}
                            className="top10 button btnwhite-hole wow fadeInUp"
                            data-wow-delay="450ms"
                            onClick={() => {
                              store.dispatch(eventDetails(v));
                              this.props.history.push("/event-details");
                            }}
                          >
                            learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12 center-block text-center">
                <div className="wow fadeInUp" data-wow-delay="300ms">
                  <br />
                  <a
                    href="javascript:void(0)"
                    className="button btnsecondary pagescroll wow fadeInUp"
                    data-wow-delay="450ms"
                    onClick={() => this.props.history.push("/events")}
                  >
                    more Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}

export default withRouter(Events);
