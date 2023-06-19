import React from 'react'
import "./Style/NewsHeader.css";

const NewsHeader = (props) => {
  return (
    <div className="Blog_0">
      <div className="Blog_Content">
        <h3>
          <span className="Blog_Heading1_Span">{props.data.heading_Data_One}</span>
          <span className="Blog_Heading2_Span">{props.data.heading_Data_Two}</span>
        </h3>
        <p>
          {props.data.paragraph}
        </p>
      </div>
    </div>
  )
}

export default NewsHeader