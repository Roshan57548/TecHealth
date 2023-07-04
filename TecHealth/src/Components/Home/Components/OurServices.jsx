import React from "react";
import "./Style/OurServices.css";

const OurServices = (props) => {
  return (
    <div className="OurServices">
      <div className="OurServices_heading">{props.data.Heading}</div>
      <div className="OurServices_details">{props.data.details}</div>

      <div className=" OurServices_cards ">
        {props.data.Cards.map((card, index) => (
          <div className="OurServices_card" key={index}>
            <div className="OurServices_card_details">
              <div className="OurServices-card-image">
                <img
                  src={card.i}
                  alt="my_image"
                  className="OurServices_image"
                />
              </div>
              <div className="OurServices-card-heading">{card.h}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
