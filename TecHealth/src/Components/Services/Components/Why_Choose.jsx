import React from "react";
import "./Style/Why_Choose.css";

const Why_Choose = (props) => {
  return (
    <div className='why-chooseus--main-container'>
      <div className='why-chooseus--header'>
        <h1>{props.data.MainHeading}</h1>
        <p>{props.data.SubHeading}</p>
      </div>
      <div className='why-chooseus--cards'>
        {props.data.cards.map((card, index) => (
          <div className='why-chooseus-subcards' key={index}>
            <span>{card.icon}</span>
            <h3>{card.heading}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_Choose;
