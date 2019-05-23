import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Slider from "../../components/slider/Slider";
import Header from "../../components/header/Header";
// import PreLoader from "../../components/preloader/Preloader";
import LatestAudio from "../../components/latestAudio/LatestAudio";
import LatestBook from "../../components/latestBook/LatestBook";
import OurWork from "../../components/ourWork/OurWork";
import Events from "../../components/events/Events";
import Counters from "../../components/counters/Counters";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
// import { store } from "../../redux/store/store";
// import { loader } from "../../redux/actions/actions";
import SnackBar from "../../components/snackBar/SnackBar";

// import axios from "axios";

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

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   let stor = store.getState().AuthReducer;
  //   if (stor.loader === true) {
  //     console.log("Ye chala");
  //     return {
  //       isLoader: false
  //     };
  //   }
  // }

  // componentDidMount() {
  //   this.closeLoader();
  //   let instance = axios.create({
  //     baseURL: "http://18.209.167.23/api/"
  //   });

  //   instance
  //     .get("vendor/get_products/?id=e3489418-ddad-4aef-801c-19a4b1cda4ff")
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  //   // store.subscribe(() => console.log(store.getState(), " ** subscribe"));
  // }

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
    console.clear();
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

        {/* <!--Programs--> */}
        <Events />

        {/* <!--Counters--> */}
        <Counters />

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
