<<<<<<< HEAD
import React from 'react';
import './Style/TermsConditions.css';
import MapData from './Components/MapData';
import Header from './Components/Header';
import Report from './Components/Report';
import Information from './Components/Information';
import ContentHeader from './Content/ContentHeader';
import ContentReport from './Content/ContentReport';
import ContentMapDataData from './Content/ContentMapData';
import ContentInformation from './Content/ContentInformation';
const TermsConditions = () => {
  return (
    <div className='TermsConditions'>
        <Header data={ContentHeader} />
        <Report />
        <MapData/>
        <Information/>
    </div>
  )
}

=======
import React from 'react';
import './Style/TermsConditions.css';
import MapData from './Components/MapData';
import Header from './Components/Header';
import Report from './Components/Report';
import Information from './Components/Information';
import ContentHeader from './Content/ContentHeader';
import ContentReport from './Content/ContentReport';
import ContentMapDataData from './Content/ContentMapData';
import ContentInformation from './Content/ContentInformation';
const TermsConditions = () => {
  return (
    <div className='TermsConditions'>
        <Header/>
        <Report />
        <MapData data={ContentMapDataData}/>
        <Information/>
    </div>
  )
}

>>>>>>> 21165d5cbb2799ad2b0f585874d7189c31c2b28a
export default TermsConditions