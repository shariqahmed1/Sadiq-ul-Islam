import React from "react";
import { Link } from "react-router-dom";

const PageHeader = props => {
  return (
    <section class="page-header parallaxie padding_top center-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-titles text-center">
              <h2 class="whitecolor font-light bottom30">{props.title}</h2>
              <ul class="breadcrumb justify-content-center">
                {props.data.map((v, i) => {
                  return !v.isActive ? (
                    <li key={"page-header-" + i} class="breadcrumb-item">
                      <Link to={v.link}>{v.title}</Link>
                    </li>
                  ) : (
                    <li
                      key={"page-header-" + i}
                      class="breadcrumb-item active"
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
