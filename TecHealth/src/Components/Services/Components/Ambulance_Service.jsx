import React from "react";
import "./Style/Ambulance_Service.css";
const Ambulance_Service = (props) => {
  return (
    <div className="container service-main-container">
      <div className="row">
        <div className="col-lg-6 service-image-body">
          <div className="service-image-0">
            <div className="service-image-1">
              <img
                src={props.data.logo}
                className="service-imgg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 service-image-content">
          <h1 className="service-main-heading">
            {props.data.Heading}{" "}
            <span className="service-main-heading1">{props.data.Heading1}</span>
          </h1>
          <p className="service-para">{props.data.Para1}</p>
          <p className="service-para">{props.data.Para2}</p>
          <p className="service-para">{props.data.Para3}</p>
          <p className="service-para-1">{props.data.Para4}</p>
        </div>
      </div>
    </div>
  );
};

export default Ambulance_Service;
