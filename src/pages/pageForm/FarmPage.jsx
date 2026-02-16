import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring  } from "framer-motion";

import "./FarmPage.scss";
import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3 from "../../assets/p3.webp";
import p4 from "../../assets/p4.webp";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";
import pot from "../../assets/IMG_6142.webp"
const FarmPage = () => {
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
 

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start 80%", "start 20%"],
  // });

  // Only animate during first scroll portion
  // const leftX = useTransform(scrollYProgress, [0, 1], [0, -450]);
  // const rightX = useTransform(scrollYProgress, [0, 1], [0, 450]);
  
// // Desktop movement
const leftX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]);
const rightX = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

// Mobile vertical movement
const mobileSlideLeft = useTransform(
  scrollYProgress,
  [0, 0.2],
  ["100%", "0%"]
);

const mobileSlideRight = useTransform(
  scrollYProgress,
  [0.2, 0.8],
  ["100%", "0%"]
);



  return (
    <section className="farm-section" ref={sectionRef}>
      <div className="sticky-container">

        {/* Left Card */}
        <motion.div
          className="card left"
           style={{ x: isMobile ? mobileSlideLeft : leftX }}
        >
          {/* <h2>ABOUT THE FARM</h2> */}
                    <img
            src={p6}
            alt="Eggs"
          />

          <div className="overlay-card left-card">
            <h2>Our Concept</h2>
            <a href="/concept">How it works</a>
          </div>

        </motion.div>

        {/* Middle Card */}
        <div className="center">
          {/* <h1>FRESH FARM PRODUCTS</h1> */}
          <div className="content">
            <h1>Time To Create your own Ceramic</h1>
            <p>
Reserve a moment in the studio and make something distinctly yours.
            </p>

            <button className="shop-btn">Reservations</button>
          </div>
        </div>

        {/* Right Card */}
        <motion.div
          className="card right"
            style={{ x: isMobile ? mobileSlideRight : rightX }}
        >
        
               <img
            src={pot}
            alt="Farm Girl"
          />

          <div className="overlay-card right-card">
            <h2>VISIT OUR CAFE</h2>
            <a href="#">Menu</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FarmPage;
