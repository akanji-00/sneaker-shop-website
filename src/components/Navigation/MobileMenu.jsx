import NavLinks from "./NavLinks";
import Close from "../../assets/images/icon-close.svg";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <aside
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="mobile-menu__close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <img src={Close} alt="Close button" />
        </button>

        <NavLinks onClick={onClose} />
      </aside>
    </>
  );
}
