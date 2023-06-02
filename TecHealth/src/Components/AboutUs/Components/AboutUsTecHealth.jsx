
import React from "react";
import "./Style/AboutUsTecHealth.css";
import { useNavigate } from "react-router-dom";
const AboutUsTecHealth = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h6 className="AboutUsTecHealth_navigator">
          <span
            className="AboutUsTecHealth_active"
            onClick={() => navigate("/")}
          >
            {props.data.button1}
          </span>
          <span> / </span>
          <span
            class="AboutUsTecHealth_actives"
            
          >
            {props.data.button2}
          </span>
        </h6>
      </div>
      <h2 className="AboutUsTecHealth_whatis">
        {props.data.heading_part1}
        <span className="AboutUsTecHealth_medulance">
          {props.data.heading_part2}
        </span>
      </h2>
      <p className="AboutUsTecHealth_paragraph">{props.data.paragraph1}</p>
      <div className="AboutUsTecHealth_historydiv">
        <div className="AboutUsTecHealth_history">
          <h3 className="AboutUsTecHealth_history_heading">
            {props.data.subheading}
          </h3>
          <p className="AboutUsTecHealth_history_paragraph">
            {props.data.paragraph2}
          </p>
        </div>
        <div className="AboutUsTecHealth_video">
          <iframe
            className="AboutUsTecHealth_iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/R6Ro9oV1luA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTecHealth;
