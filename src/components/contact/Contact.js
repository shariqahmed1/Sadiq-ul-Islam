import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  _mapRender = () => (
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="map-container">
          <iframe
            title={"map-1"}
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.0618367057359!2d67.05396564110768!3d24.908887125991825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzI3LjUiTiA2N8KwMDMnMTUuMyJF!5e0!3m2!1sen!2s!4v1552433236556"
            }
            className="map-style"
            allowFullScreen
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="map-container">
          <iframe
            title={"map-2"}
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2311984184353!2d67.0617933144782!3d24.89009425020016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee5e7325cfd%3A0xe3bb1ce6565bc0cc!2sMadrasa+Sadiq-ul-islam!5e0!3m2!1sen!2s!4v1552434431461"
            }
            className="map-style"
            allowFullScreen
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="map-container">
          <iframe
            title={"map-3"}
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49308.93363386312!2d67.13689417381501!3d24.98567202611941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34906ecad91b1%3A0xd4f4ea9f090c9841!2sShahbaz+Goth!5e0!3m2!1sen!2s!4v1552434647290"
            }
            className="map-style"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );

  _titleRender = () => (
    <div className="col-md-12 col-sm-12">
      <div
        className="heading-title text-center heading_space wow fadeInUp"
        data-wow-delay="300ms"
      >
        <span>Lets Get In Touch</span>
        <h2 className="darkcolor" style={{ fontSize: 50 }}>
          Contact Us
        </h2>
      </div>
    </div>
  );

  _addressRender = () => (
    <div
      className="col-md-6 col-sm-12 margin_bottom wow fadeInUp"
      data-wow-delay="350ms"
    >
      <div className="row">
        <div className="col-md-6 col-sm-6 our-address top20">
          <h5 className="bottom30">Our Addresses</h5>

          <h6 className="bottom10">Liaquatabad Madarsa (Main)</h6>
          <p className="bottom10">
            123 Stree New York City , United States Of America.{" "}
          </p>
          <a className="pickus" href="#." data-text="See Direction">
            See Direction
          </a>
          <br />
          <br />

          <h6 className="bottom10">Chandni Chowk Madarsa</h6>
          <p className="bottom10">
            123 Stree New York City , United States Of America.{" "}
          </p>
          <a className="pickus" href="#." data-text="See Direction">
            See Direction
          </a>
          <br />
          <br />

          <h6 className="bottom10">Shahbaz Goth Madarsa</h6>
          <p className="bottom10">
            123 Stree New York City , United States Of America.{" "}
          </p>
          <a className="pickus" href="#." data-text="See Direction">
            See Direction
          </a>
        </div>
        <div className="col-md-6 col-sm-6 our-address top20">
          <h5 className="bottom15">Our Phone</h5>
          <p className="bottom5">Mobile : 001 63165370895</p>
          <p className="bottom5">Telephone : 001 01085379709</p>
          <br />

          <h5 className="bottom15">Our Email</h5>
          <p className="bottom15">sadiqulislam@info.com</p>
          <a className="pickus" href="#." data-text="Send a Message">
            Send a Message
          </a>
        </div>
      </div>
    </div>
  );

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addUser = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    FIRESTORE.collection("check").add({
      name,
      email,
      message
    });
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  _formRender = () => {
    const { name, email, message } = this.state;
    return (
      <div className="col-md-6 col-sm-12 margin_bottom">
        <form
          className="getin_form wow fadeInUp"
          data-wow-delay="400ms"
          onSubmit={this.addUser}
        >
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="form-group bottom35">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name:"
                  required
                  id="first_name"
                  value={name}
                  name="name"
                  onChange={this.updateInput}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group bottom35">
                <input
                  className="form-control"
                  value={email}
                  type="email"
                  placeholder="Email:"
                  required
                  id="email"
                  name="email"
                  onChange={this.updateInput}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group bottom35">
                <textarea
                  className="form-control"
                  value={message}
                  placeholder="Message"
                  id="message"
                  name="message"
                  onChange={this.updateInput}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <button
                type="submit"
                className="button btnprimary"
                id="submit_btn"
              >
                submit request
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <section id="contactus" className="padding_top">
        <div className="container">
          <div className="row">
            {this._titleRender()}
            {this._addressRender()}
            {this._formRender()}
          </div>
          {this._mapRender()}
        </div>
      </section>
    );
  }
}

export default Contact;
