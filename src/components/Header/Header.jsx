import { Link } from "react-router-dom"
import s from './Header.module.css'
import Navbar from "../Navbar/Navbar"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

function Header() {

  return (
    <>
        <div className={s.header}>
            <Link to="/"><h1>Desirée Strand</h1></Link>
            <div className={s.navcontainer}>
              <div className={s.navitem}>
                <Navbar />
              </div>
              <div className={s.navitem}>
                <ThemeToggle />
              </div>
            </div>
        </div>
    </>
  )
}

export default Header