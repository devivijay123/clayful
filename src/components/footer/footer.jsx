import "./footer.scss";
import logo from "../../assets/logo.jpeg"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <img src={logo} alt="Creative Space" />
        </div>

        {/* Information */}
        <div className="footer__col">
          <h4>Information</h4>
          <ul>
            <li>About us</li>
            <li>International Shipping</li>
            <li>Jobs</li>
            <li>Partnerships</li>
            <li>Terms of Trade</li>
            <li>Privacy Policy</li>
            <li>Smiley</li>
          </ul>
        </div>

        {/* Follow */}
        <div className="footer__col">
          <h4>Follow Us</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h3>Newsletter</h3>
          <p>
            We regularly send out newsletters with invitations to special
            events, discounts, inspiration and other benefits.
          </p>

          <input type="email" placeholder="Din Email" />
          <button>TILMELD</button>
        </div>
      </div>

   
    </footer>
  );
}
