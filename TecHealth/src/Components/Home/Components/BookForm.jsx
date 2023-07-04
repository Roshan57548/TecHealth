import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../Form/Amb_Booking_Form";
import "./Style/BookForm.css";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const BookForm = (props) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="bookForm-0">
      <div className="bookForm-1 flex bookForm-2">
        <div className="bookForm-3 flex">
          <h1 className="bookForm-heading">
            {props.data.Heading1}
            <br />
            <span className="bookForm-heading-span">
              {props.data.Heading2} <br />
            </span>
            {props.data.Heading3}
          </h1>

          <p className="bookForm-para">{props.data.para}</p>
          <div className="bookform-center">
            <div className="bookForm-btns">
              <button className="bookForm-btn" onClick={handleClick}>
                <PlayArrowIcon /> Book Now
              </button>
              <button className="bookForm-btn">
                <PersonAddAlt1Icon /> Sign-Up As Driver
              </button>
            </div>
          </div>
          <div className="bookForm-btns-1">
            <button className="bookForm-btn-1">
              <CallIcon />
              <Link to="tel:+91 9717365884">
                <span className="bookForm-call">Call Now +91 9717365884</span>
              </Link>
            </button>
          </div>
        </div>

        <div className="bookForm-4">
          <img src={props.data.image} alt="" />
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <Form onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </section>
  );
};

export default BookForm;
