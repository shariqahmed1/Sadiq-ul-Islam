import React, { Component } from "react";
// import { FIRESTORE } from "../../constants/firebase/firebase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { bookDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";

class LatestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBook: null
    };
  }

  componentDidMount() {
    // this._fetchLatestBooks();
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let latestBook =
      AuthReducer &&
      AuthReducer.books &&
      AuthReducer.books.length &&
      AuthReducer.books[AuthReducer.books.length - 1];
    this.setState({ latestBook });
  };

  // _fetchLatestBooks = () => {
  //   FIRESTORE.collection("books")
  //     .orderBy("timeStamp", "desc")
  //     .limit(1)
  //     .onSnapshot(querySnapshot => {
  //       if (!querySnapshot.empty) {
  //         querySnapshot.forEach(doc => {
  //           var obj = doc.data();
  //           obj.id = doc.id;
  //           this.setState({ latestBook: obj });
  //         });
  //       }
  //     });
  // };

  render() {
    // console.clear();
    const { latestBook } = this.state;
    return latestBook ? (
      <section id="latest-book" className="half-section parallaxie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding">
              <div className="image hover-effect img-container">
                <img
                  alt="not found"
                  src={latestBook.url}
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
                    {latestBook.title}
                  </h4>
                  <p
                    className="heading_space wow fadeIn"
                    data-wow-delay="400ms"
                    dangerouslySetInnerHTML={{
                      __html:
                        latestBook.description.length > 500
                          ? `${latestBook.description.substr(0, 500)}...`
                          : latestBook.description
                    }}
                  />
                  <Link
                    to={{
                      pathname: `/book-details`
                    }}
                    className="button btnsecondary pagescroll wow fadeInUp"
                    data-wow-delay="450ms"
                    onClick={() => {
                      store.dispatch(bookDetails(latestBook));
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
