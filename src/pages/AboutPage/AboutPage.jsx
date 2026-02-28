import TechBadges from "../../components/TechBadges/TechBadges"
import s from "./AboutPage.module.css"

function AboutPage() {

  return (
    <>
      <div className={s.wrapper}>
        <h2>Desirée Strand</h2>
        <div className={s.details}>
          <p className={s.title}>Full-Stack Developer & UX Designer</p>
          <span className={s.location}>Stockholm, Sweden</span>
        </div>
        <h3>About me</h3>
        <p>Junior fullstackutvecklare med spets i frontend och bakgrund inom UX. Erfaren av att arbeta genom hela utvecklingsflödet – från krav och design till implementation, test och vidareutveckling. Arbetar strukturerat och analytiskt med fokus på kvalitet, användarupplevelse, tillgänglighet och hållbara, skalbara lösningar. Trivs i agila, tvärfunktionella team där utveckling sker nära produkt och användare, med gemensamt ansvar för resultatet.</p>
        <div className={s.section}>
          <h3>Tech Stack</h3>
          <TechBadges />
        </div>
        <h3>Experience</h3>
        <p></p>
        <h3>Education</h3>
        <p></p>
      </div>
    </>
  )
}

export default AboutPage