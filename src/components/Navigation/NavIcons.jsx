import styles from "./Navigation.module.css";

import Cart from "../../assets/images/icon-cart.svg";
import Profile from "../../assets/images/image-avatar.png";

export default function NavIcons() {
  return (
    <div className={styles.icons}>
      <button className={styles.cart__btn} aria-label="Cart">
        <img className={styles.cart} src={Cart} alt="Cart" />
        <span className={styles.badge}>2</span>
      </button>

      <button aria-label="Profile">
        <img className={styles.profile} src={Profile} alt="Profile" />
      </button>
    </div>
  );
}
