import React from "react";
import "./Style/ContactHeader.css";
import { useNavigate } from "react-router-dom";
const ContactHeader = (props) => {
  const navigate = useNavigate();
  return (
    <div className="ContactHeader_Main_Container">
      <div className="ContactHeader_Sub_Container">
        <h5 className="ContactHeader_navigator">
          <span className="ContactHeader_active" onClick={() => navigate("/")}>
            {props.data.Home}
          </span>
          <span> {props.data.Slash} </span>
          <span className="ContactHeader_AboutUs">{props.data.AboutUs}</span>
        </h5>

        <h1 className="ContactHeader_Paragraph1">
          {props.data.Paragraph1}
          <span className="ContactHeader_Paragraph1_Span_Tag"> {props.data.SubParagraph}</span>
        </h1>
        <p className="ContactHeader_Paragraph2">
          {props.data.Paragraph2}
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
