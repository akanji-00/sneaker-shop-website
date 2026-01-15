import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import CartModal from "./components/Cart/CartModal";

export default function App() {
  const [cartQty, setCartQty] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  function addToCart(qty) {
    if (qty === 0) return;
    setCartQty(qty);
  }

  function clearCart() {
    setCartQty(0);
    setIsCartOpen(false);
    setShowCongrats(true);

    setTimeout(() => {
      setShowCongrats(false);
    }, 3000);
  }

  const cartModal = (
    <CartModal
      cartQty={cartQty}
      onDelete={() => setCartQty(0)}
      onCheckout={clearCart}
    />
  );

  return (
    <>
      <Navigation
        cartQty={cartQty}
        isCartOpen={isCartOpen}
        onCartToggle={() => setIsCartOpen((p) => !p)}
        cartModal={cartModal}
      />

      <Hero onAddToCart={addToCart} />

      {showCongrats && (
        <div className="congrats-modal">🎉 Purchase successful!</div>
      )}
    </>
  );
}
