import React from 'react'
import './Style/AboutUs.css';
import AboutUsTecHealth from './Components/AboutUsTecHealth';
import MakeUs from './Components/MakeUs';
import Started from './Components/Started';
import Advantages from './Components/Advantages';
import ChooseUs from './Components/ChooseUs';
import Service from './Components/Service';
import OurTeam from './Components/OurTeam';
import NeedAmbulance from './Components/NeedAmbulance';
import ContentAboutUsTecHealth from './Content/ContentAboutUsTecHealth';
import ContentMakeUs from './Content/ContentMakeUs';
import ContentStarted from './Content/ContentStarted';
import ContentAdvantages from './Content/ContentAdvantages';
import ContentChooseUs from './Content/ContentChooseUs';
import ContentService from './Content/ContentService';
import ContentOurTeam from './Content/ContentOurTeam';
import ContentNeedAmbulance from './Content/ContentNeedAmbulance';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <AboutUsTecHealth data={ContentAboutUsTecHealth}/>
        <MakeUs data={ContentMakeUs}/>
        <Started data={ContentStarted}/>
        <Advantages data={ContentAdvantages}/>
        <ChooseUs data={ContentChooseUs}/>
        <Service data={ContentService}/>
        <OurTeam data={ContentOurTeam}/>
        <NeedAmbulance data={ContentNeedAmbulance}/>
    </div>
  )
}

export default AboutUs