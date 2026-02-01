import { Link } from "react-router-dom";
import "./locationPage.scss";

import osterbro from "../../assets/osterbro.webp";
import frederiksberg from "../../assets/frederiksberg.webp";
import lyngby from "../../assets/lyngby.webp";

export default function LocationsPage() {
  const locations = [
    {
      slug: "osterbro",
      image: osterbro,
      address: "Nordre Frihavnsgaade 68, 2100 Copenhagen Ø",
      email: "osterbro@creative-space.dk",
      phone: "33 79 00 71",
    },
    {
      slug: "frederiksberg",
      image: frederiksberg,
      address: "Old Kongevej 154, 1850 Frederiksberg",
      email: "frederiksberg@creative-space.dk",
      phone: "33 79 00 72",
    },
    {
      slug: "lyngby",
      image: lyngby,
      address: "Lyngby Hovedgade 15F, 2800 Kgs. Lyngby",
      email: "lyngby@creative-space.dk",
      phone: "33 79 00 74",
    },
  ];

  return (
    <section className="locations">
      <div className="locations__grid">
        {locations.map((loc) => (
              <Link
            key={loc.slug}
            to={`/locations/${loc.slug}`}
            className="locationCard"
          >
          {/* <div className="locationCard" key={i}> */}
            <div className="locationCard__image">
              <img src={loc.image} alt={loc.slug} />
            </div>

            <h3>{loc.slug}</h3>
            <p className="address">{loc.address}</p>

            {/* <a href={`mailto:${loc.email}`} className="email">
              {loc.email}
            </a> */}
            <p>mailto{loc.email}</p>

            <p className="phone">Phone: {loc.phone}</p>

            <button className="bookBtn">BOOK A TABLE</button>
          {/* </div> */}
          </Link>
        ))}
      </div>
    </section>
  );
}
