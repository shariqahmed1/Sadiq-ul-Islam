import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    // console.clear();
    return (
      <footer id="site-footer" className="padding_half parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              {/* <ul className="social-icons bottom25 wow fadeInUp" data-wow-delay="300ms">
                                <li><a href={"javascript:void(0)"}><i className="fa fa-facebook"></i> </a> </li>
                                <li><a href={"javascript:void(0)"}><i className="fa fa-twitter"></i> </a> </li>
                                <li><a href={"javascript:void(0)"}><i className="fa fa-google-plus"></i> </a> </li>
                                <li><a href={"javascript:void(0)"}><i className="fa fa-linkedin"></i> </a> </li>
                                <li><a href={"javascript:void(0)"}><i className="fa fa-instagram"></i> </a> </li>
                                <li><a href={"javascript:void(0)"}><i className="fa fa-envelope-o"></i> </a> </li>
                            </ul> */}
              <p className="copyrights wow fadeInUp" data-wow-delay="350ms">
                {" "}
                Copyright &copy; 2019{" "}
                <a
                  href="javascript:void(0)"
                  onClick={() => this.props.history.push("/")}
                >
                  Sadiq ul Islam
                </a>{" "}
                | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
