import { Link } from "react-router-dom"
import Hero from "../../components/Hero/Hero"
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid"
import TechBadges from "../../components/TechBadges/TechBadges"
import s from './HomePage.module.css'

function HomePage() {

  return (
    <>
      <div className={s.wrapper}>
        <Hero />
        <div className={s.section}>
          <h3>Tech Stack</h3>
          <TechBadges />
        </div>
        <div className={s.section}>
          <h3>Projects</h3>
          <ProjectGrid limit={3} showFilters={false} />
        </div>
        <div className={s.button}><Link to="/projects">All projects</Link></div>
      </div>
    </>
  )
}

export default HomePage