import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../Form/Amb_Booking_Form";
import "./Style/BookForm.css";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const BookForm = (props) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <button className="bookForm-btn" onClick={handleClickOpen}>
                <PersonAddAlt1Icon /> Sign-Up As Driver
              </button>
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Service Available Soon"}
                  </DialogTitle>

                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="bookForm-btns-1">
            <button className="bookForm-btn-1">
              <CallIcon />
              <Link to="tel:+91 7837294610">
                <span className="bookForm-call">Call Now +91 7837294610</span>
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
