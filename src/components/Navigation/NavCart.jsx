import Cart from "../../assets/images/icon-cart.svg";
export default function NavCart() {
  return (
    <button className="nav__cart" aria-label="Cart">
      <img src={Cart} alt="Cart" />
      <span className="cart-counter">0</span>
    </button>
  );
}
