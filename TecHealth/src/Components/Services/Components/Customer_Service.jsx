import React from "react";
import "./Style/Customer_Service.css";
const Customer_Service = (props) => {
  return (
    <div className='customer-service--parent'>
      <div className='customer-service--chid_first'>
        <div>
          <h3>{props.data.Heading}</h3>
        </div>
        <div>
          <p>{props.data.Paragraph}</p>
        </div>
      </div>
      <div className='customer-service--chid_second'>
        {props.data.cards.map((card, index) => (
          <div className='customer-card' key={index}>
            <div className='card_logo'>
              <img src={card.logo} alt='card-logos' />
            </div>
            <div className='card_title'>
              <h4>{card.title}</h4>
            </div>
            <div className='card_content'>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer_Service;
