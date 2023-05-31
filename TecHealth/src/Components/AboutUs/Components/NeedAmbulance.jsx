import React from "react";
import "./Style/NeedAmbulance.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const NeedAmbulance = (props) => {
  return (
    <div className="need_Ambulance-0">
      <div>
        <h1 className="need_Ambulance-heading">{props.data.heading}</h1>
      </div>
      <p className="need_Ambulance-para">{props.data.para}</p>
      <div className="need_Ambulance-center">
        <div className="need_Ambulance-btns">
          <button className="need_Ambulance-btn">
            <ArrowForwardIcon />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedAmbulance;
