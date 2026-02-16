import { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/clay_logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar__inner">

        {/* LOGO */}
        <div className="navbar_logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="navbar__menu desktop">
          <button><Link to="/concept">CONCEPT</Link></button>
          <button to="/">VISIT US</button>
          <button>RESERVATIONS</button>
          <button>CAFE</button>
        </nav>

        <div className="navbar__right desktop">
          <button className="navbar__btn" onClick={() => window.open( "https://calendar.google.com/calendar/u/0/r/eventedit", "_blank" ) }>BOOK A TABLE</button>
          <a href="#">GIFT CARDS</a>
          <a href="#">FAQS</a>
          <a href="#">JOBS</a>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${isMobileOpen ? "active" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobileMenu ${isMobileOpen ? "show" : ""}`}>
        <button><Link to="/concept" onClick={() => setIsMobileOpen(false)}>CONCEPT</Link></button>
        <button>VISIT US</button>
        <button>RESERVATIONS</button>
        <button>CAFE</button>
        <button className="navbar__btn" onClick={() => window.open( "https://calendar.google.com/calendar/u/0/r/eventedit", "_blank" ) }>BOOK A TABLE</button>
         <button>GIFT CARDS</button>
        <button>FAQS</button>
        <button>JOBS</button>
      </div>

    </header>
  );
}
