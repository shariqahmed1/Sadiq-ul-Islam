import React, { Component } from "react";
import { FIRESTORE } from "../../constants/firebase/firebase";

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

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
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14475.888473518236!2d67.05026836979505!3d24.898932657902748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f14951f4807%3A0xba43b784cc2f4570!2sMadarsa+Sadiq+ul+Islam!5e0!3m2!1sen!2s!4v1558383849038!5m2!1sen!2s"
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
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3616.185034636612!2d67.1904543!3d24.9938278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU5JzM3LjgiTiA2N8KwMTEnMzMuNSJF!5e0!3m2!1sen!2s!4v1558383777142!5m2!1sen!2s"
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

  _redirectOnGooleMap = url => {
    window.open(url, "_blank");
  };

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
            Liaquatabad Town Block 10, Karachi, Sindh, Pakistan{" "}
          </p>
          <a
            className="pickus"
            href="javascript:void(0)"
            onClick={() =>
              this._redirectOnGooleMap(
                "https://www.google.com/maps/place/Madarsa+Sadiq+ul+Islam/@24.8969678,67.0625484,14z/data=!4m8!1m2!2m1!1smadarsa+sadiq+ul+islam!3m4!1s0x3eb33f14951f4807:0xba43b784cc2f4570!8m2!3d24.9077375!4d67.0540643"
              )
            }
            data-text="See Direction"
          >
            See Direction
          </a>
          <br />
          <br />

          <h6 className="bottom10">Chandni Chowk Madarsa</h6>
          <p className="bottom10">
            Alpine apartments, CA - 30 #7,8,9, Chandni Chowk (New Town),
            Karachi, Sindh 78400, Pakistan.{" "}
          </p>
          <a
            className="pickus"
            href="javascript:void(0)"
            onClick={() =>
              this._redirectOnGooleMap(
                "https://www.google.com/maps/place/Madrasa+Sadiq-ul-islam/@24.8969678,67.0625484,14z/data=!4m8!1m2!2m1!1smadarsa+sadiq+ul+islam!3m4!1s0x3eb33ee5e7325cfd:0xe3bb1ce6565bc0cc!8m2!3d24.8900894!4d67.063982"
              )
            }
            data-text="See Direction"
          >
            See Direction
          </a>
          <br />
          <br />

          <h6 className="bottom10">Shahbaz Goth Madarsa</h6>
          <p className="bottom10">
            Near Arizabad Block 1, Karachi, Sindh, Pakistan{" "}
          </p>
          <a
            className="pickus"
            href="javascript:void(0)"
            onClick={() =>
              this._redirectOnGooleMap(
                "https://www.google.com/maps/place/24%C2%B059'37.8%22N+67%C2%B011'33.5%22E/@24.9938278,67.1904543,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d24.993823!4d67.192643"
              )
            }
            data-text="See Direction"
          >
            See Direction
          </a>
        </div>
        <div className="col-md-6 col-sm-6 our-address top20">
          <h5 className="bottom15">Our Phone</h5>
          <p className="bottom5">Mobile : 0333 3287619</p>
          <p className="bottom5">Mobile : 0321 2578612</p>
          <br />

          <h5 className="bottom15">Our Email</h5>
          <p className="bottom15">info@sadiqulislam.net</p>
          <a
            className="pickus"
            href="mailto:info@sadiqulislam.net"
            data-text="Send a Message"
          >
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
    if (name && email && message) {
      let check = validateEmail(email);
      if (check) {
        FIRESTORE.collection("mail")
          .add({
            name,
            email,
            message
          })
          .then(() => {
            this.props.handleSnackBar(true, "Thanks for messaged us");
            this.setState({
              name: "",
              email: "",
              message: ""
            });
          });
      } else {
        this.props.handleSnackBar(true, "Email is badly format");
      }
    } else {
      this.props.handleSnackBar(true, "All fields are required");
    }
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
    console.clear();
    return (
      <section id="contactus" className="padding_top parallaxie">
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
