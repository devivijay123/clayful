import { useEffect, useState } from "react";
import "../heroSection/heroSection.scss";



const slides = [
  {
    type: "video",
    src: "https://cdn.shopify.com/videos/c/o/v/b973ffffc5a14fde905148d497cc81c9.mp4",
    title: "Paint Your Own Pottery",
    subtitle: "Paint your very own ceramics",
    buttonText: "VISIT US",
  },
  {
    type: "image",
    src: "//creative-space.dk/cdn/shop/files/IMG_1524_2.jpg?crop=center&height=3780&v=1763394600&width=3024// ",
    title: "Pick up day",
    subtitle:
      "We're treating all the little artists and their grandparents to a cup of hot cocoa on the house.\n\nCome by and swing your brushes together!",
    buttonText: "BOOK A TABLE",
  },
  {
    type: "image",
    src: "//creative-space.dk/cdn/shop/files/IMG_5608.jpg?crop=center&height=1290&v=1765204820&width=2279",
    title: "Masterclasses",
    subtitle:
      "Join our Masterclasses, where you will receive 1:1 instruction in the most popular painting techniques.",
    buttonText: "READ MORE",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  // auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="heroSlider">
      <div className="heroSection">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`heroSlide ${active === index ? "active" : ""}`}
        >
          {/* background media */}
          {slide.type === "video" ? (
            <video className="heroSlide__media" autoPlay muted loop playsInline>
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              className="heroSlide__media"
              src={slide.src}
              alt={slide.title}
            />
          )}

          {/* overlay */}
          <div className="heroSlide__overlay"></div>

          {/* content */}
          <div className="heroSlide__content">
            <h1>{slide.title}</h1>

            <p>
              {slide.subtitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <button className="heroSlide__btn">{slide.buttonText}</button>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="heroSlider__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
