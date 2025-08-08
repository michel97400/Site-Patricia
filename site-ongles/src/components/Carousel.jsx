import React, { useState } from "react";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className="gallery-carousel">
      <button className="btn prev" onClick={prevSlide} aria-label="Image précédente">
        &#10094;
      </button>

      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ display: index === current ? "block" : "none" }}
        >
          <span className="caption">{slide.caption}</span>
          <img src={slide.image} alt={slide.caption} />
        </div>
      ))}

      <button className="btn next" onClick={nextSlide} aria-label="Image suivante">
        &#10095;
      </button>
    </section>
  );
}

export default Carousel;
