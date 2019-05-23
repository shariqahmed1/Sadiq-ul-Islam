import React, { Component } from "react";
import "./style.css";

class Error404 extends Component {
  render() {
    console.clear();
    return (
      <div>
        <img
          src={
            "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
          }
          style={{ height: "100vh", width: "100%" }}
        />
      </div>
    );
  }
}

export default Error404;
