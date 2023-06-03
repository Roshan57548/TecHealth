import React from "react";
import "./Style/Partners.css";
const Partners = (props) => {
  return (
    <div className="Partners_Container">
      <div className="Partners_Heading">{props.data.Heading1} <span className="Partners_Heading-1">{props.data.Heading2}</span></div>
      <div className="Partners_Logo">
        {props.data.Images.map((img, ind) => {
          return (
            <img key={ind} className="Partners_Logo_Images" src={img} alt="" />
          );
        })}
      </div>
      <div className="Partners_buttons">
        <div className="Partners_buttons_container">
          <h5>{props.data.ButtonDescriptions[0].Description1}</h5>
          <button className="Partners_Btn Partners_BookNow_Btn">
            {props.data.Buttons[0].button1}
          </button>
        </div>
        <div className="Partners_buttons_container">
          <h5>{props.data.ButtonDescriptions[1].Description2}</h5>
          <button className="Partners_Btn Partners_MobileNo_Btn">
            {props.data.Buttons[1].button2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
