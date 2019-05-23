import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

class OurWork extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderDialog() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"What about your Donations?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We will provide you our information will be soon
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  render() {
    console.clear();
    return (
      <section id="video-parallax" className="video-parallax padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div
                className="heading-title wow fadeInUp"
                data-wow-delay="300ms"
              >
                <h2 className="whitecolor">
                  WE <span className="fontregular">TEACH</span>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="process-wrapp">
              <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                <span className="pro-step bottom20">01</span>
                <p className="fontbold bottom25">NAZRA</p>
                <p>
                  <b>"NAZRA"</b> means the ability to recite the Holy Quran.
                  <br />
                  "The Messenger of Allah{" "}
                  <span style={{ fontSize: 18 }}>(ﷺ)</span> said : ‘The best of
                  you are those who learn the Qur'an and teach it.’"
                  <br />
                  "He <span style={{ fontSize: 18 }}>(ﷺ)</span> also said: ‘The
                  Qur’an is an intercessor and it’s intercession is accepted and
                  its plea is believed. Whoever makes it lead him – it leads him
                  to Paradise and whomsoever places it behind him [the result
                  will be] he is dragged to the Fire.’"
                </p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="500ms">
                <span className="pro-step bottom20">02</span>
                <p className="fontbold bottom25">HIFZ</p>
                <p>
                  <b>"HIFZ"</b> means anyone who has completely memorized the
                  Qur'an.
                  <br />
                  "The Messenger of Allaah{" "}
                  <span style={{ fontSize: 18 }}>(ﷺ)</span> said: ‘Whoever reads
                  the Qur’aan, learns it and acts in accordance with it, on the
                  Day of Resurrection his parents will be given a crown to wear
                  whose light will be like the light of the sun, and his parents
                  will be given garments which far surpass everything to be
                  found in this world. They will say, “Why have we been given
                  this to wear?” It will be said, “Because your child learned
                  the Qur’aan."
                </p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                <span className="pro-step bottom20">03</span>
                <p className="fontbold bottom25">DARS-E-NIZAMI</p>
                <p>
                  <b>"DARS-E-NIZAMI"</b> is a study curriculum or system used in
                  traditional Islamic institutions (madrassas) and Dar Ul
                  Ulooms.
                  <br />
                  "The Messenger of Allah{" "}
                  <span style={{ fontSize: 18 }}>(ﷺ)</span> said : ‘The seeking
                  of knowledge is obligatory for every Muslim.’"
                  <br />
                  "He <span style={{ fontSize: 18 }}>(ﷺ)</span> also said at one
                  place: ‘If Allah intends goodness for someone, He gives him
                  understanding of the religion.’"
                  <br />
                </p>
              </li>
              <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                <span className="pro-step bottom20">04</span>
                <p className="fontbold bottom25">NAAT</p>
                <p>
                  <b>"NAAT"</b> is an Arabic word and it means, literally,
                  praise. In Urdu, naat means the praise of Prophet Hazrat
                  Muhammad (Peace Be Upon Him). A poem with praise of Prophet
                  Muhammad (Peace Be Upon Him) is also called naat in Urdu.
                </p>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 center-block text-center">
              <div className="wow fadeInUp" data-wow-delay="300ms">
                <br />
                <a
                  href="javascript:void(0)"
                  className="top20 button btnprimary wow fadeInUp"
                  data-wow-delay="450ms"
                  onClick={() => this.setState({ open: true })}
                >
                  {" "}
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.renderDialog()}
      </section>
    );
  }
}

export default OurWork;
