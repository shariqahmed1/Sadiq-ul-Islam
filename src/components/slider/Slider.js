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
    const { sliders, isLoading } = this.state;
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          {!isLoading ? (
            sliders.length > 0 ? (
              sliders.map((val, index) => {
                return (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    class={`${index === 0 ? "active" : ""}`}
                  />
                );
              })
            ) : (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              />
            )
          ) : (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
          )}
        </ol>
        <div class="carousel-inner">
          {!isLoading ? (
            sliders.length > 0 ? (
              sliders.map((val, index) => {
                return (
                  <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="sliderImg">
                      <img
                        class="d-block sliderImage"
                        src={val.data.url}
                        alt="First slide"
                      />
                    </div>
                    {val.data.caption && (
                      <div
                        class="carousel-caption d-flex"
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
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://images3.alphacoders.com/823/82317.jpg"
                  alt="First slide"
                />
              </div>
            )
          ) : (
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://images3.alphacoders.com/823/82317.jpg"
                alt="First slide"
              />
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
