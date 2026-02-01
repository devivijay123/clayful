import { useLocation, useNavigate } from "react-router-dom";
import "./productDetails.scss";

export default function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  if (!product) {
    return <p style={{ padding: 40 }}>Product not found</p>;
  }

  return (
    <section className="productDetails">
      <button className="backBtn" onClick={() => navigate(-1)}>
        ← Tilbage
      </button>

      <div className="productDetails__content">
        <div className="productDetails__image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="productDetails__info">
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>

          <ul>
            {product.sizes.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <p>
            Prices are all inclusive including materials, painting, glazing and
            firing.
          </p>

          <div className="icons">
            <span>🧼 Dishwasher safe</span>
            <span>🍽 Food approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
