import { useState } from "react";
import "./hero.css";
import HeroImage from "./HeroImage.jsx";
import HeroContent from "./HeroContent.jsx";
import CartCounter from "./CartCounter.jsx";
import AddToCart from "./AddToCart.jsx";

export default function Hero({ onAddToCart }) {
  const [qty, setQty] = useState(0);

  function handleAddToCart() {
    if (qty === 0) return;
    onAddToCart(qty);
    setQty(0);
  }

  return (
    <>
      <main className="hero">
        <HeroImage />
        <div className="content-container">
          <HeroContent />

          <div className="content-button-container">
            <CartCounter qty={qty} setQty={setQty} />
            <AddToCart onClick={handleAddToCart} qty={qty} />
          </div>
        </div>
      </main>
    </>
  );
}

Hero;
