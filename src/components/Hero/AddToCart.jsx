// import { useState } from "react";
import CartIcon from "../../assets/images/icon-cart.svg";

export default function AddToCart({ CartQuantity }) {
  return (
    <div className="add-to-cart-button-container">
      <button className="add-to-cart-btn">
        <span className="cart-icon">
          <img src={CartIcon} alt="Cart" />
        </span>
        <span className="add-to-cart-text">Add to cart</span>
      </button>
    </div>
  );
}
