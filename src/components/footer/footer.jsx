// import "./footer.scss";
// import logo from "../../assets/clayful_logo.jpeg"; 

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer__container">
//         {/* Logo */}
//         <div className="footer__logo">
//           <img src={logo} alt="Creative Space" />
//         </div>

//         {/* Information */}
//         <div className="footer__col">
//           <h4>Information</h4>
//           <ul>
//             <li>About us</li>
//             <li>International Shipping</li>
//             <li>Jobs</li>
//             <li>Partnerships</li>
//             <li>Terms of Trade</li>
//             <li>Privacy Policy</li>
//             <li>Smiley</li>
//           </ul>
//         </div>

//         {/* Follow */}
//         <div className="footer__col">
//           <h4>Follow Us</h4>
//           <ul>
//             <li>Instagram</li>
//             <li>Facebook</li>
//             <li>TikTok</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="footer__newsletter">
//           <h3>Newsletter</h3>
//           <p>
//             We regularly send out newsletters with invitations to special
//             events, discounts, inspiration and other benefits.
//           </p>

//           <input type="email" placeholder="Din Email" />
//           <button>TILMELD</button>
//         </div>
//       </div>

   
//     </footer>
//   );
// }

import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/clay_logo.jpeg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LEFT IMAGE */}
        <div className="footer__image">
          <img src={logo} alt="Farm Chicken" />
        </div>

        {/* DETAILS */}
        <div className="footer__section">
          <h3>DETAILS</h3>
          <p>The Colony</p>
          <p>Texas 75063</p>
          <p>+1 214 546 0000</p>
          <p className="email">hello@clayfulcafe.us</p>
        </div>

        {/* STORE POLICY */}
        <div className="footer__section">
          <h3>STORE POLICY</h3>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
        </div>

        {/* LEGAL */}
        <div className="footer__section">
          <h3>JOIN US</h3>
          <a href="#">Jobs</a>
          <a href="#">Book Your Spot</a>

          <div className="social">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="footer__bottom">
        <p>© 2026 Clayful Café. All rights reserved.
Crafted with clay, coffee & community. <span>
www.clayfulcafe.us</span></p>
      </div>
    </footer>
  );
};

export default Footer;
