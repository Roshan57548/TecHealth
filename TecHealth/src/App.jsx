import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from './Components/Header/Header2';
import Footer from './Components/Footer/Footer';
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="App">
    <Header />
    <Home />
    <Footer />
  </div>;
}

export default App;
