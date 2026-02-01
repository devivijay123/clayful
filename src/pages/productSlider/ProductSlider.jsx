import { useEffect, useRef, useState } from "react";
import "./ProductSlider.scss";
import { Link } from "react-router-dom";

import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.webp";
import p3 from "../../assets/p3.webp";
import p4 from "../../assets/p4.webp";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";


export default function ProductSlider() {
    const products = [
  {
    id: "all-around-bowls",
    title: "All-around bowls",
    price: "279.00 – 439.00 kr",
    image: p1,
    sizes: [
      "15cm: 279.00 kr",
      "19cm: 329.00 kr",
      "24cm: 439.00 kr",
    ],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },
  {
    id: "small-miso-bowl",
    title: "Small Miso bowl",
    price: "229.00 kr",
    image: p2,
    sizes: ["4.7 × 11 cm"],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },
   {
    id: "all-around-bowls",
    title: "All-around bowls",
    price: "279.00 – 439.00 kr",
    image: p3,
    sizes: [
      "15cm: 279.00 kr",
      "19cm: 329.00 kr",
      "24cm: 439.00 kr",
    ],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },
  {
    id: "small-miso-bowl",
    title: "Small Miso bowl",
    price: "229.00 kr",
    image: p4,
    sizes: ["4.7 × 11 cm"],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },
   {
    id: "all-around-bowls",
    title: "All-around bowls",
    price: "279.00 – 439.00 kr",
    image: p5,
    sizes: [
      "15cm: 279.00 kr",
      "19cm: 329.00 kr",
      "24cm: 439.00 kr",
    ],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },

  {
    id: "yoko-cups",
    title: "Yoko cups",
    price: "249.00 – 269.00 kr",
    image: p6,
    sizes: [
      "Small 7.5 × 9 cm: 249.00 kr",
      "Large 9.5 × 11 cm: 269.00 kr",
    ],
    description:
      "Prices are all inclusive including materials, painting, glazing and firing.",
  },
];
    const sliderRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    // const products = [
    //     { id: 1, name: "Miso bowl", price: "259,00 kr", img: p1 },
    //     { id: 2, name: "Egg tray", price: "279,00 kr", img: p2 },
    //     { id: 3, name: "Lulu bowls", price: "229,00 – 249,00 kr", img: p3 },
    //     { id: 4, name: "Yoko cups", price: "249,00 – 269,00 kr", img: p4 },
    //     { id: 5, name: "Small bowl", price: "229,00 kr", img: p5 },
    //     { id: 6, name: "Small bowl", price: "229,00 kr", img: p6 },

    // ];

    const updateArrows = () => {
        if (!sliderRef.current) return;

        const el = sliderRef.current;
        const scrollLeft = el.scrollLeft;
        const maxScroll = el.scrollWidth - el.clientWidth;

        setShowLeft(scrollLeft > 10);
        setShowRight(scrollLeft < maxScroll - 10);
    };

    useEffect(() => {
        updateArrows();
        const el = sliderRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);

        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, []);

    const handleNext = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({ left: 420, behavior: "smooth" });
    };

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({ left: -420, behavior: "smooth" });
    };

    return (
        <section className="productSection">
            <h2 className="productSection__title">New Italian designs</h2>

            <div className="productSection__wrap">
                <div className="productSlider" ref={sliderRef}>

                    {products.map((p) => (
                        <Link to={`/product/${p.id}`} key={p.id} className="productCard" state={{ product: p }}  >
                            <div className="productCard__imgWrap">
                                <img src={p.image} alt={p.title} />
                            </div>

                            <div className="productCard__info">
                                <h4>{p.title}</h4>
                                <p>{p.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ✅ Left Arrow */}
                {showLeft && (
                    <button className="sliderArrow sliderArrow--left" onClick={handlePrev}>
                        ←
                    </button>
                )}

                {/* ✅ Right Arrow */}
                {showRight && (
                    <button
                        className="sliderArrow sliderArrow--right"
                        onClick={handleNext}
                    >
                        →
                    </button>
                )}
            </div>
        </section>
    );
}
