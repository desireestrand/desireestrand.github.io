import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <Link to="/"><h1>Desirée Strand</h1></Link>
      
      <Link to="/">Hem</Link>
      <Link to="/projects">Projekt</Link>
      <Link to="/about">Om mig</Link>
      <Link to="/contact">Kontakt</Link>
    </>
  )
}

export default Navbar