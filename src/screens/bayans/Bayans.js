import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

class Bayans extends Component {
  render() {
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Bayans"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Bayans",
              isActive: true,
              link: "/bayans"
            }
          ]}
        />
        <section id="our-blog" class="bglight padding text-center">
          <div class="container">
            <div
            // id="blog-measonry"
            >
              <div class="cbp-item" style={{ width: 350, left: 0, top: 0 }}>
                <div class="cbp-item-wrapper">
                  <div class="news_item shadow">
                    <a class="image" href="javascript:void(0)">
                      {/* <img
                        src={require("../../images/blog-measonry1.jpg")}
                        alt="Latest News"
                        class="img-responsive"
                      /> */}
                      <iframe
                        className="img-responsive bayans"
                        title={"bayans"}
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={
                          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158012399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        }
                      />
                    </a>
                    <div class="news_desc">
                      <h3 class="text-capitalize font-light darkcolor">
                        <a href="blog-detail.html">Bayan Title</a>
                      </h3>
                      <p class="top20 bottom35">
                        Bayan Desc Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                      </p>
                      <Link
                        to="/bayan-details"
                        class="button btnprimary btn-gradient-hvr"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <ul class="pagination justify-content-center top50">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="fa fa-angle-left" />
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Contact--> */}
        {/* <Contact /> */}

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Bayans;
