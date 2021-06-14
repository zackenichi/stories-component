import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const playSlide = () => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
  };

  const resetSlide = () => {
    setCurrent(0);
  };

  if (!Array.isArray(slides) || length < 0) {
    return null;
  }

  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="image"
                onMouseOver={playSlide}
                onMouseLeave={resetSlide}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
