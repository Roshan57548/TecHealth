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
<<<<<<< HEAD
        {/* PrivacyPolicy */}
        <PrivacyHeader data={ContentPrivacyHeader} />
        <PrivacyReport/>
        <PrivacyData/>

=======
      {/* PrivacyPolicy */}
      <PrivacyHeader />
      <PrivacyReport />
      <PrivacyData data={ContentPrivacyData} />
>>>>>>> 21165d5cbb2799ad2b0f585874d7189c31c2b28a
    </div>
  );
};

export default PrivacyPolicy;
