import React from 'react'
import './Style/Service_Header.css';
import {useNavigate} from "react-router-dom"
const Service_Header = (props) => {
  // console.log(props.data.headerData)
  const navigate=useNavigate();
  return (
    <div className="ServiceHeader">
      {props.data.headerData.map((ele,ind)=>{
        return (
          <div className="ServiceHeader_Content_Container" key={ind}>
            <h5 className="ServiceHeader_Heading_Container">
              <span
                className="ServiceHeader_Heading_Home"
                onClick={() => navigate("/")}
              >
                {ele.Home}
              </span>
              <span className="ServiceHeader_Heading_Slash"> {ele.Slash} </span>
              <span className="ServiceHeader_Heading_Services">{ele.Services}</span>
            </h5>
            <p className="ServiceHeader_Para1">
              {ele.Para1}
              <span className="ServiceHeader_SubPara1">  {ele.SubPara1}</span>
            </p>
            <p className="ServiceHeader_Para2">
              {ele.Para2}
            </p>
          </div>
        );
      })}
      
    </div>
  );
}

export default Service_Header