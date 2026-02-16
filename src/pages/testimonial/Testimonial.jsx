import React from "react";
import "./testimonial.scss";
import logo from "../../assets/clay_logo.jpeg"; // adjust path if needed

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <img src={logo} alt="logo" className="icon" />

        <h2 className="testimonial_title">Stay Tuned.</h2>
        <h3>Coming Soon</h3>

        <div className="reviews">

        

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
