import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import s from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={s.themetogglecontainer}>
        <button onClick={toggleDarkMode} className={s.themetoggle}>
            <ion-icon name="moon"></ion-icon>
        </button>
    </div>
  );
};

export default ThemeToggle;