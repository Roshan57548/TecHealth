import React from "react";
import "./Style/PrivacyPolicy.css";
import PrivacyData from "./Components/PrivacyData";
import PrivacyHeader from "./Components/PrivacyHeader";
import PrivacyReport from "./Components/PrivacyReport";
import ContentPrivacyData from "./Content/ContentPrivacyData";
import ContentPrivacyHeader from "./Content/ContentPrivacyHeader";
import ContentPrivacyReport from "./Content/ContentPrivacyReport";
const PrivacyPolicy = () => {
  return (
    <div className='PrivacyPolicy'>
        {/* PrivacyPolicy */}
        <PrivacyHeader data={ContentPrivacyHeader} />
        <PrivacyReport data={ContentPrivacyReport}/>
        <PrivacyData data={ContentPrivacyData}/>

    </div>
  );
};

export default PrivacyPolicy;
