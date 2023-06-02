import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from './Components/Header/Header2';
import Footer from './Components/Footer/Footer';
import Home from "./Components/Home/Home";
import About from './Components/AboutUs/AboutUs';
import ContactUs from "./Components/ContactUs/ContactUs";
import "./App.css";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="App">
    <Header />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About-Us' element={<About/>}/>
        <Route path='/Contact-Us' element={<ContactUs/>}/>
    </Routes>
    <Footer />
  </div>;
}

export default App;
