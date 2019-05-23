import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { Link } from "react-router-dom";
import { bayanDetails } from "../../redux/actions/actions";
import { store } from "../../redux/store/store";

class LatestAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestBayanData: null
    };
  }

  componentDidMount() {
    this._fetchLatestBayan();
  }

  _fetchLatestBayan = () => {
    FIRESTORE.collection("bayans")
      .orderBy("timeStamp", "desc")
      .limit(1)
      .onSnapshot(querySnapshot => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            this.setState({ latestBayanData: obj });
          });
        }
      });
  };

  render() {
    console.clear();
    const { latestBayanData } = this.state;
    return latestBayanData ? (
      <section id="latest-audio" className="half-section parallaxie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding">
              <div className="split-box text-center center-block container-padding">
                <div className="heading-title normal-padding">
                  <span className=" wow fadeIn" data-wow-delay="300ms">
                    Latest Bayan
                  </span>
                  <h4
                    className="darkcolor bottom20 wow fadeIn"
                    data-wow-delay="350ms"
                  >
                    {latestBayanData.title}
                  </h4>
                  {latestBayanData !== null && (
                    <p
                      className="heading_space wow fadeIn"
                      data-wow-delay="400ms"
                      dangerouslySetInnerHTML={{
                        __html: latestBayanData.description
                          ? latestBayanData.description.length > 500
                            ? `${latestBayanData.description.substr(0, 500)}...`
                            : latestBayanData.description
                          : "One who proceeds on a path in the pursuit of knowledge, God makes him proceed therewith on a path to the Garden (Paradise). And, verily, the angels spread their wings for the seekers of knowledge out of delight. Verily, every creature of the heaven and the earth asks forgiveness for the seeker of knowledge, even the fish in the sea. The merit of the ‘alim (the learned) over the ‘abid (the devout) is like the merit of the moon over the stars on a full-moon night. The learned are the heirs of the prophets, for the prophets did not leave behind a legacy of wealth but that of knowledge. So whoever partakes of it derives a plenteous benefit"
                      }}
                    />
                  )}

                  <Link
                    to={{
                      pathname: `/bayan-details`
                    }}
                    className="button btnprimary pagescroll wow fadeInUp"
                    data-wow-delay="450ms"
                    onClick={() => {
                      store.dispatch(bayanDetails(latestBayanData));
                    }}
                  >
                    see more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 nopadding">
              <div className="image img-container">
                <iframe
                  className="latest-audio-height"
                  title={"latest-audio"}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={latestBayanData.embed}
                />
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
export default LatestAudio;
