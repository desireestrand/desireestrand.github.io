import { Link } from "react-router-dom";
import s from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logo}>
        Desirée Strand
      </Link>

      <div className={s.actions}>
        <Navbar />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;