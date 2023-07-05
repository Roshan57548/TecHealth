import React from "react";
import "./Style/Insights.css";
import { useState, useEffect } from "react";
const Insights = (props) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter1 < props.data.ProvidedService[0].Number1) {
        setCounter1((prevCounter) => prevCounter + 1);
      }
      if (counter2 < props.data.ProvidedService[1].Number2) {
        setCounter2((prevCounter) => prevCounter + 1);
      }
      if (counter3 < props.data.ProvidedService[2].Number3) {
        setCounter3((prevCounter) => prevCounter + 1);
      }
    }, 1000 / 1000);

    return () => clearTimeout(timer);
  }, [counter1, counter2, counter3]);
  return (
    <div className="Insight">
      <h2 className="Insight_Heading">{props.data.Heading}</h2>
      <div className="Insight_Parent_Container">
        <div className="Insight_Content_Container">
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">{counter1}+</h1>
            <p className="Insight_Content_Description">
              {props.data.ProvidedService[0].Description1}
            </p>
          </div>
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">{counter2}+</h1>
            <p className="Insight_Content_Description">
              {props.data.ProvidedService[1].Description2}
            </p>
          </div>
          <div className="Insight_Content">
            <h1 className="Insight_Content_Heading">{counter3}+</h1>
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
