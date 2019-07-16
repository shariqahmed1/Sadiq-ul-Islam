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
        var obj = {};
        obj.key = doc.id;
        obj.data = doc.data();
        sliders.push(obj);
      });
      this.setState({ sliders, isLoading: false });
    });
  }

  render() {
    // console.clear();
    const { sliders, isLoading } = this.state;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {!isLoading ? (
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
                  <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="sliderImg">
                      <img
                        className="d-block sliderImage"
                        src={val.data.url}
                        alt="First slide"
                      />
                    </div>
                    {val.data.caption && (
                      <div
                        className="carousel-caption d-flex"
                        style={{
                          alignItems: "center",
                          top: 0,
                          bottom: 0,
                          paddingTop: 0,
                          paddingBottom: 0
                        }}
                      >
                        <p
                          className="sliderCaption"
                          dangerouslySetInnerHTML={{
                            __html: val.data.caption
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
                  className="d-block"
                  style={{
                    width: "100%",
                    height: "100vh",
                    backgroundSize: "cover"
                  }}
                  src={require("../../images/sliderStatus.jpg")}
                  alt="First slide"
                />
              </div>
            )
          ) : (
            <div className="carousel-item active">
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgoundColor: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  className="d-block"
                  style={{
                    width: 200,
                    height: 200,
                    backgroundSize: "cover"
                  }}
                  src={require("../../images/madarsa.gif")}
                  alt="First slide"
                />
              </div>
            </div>
          )}
        </div>
        {/* <a
            class="carousel-control-prev d-sm-none  d-md-flex"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next d-sm-none d-md-flex"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a> */}
      </div>
    );
  }
}

export default App;
