// import React from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../../assets/images/icon-menu.svg";
import Logo from "../../assets/images/logo.svg";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";

function Navigation() {
  return (
    <>
      <div className={styles.overlay}></div>

      <div className="container">
        <header className={styles.nav}>
          <div className={styles.nav__left}>
            <button>
              <img
                className={styles.hamburger}
                src={Hamburger}
                alt="Hamburger menu"
              />
            </button>

            <div className={styles.logo}>
              <img src={Logo} alt="Brand logo" />
            </div>

            <nav className={styles.menu}>
              <NavMenu />
            </nav>
          </div>

          <div>
            <NavIcons />
          </div>
        </header>
      </div>
    </>
  );
}

export default Navigation;
