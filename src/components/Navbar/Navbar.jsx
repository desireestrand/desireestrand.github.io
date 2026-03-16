import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import s from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navClass = ({ isActive }) => (isActive ? s.active : undefined);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={s.nav}>
      <button className={s.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <IoClose className={s.icon} /> : <IoMenu className={s.icon} />}
      </button>

      <ul className={`${s.navLinks} ${isOpen ? s.open : ""}`}>
        <li><NavLink to="/projects" className={navClass} onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/about" className={navClass} onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/contact" className={navClass} onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;