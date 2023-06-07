import React from "react";
import "./Style/MapData.css";
const MapData = (props) => {
  return (
    <div>
      <div className='MapData_parent'>
        {props.data.Content.map((card, index) => (
          <div className='MapData_card' key={index}>
            <h className='MapData_card-h'>{card.heading}</h>
            <p className='MapData_card-p'>{card.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapData;
