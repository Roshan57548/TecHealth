import React from "react";
import "./Style/OurTeam.css";
import { useNavigate } from "react-router-dom";
import { LinkedIn, Mail } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
// images
import ourteam from "../Images/founder.avif";

const OurTeam = (props) => {
  const navigate = useNavigate();

  const handleLinkedInClick = () => {
    // Redirect to LinkedIn page
    navigate("#");
  };

  const handleMailClick = () => {
    // Redirect to email page
    navigate("#");
  };
  return (
    <div className='ourteam-main__container'>
      <div className='ourteam-header__container'>
        <div className='ourteam-header'>
          <h5>{props.data.Heading}</h5>
          <h3>{props.data.SubHeading}</h3>
          <p>{props.data.Paragraph}</p>
        </div>
      </div>
      {/* image section */}
      <div className='ourteam-image__container'>
        <div className='ourteam-images'>
          <div className='image-item'>
            <img src={ourteam} alt='founder1' />
            <h5>{props.data.cards[0].name1}</h5>
            <h6>{props.data.cards[0].position}</h6>
            <div className='icons-container'>
              <Tooltip title='LinkedIn' placement='left'>
                <LinkedIn onClick={handleLinkedInClick} />
              </Tooltip>
              <Tooltip title='Email' placement='right'>
                <Mail onClick={handleMailClick} />
              </Tooltip>
            </div>
          </div>
          <div className='image-item'>
            <img src={ourteam} alt='founder2' />
            <h5>{props.data.cards[1].name2}</h5>
            <h6>{props.data.cards[1].position}</h6>
            <div className='icons-container'>
              <Tooltip title='LinkedIn' placement='left'>
                <LinkedIn onClick={handleLinkedInClick} />
              </Tooltip>
              <Tooltip title='Email' placement='right'>
                <Mail onClick={handleMailClick} />
              </Tooltip>
            </div>
          </div>
          <div className='image-item'>
            <img src={ourteam} alt='founder3' />
            <h5>{props.data.cards[2].name3}</h5>
            <h6>{props.data.cards[2].position}</h6>
            <div className='icons-container'>
              <Tooltip title='LinkedIn' placement='left'>
                <LinkedIn onClick={handleLinkedInClick} />
              </Tooltip>
              <Tooltip title='Email' placement='right'>
                <Mail onClick={handleMailClick} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
