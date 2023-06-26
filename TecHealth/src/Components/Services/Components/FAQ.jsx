import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Style/FAQ.css";
const FAQ = (props) => {
  return (
    <div className="faq-0">
      <h1 className="faq-heading">
        {props.data.Heading}
        <span className="faq-heading1">{props.data.Heading1}</span>
      </h1>
      <Accordion>
        {props.data.faq.map((element, index) => (
          <Accordion.Item eventKey={element.id} key={index}>
            <Accordion.Header>
              <h1 id="faq-sub-heading">{element.heading}</h1>
            </Accordion.Header>
            <Accordion.Body>{element.para}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
