import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/ScrollTop";
import { Suspense, lazy } from "react";
import './globalStyles/App.scss';
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./pages/productDetails/ProductDetails";
import LocationDetails from "./pages/locationDetails/LocationDetails";
import Footer from "./components/footer/footer"
import ConceptPage from "./pages/conceptPage/ConceptPage"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Navbar/>
          {/* <Suspense fallback={<Fallback />}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/locations/:slug" element={<LocationDetails />} />
              <Route path="/concept" element={<ConceptPage />} />
            </Routes>
            <Footer/>
          {/* </Suspense> */}
        </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
