import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Form from "../../Form/Amb_Booking_Form";
import "./Style/Partners.css";
const Partners = (props) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Partners_Container">
      <div className="Partners_Heading">
        {props.data.Heading1}{" "}
        <span className="Partners_Heading-1">{props.data.Heading2}</span>
      </div>
      <div className="Partners_Logo">
        {props.data.Images.map((img, ind) => {
          return (
            <img
              key={ind}
              className="Partners_Logo_Images"
              src={img.image}
              alt=""
            />
          );
        })}
      </div>
      <div className="Partners_buttons">
        <div className="Partners_buttons_container">
          <h5>{props.data.ButtonDescriptions[0].Description1}</h5>
          <button className="Partners_Btn Partners_BookNow_Btn" onClick={handleClick}>
            {props.data.Buttons[0].button1}
          </button>
        </div>
        <div className="Partners_buttons_container">
          <h5>{props.data.ButtonDescriptions[1].Description2}</h5>
          <Link to="tel:+917837294610">
            <button className="Partners_Btn Partners_MobileNo_Btn">
              {props.data.Buttons[1].button2}
            </button>
          </Link>
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

export default Partners;
