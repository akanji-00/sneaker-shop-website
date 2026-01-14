import Cart from "../../assets/images/icon-cart.svg";

export default function NavCart({ cartQuantity, onClick }) {
  return (
    <button onClick={onClick} className="nav__cart" aria-label="Cart">
      <img src={Cart} alt="Cart" />
      {cartQuantity > 0 && <span className="cart-counter">{cartQuantity}</span>}
    </button>
  );
}
