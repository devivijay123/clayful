import { useParams, useNavigate } from "react-router-dom";
import "./locationDetails.scss";

import osterbroImg from "../../assets/osterbro.webp";
import frederiksbergImg from "../../assets/frederiksberg.webp";
import lyngbyImg from "../../assets/lyngby.webp";

const LOCATION_DATA = {
  osterbro: {
    title: "Østerbro",
    image: osterbroImg,
    description:
      "Østerbro became our second Creative Space location, and it has been a creative space for both locals and visitors since 2014.",
    hours: [
      "Monday – Sunday: 10:00 – 19:00",
      "Saturday: 10:00 – 21:00",
    ],
    address: "Nordre Frihavnsgade 68, 2100 Copenhagen Ø",
    phone: "33 79 00 71",
    email: "osterbro@creative-space.dk",
  },

  frederiksberg: {
    title: "Frederiksberg",
    image: frederiksbergImg,
    description:
      "Creative Space was born here on Gammel Kongevej. This is where our journey started.",
    hours: [
      "Monday – Sunday: 10:00 – 19:00",
      "Friday – Saturday: 10:00 – 21:00",
    ],
    address: "Old Kongevej 154, 1850 Frederiksberg",
    phone: "33 79 00 72",
    email: "frederiksberg@creative-space.dk",
  },

  lyngby: {
    title: "Lyngby",
    image: lyngbyImg,
    description:
      "Our Lyngby location has plenty of space for creative expression and outdoor seating.",
    hours: ["Monday – Sunday: 10:00 – 19:00"],
    address: "Lyngby Hovedgade 15F, 2800 Kgs. Lyngby",
    phone: "33 79 00 74",
    email: "lyngby@creative-space.dk",
  },
};

export default function LocationDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const location = LOCATION_DATA[slug];

  if (!location) return <p>Location not found</p>;

  return (
    <section className="locationDetails">
      <button className="backBtn" onClick={() => navigate(-1)}>
        ← Tilbage
      </button>

      <div className="locationDetails__content">
        <div className="locationDetails__image">
          <img src={location.image} alt={location.title} />
        </div>

        <div className="locationDetails__info">
          <h1>{location.title}</h1>
          <p>{location.description}</p>

          <h4>OPENING HOURS</h4>
          {location.hours.map((h, i) => (
            <p key={i}>{h}</p>
          ))}

          <h4>ADDRESS</h4>
          <p>{location.address}</p>
          <p>Phone: {location.phone}</p>
          <p>{location.email}</p>

          <button className="bookBtn">BOOK A TABLE</button>
        </div>
      </div>
    </section>
  );
}
