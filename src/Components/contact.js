import React from "react";
import "../index.css";


const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="cards-container">
        <h1 className="heading">Get In Touch</h1>
        <p className="contact-text">Feel free to reach out to me anytime. I'm here to assist you, whether you have a question or simply want to say hello. I'll make sure to respond to you as promptly as possible!</p>

        <button className="button">
          Say Hello
        </button>
      </div>
      {/* <div className="cards-container">
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>rameeza.memon1@gmail.com</span>
          </div>
        </div>

        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social Media</span>
          </div>
          <div className="contact-links">
            <a
              rel="noopener noreferrer"
              target="_blank"
              
              href="https://github.com/rameezamemon1"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/rameeza.memon1/"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/rameeza-memon/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/rameeza.memon1/?hl=en"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
        </div>

      </div> */}
    </section>
  );
};

export default Contact;
