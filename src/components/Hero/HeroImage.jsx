import { useState } from "react";

import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";

import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";

import PreviousBtn from "../../assets/images/icon-previous.svg";
import NextBtn from "../../assets/images/icon-next.svg";

const images = [
  { full: img1, thumb: thumbnail1, alt: "First image" },
  { full: img2, thumb: thumbnail2, alt: "Second image" },
  { full: img3, thumb: thumbnail3, alt: "Third image" },
  { full: img4, thumb: thumbnail4, alt: "Fourth image" },
];

export default function HeroImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(images[currentIndex]);

  function goNext() {
    setCurrentIndex((index) => (index + 1) % images.length);
  }

  function goPrev() {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function onSelect(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="img-container">
      <img src={images[currentIndex].full} alt={images[currentIndex].alt} />
      <div className="toggleImages">
        <button
          onClick={goPrev}
          className="prevBtn"
          aria-label="Previous image"
        >
          <img src={PreviousBtn} alt="Previous" />
        </button>
        <button onClick={goNext} className="nextBtn" aria-label="Next image">
          <img src={NextBtn} alt="Next" />
        </button>
      </div>

      {
        <div className="image-thumbnail-showcase">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => onSelect(index)}
            >
              <img src={image.thumb} alt="" />
            </button>
          ))}
        </div>
      }
    </div>
  );
}
