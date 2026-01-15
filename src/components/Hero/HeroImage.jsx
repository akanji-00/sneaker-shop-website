import dataImages from "./images";
import ShoePreview from "../../assets/images/image-product-1.jpg";
import PreviousBtn from "../../assets/images/icon-previous.svg";
import NextBtn from "../../assets/images/icon-next.svg";

import Thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";

export default function HeroImage() {
  const images = dataImages.map((image) => {
    return image.img;
  });
  return (
    <div className="img-container">
      <img src={images.img[0].src} alt={images[0].alt} />
      <div className="toggleImages">
        <button className="prevBtn" aria-label="Previous image">
          <img src={PreviousBtn} alt="Previous" />
        </button>
        <button className="nextBtn" aria-label="Next image">
          <img src={NextBtn} alt="Next" />
        </button>
      </div>

      <div className="image-thumbnail-showcase">
        <img src={Thumbnail1} alt="Sneaker thumbnail 1" />
        <img src={Thumbnail2} alt="Sneaker thumbnail 2" />
        <img src={Thumbnail3} alt="Sneaker thumbnail 3" />
        <img src={Thumbnail4} alt="Sneaker thumbnail 4" />
      </div>
    </div>
  );
}
