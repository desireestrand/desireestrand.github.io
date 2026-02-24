import { Link } from "react-router-dom"
import s from './Header.module.css'
import Navbar from "../Navbar/Navbar"

function Header() {

  return (
    <>
        <div className={s.header}>
            <Link to="/"><h1>Desirée Strand</h1></Link>
            <Navbar />
        </div>
    </>
  )
}

export default Header