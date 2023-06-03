import React from "react";
import "./Style/HelpSupport.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
const HelpSupport = (props) => {
  return (
    <div className="HelpSupport_div">
      <div className="HelpSupport_inner_div">
        <h3 className="HelpSupport_heading">
          {props.data.help}
          <span className="HelpSupport_span"> {props.data.and} </span>
          {props.data.support}
        </h3>
        <p className="HelpSupport_paragraph">{props.data.paragraph}</p>
        <div className="HelpSupport_parent_div">
          <div className="HelpSupport_child_div1">
            <div className="HelpSupport_middle_div">
              <div className="HelpSupport_inner_child1">
                <div className="HelpSupport_icon">
                  <PhoneAndroidIcon />
                </div>
                <div>
                  <h5 className="HelpSupport_color">{props.data.callus}</h5>
                  <p>{props.data.number}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="HelpSupport_child_div2">
            <div className="HelpSupport_middle_div">
              <div className="HelpSupport_inner_child2">
                <div className="HelpSupport_icon">
                  <LocationOnIcon />
                </div>
                <div className="HelpSupport_address">
                  <h5 className="HelpSupport_color">{props.data.location}</h5>
                  <p>{props.data.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="HelpSupport_child_div1">
            <div className="HelpSupport_middle_div">
              <div className="HelpSupport_inner_child1">
                <div className="HelpSupport_icon">
                  <EditIcon />
                </div>
                <div>
                  <h5 className="HelpSupport_color">{props.data.emailus}</h5>
                  <p>{props.data.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
