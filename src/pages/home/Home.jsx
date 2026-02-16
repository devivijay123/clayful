import React, {useRef, useEffect} from "react";
// import "./home.scss";
import HeroSection from "../heroSection/heroSection";

import StickyImageCards from "../stickyImageCards/StickyImageCards";
import ProductSlider from "../productSlider/ProductSlider";
import LocationsPage from "../LocationPage/LocationPage";
import FarmPage from "../pageForm/FarmPage";
import Testimonials from "../testimonial/Testimonial";
import Gallery from "../gallery/Gallery";



const Home = () => {
  
  return (
    <>

   
       <HeroSection /> 
         {/* <StickyImageCards/> */}
         <FarmPage/>
       {/* <ProductSlider />
     <LocationsPage/> */}
     <Testimonials/>
    <Gallery/>
    
    </>
  );
};

export default Home;
