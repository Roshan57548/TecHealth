import React from "react";
import "./Style/MakeUs.css";
const MakeUs = (props) => {
  return (
    <div>
      <div className="make-us-0">
      <h1 className="make-us-heading1">{props.data.Heading1}<span className="make-us-heading2">{props.data.Heading2}</span></h1>
        
        <p className="make-us-para-1">{props.data.para1}</p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-lg-6 ">
            <div className="container-fluid">
              <div>
                <p className="make-us-para">{props.data.para2}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 my-6">
            <div className="container-fluid">
              <div>
                <p className="make-us-para">{props.data.para3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUs;
