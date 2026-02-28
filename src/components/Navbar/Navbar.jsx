import { Link } from "react-router-dom"
import s from './Navbar.module.css'

function Navbar() {

  return (
    <>
      <div className={s.nav}>
        <div className={s.li}><Link to="/projects">Projects</Link></div>
        <div className={s.li}><Link to="/about">About</Link></div>
        <div className={s.li}><Link to="/contact">Contact</Link></div>
      </div>
    </>
  )
}

export default Navbar