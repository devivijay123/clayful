
import { useState, useEffect } from "react";
import "./navbar.scss";
import img1 from "../../assets/Pensler.webp";
import img2 from "../../assets/IMG_5066.webp";
import img3 from "../../assets/IMG_6103.webp";
import img4 from "../../assets/IMG_7467.webp";
import img5 from "../../assets/Creative_Space_Crayons.webp";
import img6 from "../../assets/IMG_6142.webp";
import img7 from "../../assets/IMG_6022_2.webp";
import img8 from "../../assets/Gavekort_Full.webp";
import logo from "../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";



export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  /* 🔥 detect hero section */
  useEffect(() => {
    const hero = document.querySelector(".heroSlider");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const menus = {
    visit: {
      leftLinks: ["The concept", "Locations", "Book a Table", "Assortment", "FAQ"],
      cards: [
        { title: "", img: img1 },
        { title: "", img: img2 },
      ],
    },
    groups: {
      leftLinks: [
        "Large companies",
        "Team building",
        "Bachelorette party",
        "Children's birthday",
        "Events outside the house",
      ],
      cards: [
        { title: "", img: img3 },
        { title: "", img: img4 },
      ],
    },
    community: {
      leftLinks: ["Event calendar", "Painted by you"],
      cards: [
        { title: "", img: img7 },
        { title: "", img: img6 },
      ],
    },
    shop: {
      leftLinks: [],
      cards: [
        { title: "Gift card", img: img8 },
        { title: "Merchandise", img: img5 },
      ],
    },
  };

  return (
 <header
  className={`navbar 
    ${isHeroVisible ? "navbar--transparent" : "navbar--solid"}
    ${activeMenu ? "navbar--open" : ""}
  `}
>
  {/* 🔑 HOVER AREA */}
  <div
    className="navbar__hoverArea"
    onMouseLeave={() => setActiveMenu(null)}
  >
    <div className="navbar__inner">
      {/* <div className="navbar__logo">
        <span className="logoCircle">✦</span>
      </div> */}
       <div className="navbar_logo">
              <Link to="/">
              <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>

      <nav className="navbar__menu">
        <button onMouseEnter={() => setActiveMenu("visit")}>VISIT US</button>
        <button onMouseEnter={() => setActiveMenu("groups")}>GROUPS</button>
        <button onMouseEnter={() => setActiveMenu("community")}>
          COMMUNITY & EVENTS
        </button>
        <button onMouseEnter={() => setActiveMenu("shop")}>SHOP</button>
      </nav>

      <div className="navbar__right">
        <button
  className="navbar__btn"
  onClick={() =>
    window.open(
      "https://calendar.google.com/calendar/u/0/r/eventedit",
      "_blank"
    )
  }
>
  BOOK A TABLE
</button>

        <a href="#" className="navLink">ACCOUNT</a>
        <a href="#" className="navLink">CART</a>
      </div>
    </div>

    <div className="navbar__line"></div>

    {/* ✅ MEGA MENU */}
    <div className={`megaMenu ${activeMenu ? "megaMenu--show" : ""}`}>
      {activeMenu && (
        <div className="megaMenu__inner">
          {/* <div className="menu__left">
            {menus[activeMenu].leftLinks.map((item, idx) => (
              <a key={idx} href="#">{item}</a>
            ))}
          </div> */}
          <div className="menu__left">
  {menus[activeMenu].leftLinks.map((item, idx) => {
    if (item === "The concept") {
      return (
        <Link
          key={idx}
          to="/concept"
          onClick={() => setActiveMenu(null)}
        >
          {item}
        </Link>
      );
    }

 

    return (
      <span key={idx}>{item}</span>
    );
  })}
</div>


          <div className="megaMenu__right">
            {menus[activeMenu].cards.map((card, idx) => (
              <div className="megaCard" key={idx}>
                <img src={card.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</header>

  );
}

