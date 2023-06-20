import React from 'react'
import './Style/Services.css';
import Service_Header from './Components/Service_Header';
import Popular_Services from './Components/Popular_Services';
import Ambulance_Service from './Components/Ambulance_Service';
import Why_Choose from './Components/Why_Choose';
import Customer_Service from './Components/Customer_Service';
import FAQ from './Components/FAQ';
import ContentService_Header from './Content/ContentService_Header';
import ContentPopular_Services from './Content/ContentPopular_Services';
import ContentAmbulance_Service from './Content/ContentAmbulance_Service';
import ContentWhy_Choose from './Content/ContentWhy_Choose';
import ContentCustomer_Service from './Content/ContentCustomer_Service';
import ContentFAQ from './Content/ContentFAQ';
const Services = () => {
  return (
    <div className='Services'>
        <Service_Header data={ContentService_Header}/>
        <Popular_Services data={ContentPopular_Services}/>
        <Ambulance_Service data={ContentAmbulance_Service}/>
        <Why_Choose data={ContentWhy_Choose}/>
        <Customer_Service data={ContentCustomer_Service}/>
        <FAQ data={ContentFAQ}/>
    </div>
  )
}

export default Services