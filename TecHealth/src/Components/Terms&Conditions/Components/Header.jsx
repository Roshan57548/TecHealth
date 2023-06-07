<<<<<<< HEAD
import React from 'react';
import "./Style/Header.css";

const Header = (props) => {
  return (
    <div className="T_and_C_Header">
      <div className="T_and_C_Header_Content">
        <h3>
          <span className="T_and_C_Header_Terms_Span">
            {props.data.heading_Data_One}
          </span>
          <span>{props.data.heading_Data_Two}</span>
          <span className="T_and_C_Header_Condition_Span">
            {props.data.heading_Data_Three}
          </span>
        </h3>
        <p>{props.data.paragraph}</p>
      </div>
    </div>
  );
}

export default Header
=======
import React from 'react'

const Header = () => {
  return (
    <div>
      Header
    </div>
  )
}

export default Header
>>>>>>> 21165d5cbb2799ad2b0f585874d7189c31c2b28a
