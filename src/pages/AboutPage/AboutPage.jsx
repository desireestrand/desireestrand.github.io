import TechBadges from "../../components/TechBadges/TechBadges";
import s from "./AboutPage.module.css";

function AboutPage() {
  return (
    <article className={s.wrapper}>
      <header className={s.header}>
        <h2>Desirée Strand</h2>
        <div className={s.details}>
          <p className={s.title}>Full-Stack Developer & UX Designer</p>
          <span className={s.location}>Stockholm, Sweden</span>
        </div>
      </header>

      <section className={s.content}>
        <h3>About me</h3>
        <p>
          Junior fullstackutvecklare med spets i frontend och bakgrund inom UX.
          Erfaren av att arbeta genom hela utvecklingsflödet – från krav och
          design till implementation, test och vidareutveckling. Arbetar
          strukturerat och analytiskt med fokus på kvalitet, användarupplevelse,
          tillgänglighet och hållbara, skalbara lösningar. Trivs i agila,
          tvärfunktionella team där utveckling sker nära produkt och användare,
          med gemensamt ansvar för resultatet.
        </p>
      </section>

      <section className={s.section}>
        <h3>Tech Stack</h3>
        <TechBadges />
      </section>

      <section className={s.section}>
        <h3>Experience</h3>
      </section>

      <section className={s.section}>
        <h3>Education</h3>
      </section>
    </article>
  );
}

export default AboutPage;