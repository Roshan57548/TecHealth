import React from "react";
import "./Style/Information.css";

const Information = (props) => {
  return (
    <div className="Information_outer_div">
      <div className="Information_inner_div">
        <h3 className="Information_heading">{props.data.heading}</h3>
        <ul className="Information_ul">
          {props.data.array.map((val, index) => {
            return (
              <>
                <div className="Information_outer_li">
                  <span className="Information_span">{index + 1}</span>
                  <li className="Information_li">{val.li}</li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Information;
