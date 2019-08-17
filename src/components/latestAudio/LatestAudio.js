import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { bayanDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";
import _ from "lodash";

const styles = {
  cbpItem: {
    width: 350,
    left: 0,
    top: 0
  },
  cbpItemH5: {
    fontSize: 16,
    fontWeight: 400,
    marginTop: 10
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainwrapper: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap"
  }
};

class LatestAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBayan: []
    };
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let latestBayan =
      AuthReducer &&
      AuthReducer.bayans &&
      AuthReducer.bayans.length &&
      _.sortBy(AuthReducer.bayans, ["timeStamp"]).reverse();
    latestBayan = latestBayan && latestBayan.slice(0, 3);
    this.setState({ latestBayan });
  };

  render() {
    const { latestBayan } = this.state;
    return (
      <section id="latest-audio" className="bglight padding_half text-center">
        <div className="container-fluid">
          <div className="col-md-8 offset-md-2 col-sm-12 text-center">
            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
              <h3>Latest Audios</h3>
            </div>
          </div>
          <div className="top20 bayan-main-wrapper">
            {!latestBayan
              ? [0, 1, 2].map((v, i) => {
                  return (
                    <div className="cbp-item" key={i} style={styles.cbpItem}>
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
                            <div className="top20 bottom35">
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                              <p className="loader-desc-line">{""}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : latestBayan.map((v, i) => {
                  return (
                    // <Link
                    //   key={i}
                    //   to="/bayan-details"
                    //   onClick={() => store.dispatch(bayanDetails(v))}
                    // >
                    <div className="bayans-wrapper" key={i}>
                      <div className="img-responsive bayans">
                        <audio src={v.embed} controls />
                      </div>
                      <div className="bayans-bottom-wrapper">
                        <h5 style={styles.cbpItemH5}>{v.speecherName}</h5>
                        <h3 className="text-capitalize font-light darkcolor">
                          {v.title}
                        </h3>
                        <div style={styles.btnWrapper}>
                          <Link
                            to="/bayan-details"
                            className="button btnprimary btn-gradient-hvr"
                            onClick={() => {
                              store.dispatch(bayanDetails(v));
                            }}
                          >
                            Read more
                          </Link>
                          <a
                            href={v.embed}
                            download={v.embed}
                            className="button btnsecondary btn-gradient-hvr"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  );
                })}
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 center-block text-center top20">
              <div className="wow fadeInUp" data-wow-delay="300ms">
                <br />
                <a
                  href="javascript:void(0)"
                  className="button btnprimary wow fadeInUp"
                  data-wow-delay="450ms"
                  onClick={() => this.props.history.push("/bayans")}
                >
                  MORE BAYANS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default withRouter(LatestAudio);
