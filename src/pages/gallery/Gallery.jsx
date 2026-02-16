import React, { useState } from "react";
import "./gallery.scss";

import img1 from "../../assets/p1.webp";
import img2 from "../../assets/p2.webp";
import img3 from "../../assets/p3.webp";
import img4 from "../../assets/p4.webp";
import img5 from "../../assets/p5.webp";
import img6 from "../../assets/p1.webp";
import img7 from "../../assets/p1.webp";
import img8 from "../../assets/p1.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery-section">

      <h2 className="gallery-title">OUR VIBE IN PHOTOS</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img src={img} alt={`gallery-${index}`} />
            <div className="overlay">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {currentIndex !== null && (
        <div className="modal">

          <span className="close" onClick={closeModal}>
            ×
          </span>

          <button className="prev" onClick={prevImage}>
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt="fullscreen"
            className="modal-image"
          />

          <button className="next" onClick={nextImage}>
            ›
          </button>

        </div>
      )}
    </section>
  );
};

export default Gallery;
