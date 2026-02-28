import TechBadges from "../../components/TechBadges/TechBadges"
import s from "./AboutPage.module.css"

function AboutPage() {

  return (
    <>
      <div className={s.wrapper}>
        <h2>About</h2>
        <div className={s.section}>
          <h3>Tech Stack</h3>
          <TechBadges />
        </div>
      </div>
    </>
  )
}

export default AboutPage