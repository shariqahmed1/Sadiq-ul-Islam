import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { bookDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";

class LatestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBookData: null
    };
  }

  componentDidMount() {
    this._fetchLatestBooks();
  }

  _fetchLatestBooks = () => {
    FIRESTORE.collection("books")
      .orderBy("timeStamp", "desc")
      .limit(1)
      .onSnapshot(querySnapshot => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            this.setState({ latestBookData: obj });
          });
        }
      });
  };

  render() {
    console.clear();
    const { latestBookData } = this.state;
    return latestBookData ? (
      <section id="latest-book" className="half-section parallaxie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding">
              <div className="image hover-effect img-container">
                <img
                  alt="not found"
                  src={latestBookData.url}
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
                    {latestBookData.title}
                  </h4>
                  <p
                    className="heading_space wow fadeIn"
                    data-wow-delay="400ms"
                    dangerouslySetInnerHTML={{
                      __html:
                        latestBookData.description.length > 500
                          ? `${latestBookData.description.substr(0, 500)}...`
                          : latestBookData.description
                    }}
                  />
                  <Link
                    to={{
                      pathname: `/book-details`
                    }}
                    className="button btnsecondary pagescroll wow fadeInUp"
                    data-wow-delay="450ms"
                    onClick={() => {
                      store.dispatch(bookDetails(latestBookData));
                    }}
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}

export default withRouter(LatestBook);
