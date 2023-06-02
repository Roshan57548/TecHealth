import React from 'react'
import './Style/ContactUs.css';
import ContactHeader from './Components/ContactHeader';
import Forms from './Components/Forms';
import HelpSupport from './Components/HelpSupport';
import Map from './Components/Map';
import ContentContactHeader from './Content/ContentContactHeader';
import ContentForms from './Content/ContentForms';
import ContentHelpSupport from './Content/ContentHelpSupport';
import ContentMap from './Content/ContentMap';
const ContactUs = () => {
  return (
    <div className='ContactUs'>
        <ContactHeader data={ContentContactHeader}/>
        <Forms data={ContentForms}/>
        <HelpSupport data={ContentHelpSupport}/>
        <Map data={ContentMap}/>
    </div>
  )
}

export default ContactUs