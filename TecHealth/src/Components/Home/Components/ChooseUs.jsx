import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/ChooseUs.css";
import Form from "../../Form/Amb_Booking_Form";
import hours from "../Images/24hrs.svg";
import minutes from "../Images/15mins.svg";
import policy from "../Images/f-policy.svg";
import logo from "../Images/logo.png";

const ChooseUs = (props) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="choose-us__main_container container">
      <h1 style={{ textAlign: "center," }}>
        {props.data.Heading}{" "}
        <span className="contactus-heading-1">{props.data.Heading1}</span>
      </h1>
      <div className="row">
        <div className="choose-us__logo_container col-lg-12 col-sm-12">
          <div className="logo-container__items">
            <img src={policy} alt="policy" />
            <p>{props.data.SubHeading[0].title1}</p>
          </div>
          <div className="logo-container__items">
            <img src={minutes} alt="minutes" />
            <p>{props.data.SubHeading[0].title2}</p>
          </div>
          <div className="logo-container__items">
            <img src={hours} alt="hours" />
            <p>{props.data.SubHeading[0].title3}</p>
          </div>
        </div>
        {/* image section*/}
        <div className="choose-us__image_container  ">
          <div className="choose-us__left">
            <img
              src={props.data.image[0].img2}
              className="left-image_first"
              alt="first"
            />
            <img
              src={props.data.image[0].img1}
              alt="second"
              className="left-image_second"
            />
            <button className="btn btn-primary image-btn" onClick={handleClick}>
              Book now
            </button>
          </div>
          <div className="choose-us__right">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <Form onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseUs;
