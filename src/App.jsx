import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

export default function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <Navigation
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        // isCartOpen={isCartOpen}
        // setIsCartOpen={setIsCartOpen}
        onCheckout={() => {
          setCartQuantity(0);
          setShowSuccess(true);
        }}
      />
      <Hero cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
    </>
  );
}
