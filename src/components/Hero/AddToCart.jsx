// import { useState } from "react";
import CartIcon from "../../assets/images/icon-cart.svg";

export default function AddToCart({ onClick, qty }) {
  return (
    <button
      onClick={onClick}
      className="add-to-cart-btn btn"
      disabled={qty === 0}
    >
      <img src={CartIcon} alt="Cart" />
      Add to cart
    </button>
  );
}
