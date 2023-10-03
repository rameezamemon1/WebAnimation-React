import React, { useEffect } from 'react';

import Aos from "aos";
import Nav from '../Components/nav';
import Home from '../Components/home';
import Skills from '../Components/skills';
import Contact from '../Components/contact';
import Services from '../Components/services';

import '../index.css'
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);
  
  return (
    <div className="main-container">
   
      <Nav />
      <Home />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;
