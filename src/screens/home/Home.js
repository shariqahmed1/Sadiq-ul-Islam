import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Slider from "../../components/slider/Slider";
import Header from "../../components/header/Header";
import PreLoader from "../../components/preloader/Preloader";
import LatestAudio from "../../components/latestAudio/LatestAudio";
import LatestBook from "../../components/latestBook/LatestBook";
import OurWork from "../../components/ourWork/OurWork";
import Events from "../../components/events/Events";
import Counters from "../../components/counters/Counters";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <!--PreLoader--> */}
        <PreLoader />

        {/* <!-- header --> */}
        <Header />

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
        <Contact />

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
