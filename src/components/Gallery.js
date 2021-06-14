import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData, SliderData2, SliderData3 } from "./SliderData";

const Gallery = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
        marginTop: 50,
      }}
    >
      <ImageSlider slides={SliderData} />
      <ImageSlider slides={SliderData2} />
      <ImageSlider slides={SliderData3} />
    </div>
  );
};

export default Gallery;
