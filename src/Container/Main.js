import React ,{useEffect} from 'react';
import Nav from '../Components/nav';
import Contact from '../Components/contact';
import Home from '../Components/home';
import Skills from '../Components/skills';
import Footer from '../Components/footer';
import Services from '../Components/services';
import Portfolio from '../Components/portfolio';
import '../index.css'



function Main() {
    return (
      <div className="main-container">
          <Nav />
          {/* <Home /> 
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer /> */}
      </div>
    );
  }
  
  export default Main;
  