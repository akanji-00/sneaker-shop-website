import styles from "./Navigation.module.css";

export default function NavMenu() {
  return (
    <ul className={styles.nav__list}>
      <li>
        <a href="/">Collections</a>
      </li>
      <li>
        <a href="/">Men</a>
      </li>
      <li>
        <a href="/">Women</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
}
