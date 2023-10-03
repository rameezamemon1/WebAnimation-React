import React from "react";
import react from "./../images/react.png";
import ecommerce from "./../images/ecommerce.jpg";
import MERN from "./../images/mern.png";
import "../index.css";

const arr = [
  {
    image: react,
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'Material-UI', 'Chakra-UI', 'Firebase', 'Figma to React']

  }, {
    image: MERN,
    title: 'MERN Stack Development',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Rest APIs', 'Stripe', 'Paypal']

  }, , {
    image: ecommerce,
    title: 'Ecommerce Development',
    skills: ['React.js', 'Javascript', 'Stripe', 'React-Admin', 'Strapi', 'Chart.js']
  }, {
    image: react,
    title: 'E-commerce Product Customizers',
    skills: ['Fabric.js', 'Html Canvas', 'Three.js', 'React.js', 'Javascript', 'Stripe']
  }
]

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
        {arr?.map((res, i) => {
          return <div key={i} className="services">
            <img src={res.image} alt="" />
            <p>{res?.title}</p>
            <div className="tags">{res?.skills?.map((skill) => { return <span>{skill}</span> })}</div>
          </div>
        })}
      </div>
    </section>
  );
};

export default Services;
