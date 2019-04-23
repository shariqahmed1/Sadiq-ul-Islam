import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Contact from "../../components/contact/Contact";
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
          title={"Books"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Books",
              isActive: true,
              link: "/books"
            }
          ]}
        />
        <section id="our-blog" class="bglight padding text-center">
          <div class="container">
            <div>
              <div class="cbp-item" style={{ width: 350, left: 0, top: 0 }}>
                <div class="cbp-item-wrapper">
                  <div class="news_item shadow">
                    <a class="image" href="blog-detail.html">
                      <img
                        src={require("../../images/book.jpg")}
                        alt="Latest News"
                        class="img-responsive bayans"
                      />
                      {/* <iframe
                        className="img-responsive bayans"
                        title={"books"}
                        scrolling="no"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowfullscreen
                        src={
                          "https://archive.org/embed/Bahareshariatjild3maktabatulmadina"
                        }
                      /> */}
                    </a>
                    <div class="news_desc">
                      <h3 class="text-capitalize font-light darkcolor">
                        <a href="blog-detail.html">Book Title</a>
                      </h3>
                      <p class="top20 bottom35">
                        Book Desc Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                      </p>
                      <Link
                        to="/book-details"
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

        {/* <!--Footer--> */}
        <Footer />
      </div>
    );
  }
}

export default Bayans;
