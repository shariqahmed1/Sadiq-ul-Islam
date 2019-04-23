import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";

class Bayans extends Component {
  render() {
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />

        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Bayan Details"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Bayans",
              isActive: false,
              link: "/books"
            },
            {
              title: "Details",
              isActive: true,
              link: "/bayans-details"
            }
          ]}
        />
        <section id="our-blog" class="padding bglight">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="news_item shadow">
                  <div class="image">
                    {/* <img
                      src={require("../../images/book.jpg")}
                      alt="Latest News"
                      class="img-responsive"
                    /> */}
                    <iframe
                      className="img-responsive bayans-details"
                      title={"bayans"}
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={
                        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158012399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      }
                    />
                  </div>
                  <div class="news_desc text-left">
                    <h3 class="text-capitalize font-light darkcolor">
                      <a href="blog-detail.html">Book Title</a>
                    </h3>
                    <ul class="meta-tags top20 bottom20">
                      <li>
                        <a href="javascript:void(0)">
                          <i class="fa fa-calendar" />
                          Feb 14, 2018
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          {" "}
                          <i class="fa fa-user-o" /> Speecher name
                        </a>
                      </li>
                    </ul>
                    <p class="bottom35">
                      Bayan Desc Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <aside class="sidebar whitebox">
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Recommended Bayans
                    </h4>
                    <div class="single_post bottom15">
                      <div class="text">
                        <a href="#.">Bayan Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                    <div class="single_post bottom15">
                      <div class="text">
                        <a href="#.">Bayan Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                  </div>
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Speechers
                    </h4>
                    <ul class="webcats">
                      <li>
                        <a href="#.">
                          Mufti Sahab <span>(20)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          Allam Sahab <span>(05)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          marketing <span>(11)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          Ali Sahab <span>(19)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
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
