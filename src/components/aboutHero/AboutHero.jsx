import React from "react";
import "./aboutHero.scss";
import aboutHero from "../../assets/about_hero.jpeg"

const AboutHero = () => {
  return (
    <section className="about-hero">
          <img src={aboutHero} alt="Farm" />

    </section>
  );
};

export default AboutHero;
