import Cart from "../../assets/images/icon-cart.svg";
export default function NavCart({ cartQty, onClick }) {
  return (
    <button onClick={onClick} className="nav__cart" aria-label="Cart">
      <img src={Cart} alt="Cart" />
      {cartQty > 0 && <span className="cart-counter">{cartQty}</span>}
    </button>
  );
}
