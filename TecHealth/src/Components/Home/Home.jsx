import React from 'react';
import './Style/Home.css';
import BookForm from './Components/BookForm';
import OurServices from './Components/OurServices';
import ChooseUs from './Components/ChooseUs';
import Features from './Components/Features';
import Insights from './Components/Insights';
import NeedAmbulance from './Components/NeedAmbulance';
import Testimonials from './Components/Testimonials';
import Partners from './Components/Partners';
import AreasDeliver from './Components/AreasDeliver';
import ContentBookForm from './Content/ContentBookForm';
import ContentOurServices from './Content/ContentOurServices';
import ContentChooseUs from './Content/ContentChooseUs';
import ContentFeatures from './Content/ContentFeatures';
import ContentInsights from './Content/ContentInsights';
import ContentNeedAmbulance from './Content/ContentNeedAmbulance';
import ContentTestimonials from './Content/ContentTestimonials';
import ContentPartners from './Content/ContentPartners';
import ContentAreasDeliver from './Content/ContentAreasDeliver';
const Home = () => {
  return (
    <div className='Home'>
        <BookForm data={ContentBookForm}/>
        <OurServices data={ContentOurServices}/>
        <ChooseUs data={ContentChooseUs}/>
        <Features data={ContentFeatures}/>
        <Insights data={ContentInsights}/>
        <NeedAmbulance data={ContentNeedAmbulance}/>
        <Testimonials data={ContentTestimonials}/>
        <Partners data={ContentPartners}/>
        <AreasDeliver data={ContentAreasDeliver}/>
    </div>
  )
}

export default Home