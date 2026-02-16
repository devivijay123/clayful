import React from "react";
import "./aboutSection.scss";
import logo from "../../assets/clay_logo.jpeg"; 

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={logo} alt="Chick Logo" className="about-logo" />

        <h2 className="about-title">ABOUT CLAYFULL CAFE</h2>

        <div className="about-text">
          <p>
            This is a space to share more about your business: who's behind it,
            what it does and what this site has to offer. It’s an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share your company’s
            history or highlight a particular feature that sets it apart from
            competitors.
          </p>

          <p>
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company’s values and personality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
