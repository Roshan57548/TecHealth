import React from "react";
import "./Style/PrivacyReport.css";

const PrivacyReport = (props) => {
  return (
    <div className="privacy-report">
      <div className="privacy-report-1">
        <h1 className="privacy-report-heading">{props.data.Heading}</h1>
      </div>
      <div className="privacy-report-2">
        <p className="privacy-report-para">{props.data.para}</p>
      </div>
    </div>
  );
};

export default PrivacyReport;
