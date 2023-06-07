import React from 'react'
import './Style/PrivacyHeader.css';
const PrivacyHeader = (props) => {
  return (
    <div className="PrivacyPolicy_0">
      <div className="PrivacyPolicy_Content">
        <h3>
          <span className="PrivacyPolicy_Privacy_Span">{props.data.heading_Data_One}</span>
          <span className="PrivacyPolicy_Policy_Span">{props.data.heading_Data_Two}</span>
        </h3>
        <p>
          {props.data.paragraph}
        </p>
      </div>
    </div>
  );
}

export default PrivacyHeader
