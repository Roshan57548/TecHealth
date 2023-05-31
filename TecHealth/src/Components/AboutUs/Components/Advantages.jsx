
import React from "react";
import "./Style/Advantages.css";
const Advantages = (props) => {
  return (
    <div>
      <div className="advantage_div">
        <div className="advantage_header">
          <div className="advantage_heading">{props.data.Heading}</div>
          <div className="advantage_subheading1">{props.data.SubHeading1}</div>
          <div className="advantage_subheading2">{props.data.SubHeading2}</div>
        </div>

        <div className="advantage_cards">
          {props.data.Cards.map((Cards, index) => (
            <div key={index} className="advantage_card">
            <div className="advanatage_card_i_parent">
                 <div className="advantage_card_image">
                  <img src={Cards.i} alt="my_image" className="advantage_imge"/>
                 </div>
           
              <div className="advantage_card_details">
                <div className="advantage_card_d_heading">{Cards.h}</div>
                <div className="advanatage_cards_d_details">{Cards.d}</div>
              </div>
              </div>
            </div>
          ))} 
        </div> 
      </div>
    </div>
  );
};

export default Advantages;
