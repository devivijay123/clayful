import { useEffect, useRef, useState } from "react";
import "./stickyImageCards.scss";

import img1 from "../../assets/IMG_6103.webp";
import img2 from "../../assets/IMG_6142.webp";
import img3 from "../../assets/IMG_6022_2.webp";



const items = [
  {
    step: "1. CHOOSE CERAMICS, PAINT AND TOOLS",
    title:
      "Explore our universe and choose your ceramics, paints, brushes and materials. We will guide you and give you tips and tricks.",
    image: img1,
  },
  {
    step: "2. GET COMFORTABLE AND DECORATE YOUR POTTERY",
    title: "Sit back, order from our café and immerse yourself in your work of art.",
    image: img2,
  },
  {
    step: "3. PICK UP YOUR CERAMICS",
    title: "Come back and pick up your finished ceramics after glazing & firing.",
    image: img3,
  },
];

export default function StickyImageCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // ✅ when 50% of text block visible -> change image
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stickyCards">
      <div className="stickyCards__wrap">
        {/* LEFT TEXT */}
        <div className="stickyCards__left">
          {items.map((item, index) => (
            <div
              key={index}
              className={`stickyCardText ${activeIndex === index ? "active" : ""}`}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
            >
              <p className="step">{item.step}</p>
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE (sticky) */}
        <div className="stickyCards__right">
          <div className="stickyCards__imageBox">
            <img src={items[activeIndex].image} alt="sticky card" />
          </div>
        </div>
      </div>
    </section>
  );
}
