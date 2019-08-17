import React, { Component } from "react";

class PreLoader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader-inner">
          {/* <div className="loader-blocks">
            <span className="block-1"></span>
              <span className="block-2"></span>
              <span className="block-3"></span>
              <span className="block-4"></span>
              <span className="block-5"></span>
              <span className="block-6"></span>
              <span className="block-7"></span>
              <span className="block-8"></span>
              <span className="block-9"></span>
              <span className="block-10"></span>
              <span className="block-11"></span>
              <span className="block-12"></span>
              <span className="block-13"></span>
              <span className="block-14"></span>
              <span className="block-15"></span>
              <span className="block-16"></span> 
          </div>*/}
          <img
            alt="not found!"
            src={require("../../images/rotate-logo.gif")}
            style={{ height: 150, width: 300 }}
          />
        </div>
      </div>
    );
  }
}

export default PreLoader;
