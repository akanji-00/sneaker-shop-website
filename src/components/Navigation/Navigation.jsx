// import React from "react";
import { useRef, useState } from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../../assets/images/icon-menu.svg";
import Logo from "../../assets/images/logo.svg";
import Close from "../../assets/images/icon-close.svg";
// import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";

function Navigation() {
  const [open, setOpen] = useState(false);

  function isOpen() {
    if (open) {
      setOpen(false);
      console.log(open);
    } else setOpen(true);
    // console.log("Menu closed");
  }

  return (
    <>
      {/* <div className={styles.overlay}></div> */}

      <header className={styles.header}>
        <div className="container">
          <div className="header__container">
            <div className={styles.header__content}>
              <button className={styles.menuBtn}>
                <img
                  onClick={isOpen}
                  src={!open ? Hamburger : Close}
                  alt="Hamburger menu"
                />
              </button>

              <div className={styles.logo}>
                <img src={Logo} alt="Brand logo" />
              </div>

              <nav className={styles.nav__menu}>
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
              </nav>
            </div>

            <NavIcons />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
