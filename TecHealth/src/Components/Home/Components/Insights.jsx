import React from "react";
import "./Style/Insights.css";
const Insights = (props) => {
  return (
    <div className="Insight">
      <h2 className="Insight_Heading">{props.data.Heading}</h2>
      <div className="Insight_Parent_Container">
        <div className="Insight_Content_Container">
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">
              {props.data.ProvidedService[0].Number1}
            </h1>
            <p className="Insight_Content_Description">
              {props.data.ProvidedService[0].Description1}
            </p>
          </div>
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">
              {props.data.ProvidedService[1].Number2}
            </h1>
            <p className="Insight_Content_Description">
              {props.data.ProvidedService[1].Description2}
            </p>
          </div>
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">
              {props.data.ProvidedService[2].Number3}
            </h1>
            <p className="Insight_Content_Description">
              {props.data.ProvidedService[2].Description3}
            </p>
          </div>
        </div>
      </div>
      <p className="Insight_Subheading">
        <span className="Insight_ResponseTime">
          {props.data.Subheading[0].Subheading1}
        </span>
        <span className="Insight_LessThan">
          {props.data.Subheading[1].Subheading2}
        </span>
      </p>
    </div>
  );
};

export default Insights;
