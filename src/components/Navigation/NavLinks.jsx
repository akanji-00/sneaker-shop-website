const links = [
  { label: "Collections", href: "#" },
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function NavLinks({ onClick }) {
  return (
    <ul className="nav__list">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} onClick={onClick}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
