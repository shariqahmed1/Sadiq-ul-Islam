import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { Link } from "react-router-dom";

class LatestAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBayanId: "",
      latestBayan: null
    };
  }

  componentDidMount() {
    this._fetchLatestBayan();
  }

  _fetchLatestBayan = () => {
    FIRESTORE.collection("latestBayan")
      .doc("latestBayan")
      .onSnapshot(querySnapshot => {
        if (querySnapshot.data() !== undefined) {
          let id = querySnapshot.data().id;
          this._fetchBayan(id);
        } else {
          this.setState({ latestBayanId: "" });
        }
      });
  };

  _fetchBayan = id => {
    FIRESTORE.collection("bayans")
      .doc(id.trim())
      .onSnapshot(doc => {
        this.setState({ latestBayanId: id, latestBayan: doc.data() });
      });
  };

  render() {
    const { latestBayan } = this.state;
    return (
      <section id="latest-audio" className="half-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding">
              <div className="split-box text-center center-block container-padding">
                <div className="heading-title normal-padding">
                  <span className=" wow fadeIn" data-wow-delay="300ms">
                    {latestBayan !== null && "Latest Bayan"}
                  </span>
                  <h4
                    className="darkcolor bottom20 wow fadeIn"
                    data-wow-delay="350ms"
                  >
                    {latestBayan !== null && latestBayan.title}
                  </h4>
                  {latestBayan !== null && (
                    <p
                      className="heading_space wow fadeIn"
                      data-wow-delay="400ms"
                    >
                      {latestBayan.description
                        ? latestBayan.description
                        : "One who proceeds on a path in the pursuit of knowledge, God makes him proceed therewith on a path to the Garden (Paradise). And, verily, the angels spread their wings for the seekers of knowledge out of delight. Verily, every creature of the heaven and the earth asks forgiveness for the seeker of knowledge, even the fish in the sea. The merit of the ‘alim (the learned) over the ‘abid (the devout) is like the merit of the moon over the stars on a full-moon night. The learned are the heirs of the prophets, for the prophets did not leave behind a legacy of wealth but that of knowledge. So whoever partakes of it derives a plenteous benefit"}
                    </p>
                  )}
                  {latestBayan !== null && (
                    <Link
                      to="/bayans"
                      className="button btnprimary pagescroll wow fadeInUp"
                      data-wow-delay="450ms"
                    >
                      see more
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 nopadding">
              <div className="image img-container">
                {latestBayan !== null && (
                  <iframe
                    className="latest-audio-height"
                    title={"latest-audio"}
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={latestBayan.embed}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default LatestAudio;
