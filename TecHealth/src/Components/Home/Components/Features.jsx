import React from "react";
import PhonelinkRingOutlinedIcon from "@mui/icons-material/PhonelinkRingOutlined";
import "./Style/Features.css";
import ContentFeatures from "../Content/ContentFeatures";

const Features = (props) => {
  const { Heading, SubHeading1, SubHeading2, Cards } = ContentFeatures;

  return (
    <div className="Features_mainDiv">
      <div className="row ">
        <div className="col-md-6 col-lg-6 Features_main_heading ">
          <div className="Features_heading_contents">
            <div className="Features_heading_contents_head">{Heading}</div>
            <div className="Features_heading_contents_subhead1">
              {SubHeading1}
            </div>
            <div className="Features_heading_contents_subhead2">
              {SubHeading2}
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 Features_card_above_2">
          <div className="row">
            {Cards.slice(0, 2).map((card, index) => (
              <div
                className="col-md-6 col-lg-6 Features_card_above"
                key={index}
              >
                <div className="Features_card">
                  <div className="features_card_div">
                    <div className="features_card-content">
                      <span className="features_card_header">
                        {card.heading}{" "}
                      </span>
                      <div className="Features_image_div">
                        {" "}
                        <img
                          src={card.image}
                          alt="my_image"
                          className="OurFeatures_image1"
                        />{" "}
                      </div>
                    </div>
                    <div className="features_card_details">{card.details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {Cards.slice(2).map((card, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="Features_card">
              <div className="features_card_div">
                <div className="features_card-content">
                  <span className="features_card_header">{card.heading} </span>
                  <div className="Features_image_div">
                    {" "}
                    <img
                      src={card.image}
                      alt="my_image"
                      className="OurFeatures_image1"
                    />{" "}
                  </div>
                </div>
                <div className="features_card_details">{card.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
