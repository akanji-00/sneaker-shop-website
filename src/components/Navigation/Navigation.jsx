import { useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import "./navigation.css";

import Hamburger from "../../assets/images/icon-menu.svg";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icon-cart.svg";
import Profile from "../../assets/images/image-avatar.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="nav">
        <div className="nav__left">
          <button
            className="nav__hamburger"
            aria-label="open menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <img src={Hamburger} />
          </button>
          <span className="nav__logo">
            <img src={Logo} alt="Sneaker Logo" />
          </span>
        </div>

        <nav className="nav__links">
          <NavLinks />
        </nav>

        <div className="nav__right">
          <button aria-label="Cart">
            <img src={Cart} alt="Cart" />
          </button>
          <button aria-label="Profile">
            <img src={Profile} alt="Profile" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
