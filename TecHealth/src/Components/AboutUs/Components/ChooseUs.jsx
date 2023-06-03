// import React from 'react'
// import './Style/ChooseUs.css';
// const ChooseUs = () => {
//   return (
//     <div>ChooseUs</div>
//   )
// }

// export default ChooseUs

import React from "react";
import "./Style/ChooseUs.css";
// images
import hours from "../Images/24hrs.svg";
import minutes from "../Images/15mins.svg";
import policy from "../Images/f-policy.svg";

const ChooseUs = (props) => {
  return (
    <div className='aboutus-chooseus_main__container'>
      <div className='aboutus-chooseus_header__container'>
        <h1>{props.data.Heading} </h1>
        <p>{props.data.Paragraph}</p>
      </div>
      <div className='aboutus-choose-us__logo_container'>
        <div className='aboutus-chooseus_logo-container__items '>
          <img src={policy} alt='policy' />
          <p>{props.data.SubHeading[0].title1}</p>
        </div>
        <div className='aboutus-chooseus_logo-container__items '>
          <img src={minutes} alt='minutes' />
          <p>{props.data.SubHeading[0].title2}</p>
        </div>
        <div className='aboutus-chooseus_logo-container__items '>
          <img src={hours} alt='hours' />
          <p>{props.data.SubHeading[0].title3}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
