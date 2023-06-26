import React from "react";
import "./Style/Popular_Services.css";
const Popular_Services = (props) => {
  return (
    <div className='PopularServices'>
      <div className='PopularServices_ContentContainer'>
        <h2 className='PopularServices_MainHeading'>
          Popular Ambulance Services
        </h2>
        <div className='PupularService_CardContainer'>
          {props.data.popularServicesData.map((ele, ind) => {
            return (
              <div className='PopularServices_Card' key={ind}>
                <img
                  className='PopularServices_Image'
                  src={ele.image}
                  alt='Image Loading...'
                />
                <h5 className='PopularServices_SubHeading'>{ele.heading}</h5>
                <p className='vices_Paragraph'>
                  {ele.paragraph}
                  <span className='PopularServices_SubPara'>
                    {" "}
                    {ele.subParagraph}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular_Services;
