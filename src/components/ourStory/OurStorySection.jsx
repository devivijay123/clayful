import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./OurStorySection.scss";
import logo from "../../assets/clayful_logo.jpeg";
import story from "../../assets/story.jpeg"

const OurStorySection = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 992);
  const sectionRef = useRef(null);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
  
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Move left panel from 0 to -100%
  const leftX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  // Mobile vertical movement
  const mobileSlideLeft = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["100%", "-50%"]
  );
  
  return (
    <section className="story-section" ref={sectionRef}>
      <div className="story-container">

        {/* LEFT PANEL */}
        <motion.div
          className="story-left"
          style={{ x: isMobile ? mobileSlideLeft : leftX }}
        >
          
            {/* <h2>OUR STORY</h2>
            <h4>3rd Generation Family-Owned Business</h4>
            <p>
              This is the space to introduce the story of your business.
              Tell visitors how it got started and what your site has to offer.
            </p> */}
            <img src={story} alt="Farm Story" />
          
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="story-right">
          <img src={logo} alt="Farm Story" />
        </div>

      </div>
    </section>
  );
};

export default OurStorySection;
