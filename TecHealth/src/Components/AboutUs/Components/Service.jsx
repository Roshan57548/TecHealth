import React from "react";
import "./Style/Service.css";

const Service = (props) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6 service-0">
          <img className="service-img" src={props.data.image} alt="" />
        </div>
        <div className="col-md-6 border-primary service-1">
          <h1 className="service-heading">
            {props.data.Heading1}{" "}
            <span className="service-heading-span">{props.data.Heading2}</span>
          </h1>
          <h2>{props.data.subHeading}</h2>
        </div>
      </div>
    </section>
  );
};

export default Service;
