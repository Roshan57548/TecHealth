import React from "react";
import "./Style/PrivacyData.css";

const PrivacyData = (props) => {
  const cards = props.data.card;
  return (
    <div className="privacy_data--container">
      <div className="privacy_data">
        {cards.map((card) => (
          <div key={crypto.randomUUID()} className="privacy_item">
            <div className="privacy_title">{card.heading}</div>
            <div className="privacy_paragraph">{card.paragraph}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyData;
