import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <Link to="/"><h1>Desirée Strand</h1></Link>
      
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default Navbar