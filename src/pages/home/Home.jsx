import React, {useRef, useEffect} from "react";
// import "./home.scss";
import HeroSection from "../heroSection/heroSection";
import Navbar from "../../components/Navbar/Navbar";
import StickyImageCards from "../stickyImageCards/StickyImageCards";
import ProductSlider from "../productSlider/ProductSlider";
import LocationsPage from "../LocationPage/LocationPage";



const Home = () => {
  
  return (
    <>

   
       <HeroSection /> 
         <StickyImageCards/>
       <ProductSlider />
     <LocationsPage/>
  
    
    </>
  );
};

export default Home;
