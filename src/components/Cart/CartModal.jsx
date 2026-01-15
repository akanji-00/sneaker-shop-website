import "./CartModal.css";
import Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import Delete from "../../assets/images/icon-delete.svg";

const PRICE = 125;

export default function CartModal({ cartQty, onCheckout, onDelete }) {
  return (
    <div className="cart__modal" role="dialog" aria-modal="true">
      <div className="cart__header">
        <h3>Cart</h3>
        <hr />
      </div>

      {cartQty === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart__item">
            <img
              src={Thumbnail}
              className="cart__thumbnail"
              alt="Sneaker thumbnail"
            />

            <div className="cart__text-content">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                ${PRICE}.00 x {cartQty} <strong>${PRICE * cartQty}.00</strong>
              </p>
            </div>

            <button onClick={onDelete} aria-label="Remove item">
              <img src={Delete} alt="Delete button" />
            </button>
          </div>

          <button className="checkout__btn" onClick={onCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
