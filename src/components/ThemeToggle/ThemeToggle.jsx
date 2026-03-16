import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";
import s from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className={s.themeToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <IoSunny className={s.icon} /> : <IoMoon className={s.icon} />}
    </button>
  );
};

export default ThemeToggle;