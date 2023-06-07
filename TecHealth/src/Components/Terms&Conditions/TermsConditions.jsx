import React from 'react';
import './Style/TermsConditions.css';
import MapData from './Components/MapData';
import Header from './Components/Header';
import Report from './Components/Report';
import Information from './Components/Information';
import ContentHeader from './Content/ContentHeader';
import ContentReport from './Content/ContentReport';
import ContentMapData from './Content/ContentMapData';
import ContentInformation from './Content/ContentInformation';
const TermsConditions = () => {
  return (
    <div className='TermsConditions'>
        <Header data={ContentHeader} />
        <Report data={ContentReport}/>
        <MapData data={ContentMapData}/>
        <Information data={ContentInformation}/>
    </div>
  )
}

export default TermsConditions