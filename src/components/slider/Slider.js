import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FIRESTORE } from "../../constants/firebase/firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
      isLoading: true
    };
  }

  componentDidMount() {
    let { sliders } = this.state;
    FIRESTORE.collection("slider").onSnapshot(snapshot => {
      sliders = [];
      snapshot.forEach(doc => {
        var obj = doc.data();
        obj.id = doc.id;
        sliders.push(obj);
      });
      this.setState({ sliders, isLoading: false });
    });
  }

  render() {
    const { sliders, isLoading } = this.state;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {sliders ? (
            sliders.length > 0 ? (
              sliders.map((val, index) => {
                return (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    key={"slider-" + index}
                    className={`${index === 0 ? "active" : ""}`}
                  />
                );
              })
            ) : (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
            )
          ) : (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
          )}
        </ol>
        <div className="carousel-inner">
          {!isLoading ? (
            sliders.length > 0 ? (
              sliders.map((val, index) => {
                return (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="sliderImg">
                      <img
                        className="d-block w-100"
                        src={val.url}
                        alt="First slide"
                        style={{
                          backgroundSize: "cover",
                          maxHeight: "100vh"
                        }}
                      />
                    </div>
                    {val.caption && (
                      <div className="carousel-caption">
                        <p
                          className="sliderCaption"
                          dangerouslySetInnerHTML={{
                            __html: val.caption
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="carousel-item active">
                <img
                  className="d-block  w-100"
                  style={{
                    backgroundSize: "cover",
                    maxHeight: "100vh"
                  }}
                  src={require("../../images/sliderStatus.jpg")}
                  alt="First slide"
                />
              </div>
            )
          ) : (
            <div className="carousel-item active">
              <img
                className="d-block  w-100"
                style={{
                  backgroundSize: "cover",
                  maxHeight: "100vh"
                }}
                src={require("../../images/sliderStatus.jpg")}
                alt="First slide"
              />
            </div>
          )}
        </div>
        <a
          className="carousel-control-prev d-sm-none  d-md-flex"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <div className="sliderButtons">
            <span className="" aria-hidden="true">
              {/* {"<"} */}
              <img
                src="https://image.flaticon.com/icons/svg/271/271220.svg"
                alt="Not found!"
                style={{ height: 15, width: 15, marginRight: 2 }}
              />
            </span>
            {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
            <span className="sr-only">Previous</span>
          </div>
        </a>
        <a
          className="carousel-control-next d-sm-none d-md-flex"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <div className="sliderButtons">
            <span className="" aria-hidden="true">
              <img
                src="https://image.flaticon.com/icons/svg/32/32213.svg"
                alt="Not found!"
                style={{ height: 15, width: 15, marginLeft: 2 }}
              />
            </span>
            {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
            <span className="sr-only">Next</span>
          </div>
        </a>
      </div>
    );
  }
}

export default App;
