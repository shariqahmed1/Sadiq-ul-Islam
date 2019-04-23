import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import OthersPageHeader from "../../components/othersPageHeader/OthersPageHeader";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Modal from "react-animated-modal";

class Bayans extends Component {
  state = {
    showModal: false,
    type: "slideInDown"
  };
  render() {
    return (
      <div>
        {/* <!-- header --> */}
        <OthersPageHeader />
        <Modal
          visible={this.state.showModal}
          closemodal={() => this.setState({ showModal: false })}
          type={this.state.type}
        >
          <iframe
            // className="img-responsive"
            title={"books"}
            scrolling="no"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen
            style={{ width: "100%", height: "100%" }}
            src={"https://archive.org/embed/Bahareshariatjild3maktabatulmadina"}
          />
        </Modal>
        {/* <!--PageHeader--> */}
        <PageHeader
          title={"Book Details"}
          data={[
            {
              title: "Home",
              isActive: false,
              link: "/"
            },
            {
              title: "Books",
              isActive: false,
              link: "/books"
            },
            {
              title: "Details",
              isActive: true,
              link: "/books-details"
            }
          ]}
        />
        <section id="our-blog" class="padding bglight">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="news_item shadow">
                  <div class="image" style={{ paddingTop: 20 }}>
                    <img
                      src={require("../../images/book.jpg")}
                      alt="Latest News"
                      class="img-responsive details-page-image-wrapper"
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
                          <i class="fa fa-user-o" /> author name
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i class="icon-comment" />5
                        </a>
                      </li>
                    </ul>
                    <p class="bottom35">
                      Book Desc Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when
                      an unknown printer took a galley.
                    </p>
                    <div
                      style={{
                        flex: 1,
                        justifyContent: "space-evenly",
                        display: "flex"
                      }}
                    >
                      <a
                        href="https://ia601305.us.archive.org/4/items/Bahareshariatjild3maktabatulmadina/563-1.pdf"
                        class="button btnprimary btn-gradient-hvr"
                        style={{ marginRight: 5 }}
                      >
                        Download
                      </a>
                      <Link
                        // to="/bayan-details"
                        onClick={() => this.setState({ showModal: true })}
                        class="button btnsecondary scndry-gradient-hvr"
                      >
                        Online Read
                      </Link>
                      {/* <select
                        onChange={e => this.setState({ type: e.target.value })}
                      >
                        <option value={"pulse"}>pulse</option>
                        <option value={"rubberBand"}>rubberBand</option>
                        <option value={"shake"}>shake</option>
                        <option value={"swing"}>swing</option>
                        <option value={"tada"}>tada</option>
                        <option value={"wobble"}>wobble</option>
                        <option value={"jello"}>jello</option>
                        <option value={"bounceIn"}>bounceIn</option>
                        <option value={"bounceInDown"}>bounceInDown</option>
                        <option value={"bounceInLeft"}>bounceInLeft</option>
                        <option value={"bounceInRight"}>bounceInRight</option>
                        <option value={"bounceInUp"}>bounceInUp</option>
                        <option value={"fadeIn"}>fadeIn</option>
                        <option value={"fadeInDown"}>fadeInDown</option>
                        <option value={"fadeInLeft"}>fadeInLeft</option>
                        <option value={"fadeInRight"}>fadeInRight</option>
                        <option value={"flip"}>fadeInUp</option>
                        <option value={"flip"}>flip</option>
                        <option value={"flipInX"}>flipInX</option>
                        <option value={"flipInY"}>flipInY</option>
                        <option value={"lightSpeedIn"}>lightSpeedIn</option>
                        <option value={"rotateIn"}>rotateIn</option>
                        <option value={"rotateInDownLeft"}>
                          rotateInDownLeft
                        </option>
                        <option value={"rotateInDownRight"}>
                          rotateInDownRight
                        </option>
                        <option value={"rotateInUpLeft"}>rotateInUpLeft</option>
                        <option value={"rotateInUpRight"}>
                          rotateInUpRight
                        </option>
                        <option value={"slideInUp"}>slideInUp</option>
                        <option value={"slideInDown"}>slideInDown</option>
                        <option value={"slideInLeft"}>slideInLeft</option>
                        <option value={"slideInRight"}>slideInRight</option>
                        <option value={"zoomIn"}>zoomIn</option>
                        <option value={"zoomInDown"}>zoomInDown</option>
                        <option value={"zoomInLeft"}>zoomInLeft</option>
                        <option value={"zoomInRight"}>zoomInRight</option>
                        <option value={"zoomInUp"}>zoomInUp</option>
                        <option value={"hinge"}>hinge</option>
                        <option value={"jackInTheBox"}>jackInTheBox</option>
                        <option value={"rollIn"}>rollIn</option>
                        <option value={"bounce"}>bounce</option>
                        <option value={"flash"}>flash</option>
                      </select> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <aside class="sidebar whitebox">
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">
                      Recommended Books
                    </h4>
                    <div class="single_post bottom15">
                      <a href="#." class="post">
                        <img
                          src={require("../../images/book.jpg")}
                          alt="post image"
                        />
                      </a>
                      <div class="text">
                        <a href="#.">Book Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                    <div class="single_post bottom15">
                      <a href="#." class="post">
                        <img
                          src={require("../../images/book.jpg")}
                          alt="post image"
                        />
                      </a>
                      <div class="text">
                        <a href="#.">Book Title</a>
                        <span>September 22,2018</span>
                      </div>
                    </div>
                  </div>
                  <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">Authors</h4>
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
                  {/* <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">Tags</h4>
                    <ul class="webtags">
                      <li>
                        <a href="#.">web design</a>
                      </li>
                      <li>
                        <a href="#.">network</a>
                      </li>
                      <li>
                        <a href="#.">marketing</a>
                      </li>
                      <li>
                        <a href="#.">posts</a>
                      </li>
                      <li>
                        <a href="#.">event</a>
                      </li>
                      <li>
                        <a href="#.">website</a>
                      </li>
                      <li>
                        <a href="#.">social</a>
                      </li>
                      <li>
                        <a href="#.">themeforest</a>
                      </li>
                      <li>
                        <a href="#.">creative</a>
                      </li>
                      <li>
                        <a href="#.">best solutions</a>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div class="widget heading_space">
                    <h4 class="text-capitalize darkcolor bottom20">search</h4>
                    <form class="widget_search">
                      <div class="input-group">
                        <input
                          type="search"
                          class="form-control"
                          placeholder="search..."
                          required
                        />
                        <button type="submit" class="input-group-addon">
                          <i class="fa fa-search" />{" "}
                        </button>
                      </div>
                    </form>
                  </div> */}
                </aside>
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
