import "./conceptPage.scss";

import imgLeft from "../../assets/lyngby.webp";
import imgRight from "../../assets/odense.webp";

export default function ConceptPage() {
  return (
    <section className="concept">
      <div className="concept__container">
        {/* LEFT IMAGES */}
        <div className="concept__images">
          <div className="concept__image concept__image--left">
            <img src={imgLeft} alt="Paint shelves" />
          </div>

          <div className="concept__image concept__image--right">
            <img src={imgRight} alt="Kids painting pottery" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="concept__content">
          <span className="concept__eyebrow">THE CONCEPT</span>

          <h1 className="concept__title">
            Paint Your Own <br /> Pottery
          </h1>

          <p className="concept__text">
            At Creative Space, we have a vision that creativity is for everyone.
            We want to create the most fun, cozy and inspiring space to unfold
            in, regardless of whether you are a creative soul or not.
          </p>

          <p className="concept__text">
            We believe that creativity comes all by itself, if it is just given
            a little space and the world is allowed to wait.
          </p>
        </div>
      </div>
    </section>
  );
}
