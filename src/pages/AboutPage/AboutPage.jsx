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
        <div className={s.timeline}>
          <div className={s.item}>
            <span className={s.date}>Jun 2023 - Jun 2025</span>
            <p className={s.role}>Handledare i design</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Jun 2022 - Jan 2024</span>
            <p className={s.role}>Digital designer</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Feb 2022 - Jun 2022 (Praktik)</span>
            <p className={s.role}>Designer</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <h3>Education</h3>
        <div className={s.timeline}>
          <div className={s.item}>
            <span className={s.date}>
              Aug 2025 - Jun 2027 (Yrkeshögskoleexamen)
            </span>
            <p className={s.role}>Webbutvecklare fullstack open source</p>
            <p className={s.company}>Nackademin</p>

            <ul className={s.courseList}>
              <li>Backend 1 - JavaScript (Node.js, MongoDB)</li>
              <li>Databasteknik (PostgresSQL)</li>
              <li>Frontend 2 - JavaScript-bibliotek och ramverk (React)</li>
              <li>Frontend 1 - HTML, CSS och JavaScript</li>
              <li>Affärsmannaskap</li>
            </ul>
          </div>
          <div className={s.item}>
            <span className={s.date}>
              Sep 2019 - Jun 2022 (Filosofie kandidatexamen i medieteknik)
            </span>
            <p className={s.role}>IT, medier och design</p>
            <p className={s.company}>Södertörns högskola</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Mar 2022 - Maj 2022 (Kurs)</span>
            <p className={s.role}>React.js</p>
            <p className={s.company}>Folkuniversitet</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Aug 2015 - Jun 2018 (Gymnasieexamen)</span>
            <p className={s.role}>
              Samhällskunskapsprogrammet, inriktning Medier, information och
              kommunikation
            </p>
            <p className={s.company}>Wendela Hebbegymnasiet</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default AboutPage;
