import "./hero.css";
import ShoePreview from "../../assets/images/image-product-1-thumbnail.jpg";

export default function Hero() {
  return (
    <>
      <main className="hero">
        <div className="img-container">
          <img src={ShoePreview} alt="Landing shoe" />
        </div>
        <p>This is the hero content</p>
      </main>
    </>
  );
}

Hero;
