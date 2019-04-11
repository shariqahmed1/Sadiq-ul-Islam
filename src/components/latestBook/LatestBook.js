import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";

class LatestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalities: []
    };
  }

  // componentDidMount() {
  //   let { personalities } = this.state;
  //   FIRESTORE.collection("personalities").onSnapshot(snapshot => {
  //     personalities = [];
  //     snapshot.forEach(doc => {
  //       var obj = {};
  //       obj.key = doc.id;
  //       obj.data = doc.data();
  //       personalities.push(obj);
  //     });
  //     this.setState({ personalities });
  //     console.log(personalities);
  //   });
  // }
  
  render() {
    const { personalities } = this.state;
    return (
      <section id="latest-book" className="half-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding">
              <div className="image hover-effect img-container">
                <img
                  alt="not found"
                  src={require("../../images/book.jpg")}
                  className="latest-book-height"
                />
              </div>
            </div>
            <div className="col-lg-6 nopadding">
              <div className="split-box text-center center-block container-padding equalheight">
                <div className="heading-title  normal-padding">
                  <span className=" wow fadeIn" data-wow-delay="300ms">
                    Latest Book
                  </span>
                  <h4
                    className="darkcolor bottom20 wow fadeIn"
                    data-wow-delay="350ms"
                  >
                    Book Name Vestibulum auctor nunc vitae diam eleifend
                  </h4>
                  <p
                    className="heading_space wow fadeIn"
                    data-wow-delay="400ms"
                  >
                    Book Desc Curabitur mollis bibendum luctus. Duis suscipit
                    vitae dui sed suscipit. Vestibulum auctor nunc vitae diam
                    eleifend, in maximus metus sollicitudin. Quisque vitae
                    sodales lectus. Nam porttitor justo sed mi finibus, vel
                    tristique risus faucibus.
                  </p>
                  <a
                    href="#our-team"
                    className="button btnsecondary pagescroll wow fadeInUp"
                    data-wow-delay="450ms"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestBook;
