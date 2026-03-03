import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import s from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={s.themeToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ion-icon name={darkMode ? "sunny" : "moon"}></ion-icon>
    </button>
  );
};

export default ThemeToggle;