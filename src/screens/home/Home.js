import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Slider from "../../components/slider/Slider";
import Header from "../../components/header/Header";
import LatestAudio from "../../components/latestAudio/LatestAudio";
import LatestBook from "../../components/latestBook/LatestBook";
import OurWork from "../../components/ourWork/OurWork";
import Events from "../../components/events/Events";
import Counters from "../../components/counters/Counters";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
// import { store } from "../../redux/store/store";
import SnackBar from "../../components/snackBar/SnackBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoader: true,
      open: false,
      message: ""
    };
    this.handleSnackBar = this.handleSnackBar.bind(this);
  }

  handleClose = () => {
    this.setState({
      open: false,
      message: ""
    });
  };

  handleSnackBar(flag, message) {
    this.setState({
      open: flag,
      message
    });
  }

  closeLoader = () => {
    setTimeout(() => {
      this.setState({ isLoader: false });
    }, 2000);
  };

  render() {
    // console.clear();
    return (
      <div>
        {/* <!--PreLoader--> */}
        {/* {isLoader && <PreLoader />} */}

        {/* <PreLoader /> */}
        {/* <!-- header --> */}
        <Header handleSnackBar={this.handleSnackBar} />

        {/* <!--Main Slider--> */}
        <Slider />

        {/* <!--Latest Audio--> */}
        <LatestAudio />

        {/* <!--Our Work--> */}
        <OurWork />

        {/* <!--Latest Book--> */}
        <LatestBook />

        {/* <!--Counters--> */}
        <Counters />

        {/* <!--Programs--> */}
        <Events />

        {/* <!--Contact--> */}
        <Contact handleSnackBar={this.handleSnackBar} />

        {/* <!--Footer--> */}
        <Footer />

        <SnackBar
          handleClose={this.handleClose}
          message={this.state.message}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Home;
