import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Apply.css";
import { useNavigate } from "react-router-dom";
import Forms from "../Form/Amb_Booking_Form";
const Apply = () => {
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
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      
        <div className="top-btn" onClick={handleClick}>
          Book
        </div>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <Forms onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-weight: bold;
    font-size: 20px;
    width: 80px;
    height: 80px;
    color: #fff;
    background-color: rgb(181, 112, 1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .top-btn {
      font-size: 10px;
      width: 60px;
      height: 60px;
      right: 0;
      left: 80%;
      bottom: 2rem;
    }
  }
`;

export default Apply;
