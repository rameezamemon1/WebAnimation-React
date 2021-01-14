import React from "react";
import "../index.css";
import m_15 from "./../images/m_15.svg";
import m_24 from "./../images/m_24.svg";
import react_redux from "./../images/react-redux.png";
import mern_stack from "./../images/mern_stack.jpg";

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
         
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={react_redux} alt="" />
            <p>ReactJs FrontEnd Development</p>
          </li>
        </div>  <div className="services">
          <li>
            <img src={mern_stack} alt="" />
            <p>MERN STACK Development</p>
          </li>
        </div>
      </div>
      
    </section>
  );
};

export default Services;
