import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  const navClass = ({ isActive }) => (isActive ? s.active : undefined);

  return (
    <nav className={s.nav}>
      <ul>
        <li><NavLink to="/projects" className={navClass}>Projects</NavLink></li>
        <li><NavLink to="/about" className={navClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;