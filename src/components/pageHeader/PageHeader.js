import React from "react";
import { Link } from "react-router-dom";

const PageHeader = props => {
  // console.clear();
  return (
    <section className="page-header parallax padding_top center-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="page-titles text-center">
              <h2 className="whitecolor font-light bottom30">{props.title}</h2>
              <ul className="breadcrumb justify-content-center">
                {props.data.map((v, i) => {
                  return !v.isActive ? (
                    <li key={"page-header-" + i} className="breadcrumb-item">
                      <Link to={v.link}>{v.title}</Link>
                    </li>
                  ) : (
                    <li
                      key={"page-header-" + i}
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      {v.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
