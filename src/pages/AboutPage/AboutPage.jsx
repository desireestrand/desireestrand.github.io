import TechBadges from "../../components/TechBadges/TechBadges";
import s from "./AboutPage.module.css";

function AboutPage() {
  return (
    <article className={s.wrapper}>
      <header className={s.header}>
        <h2>Desirée Strand</h2>
        <div className={s.details}>
          <p className={s.title}>Fullstack Developer & UX Designer</p>
          <span className={s.location}>Stockholm, Sweden</span>
        </div>
      </header>

      <section className={s.content}>
        <h3>About me</h3>
        <p>
          Junior Fullstack Developer with a focus on
          <span className={s.highlight}> Frontend</span> and a background in
          <span className={s.highlight}> UX</span>. Experienced in working
          through the entire development lifecycle – from requirements and
          design to implementation, testing, and maintenance. I work in a
          structured and analytical manner, focusing on writing clean,
          maintainable and scalable code and building user-focused, accessible
          and sustainable solutions.
        </p>
        <p>
          My UX background allows me to approach development with a strong
          understanding of user needs and product goals. I translate
          requirements and design concepts into functional, intuitive interfaces
          and reliable technical solutions. By combining development and design
          thinking, I create products that are both technically solid and
          meaningful to users.
        </p>
        <p>
          When solving problems, I explore multiple perspectives, holistic{" "}
          <i>and </i>
          detail-oriented, before refining the strongest solutions. I enjoy
          breaking down complex challenges, experimenting with ideas, and
          iterating toward efficient implementations. Inspiration for my work
          often comes from both digital and physical systems, as well as from
          past solutions and emerging technologies.
        </p>
        <p>
          I am highly self-driven but thrive in agile, cross-functional teams. I
          enjoy working in collaborative environments where development happens
          close to the product and its users. I learn quickly, adapt easily, and
          am motivated by new technical challenges and opportunities to grow as
          a developer.
        </p>
      </section>

      <section className={s.section}>
        <h3>Education</h3>
        <div className={s.timeline}>
          <div className={s.item}>
            <span className={s.date}>
              Aug 2025 - Jun 2027 (Higher Vocational Education Diploma)
            </span>
            <p className={s.role}>Web Developer Fullstack Open Source</p>
            <p className={s.company}>Nackademin</p>

            <ul className={s.courseList}>
              <li>Backend Development I – JavaScript (Node.js, MongoDB)</li>
              <li>Database Systems (PostgreSQL)</li>
              <li>
                Frontend Development II – JS Libraries & Frameworks (React)
              </li>
              <li>Frontend Development I – HTML5, CSS3 & Modern JavaScript</li>
              <li>Business Acumen & Professionalism</li>
            </ul>
          </div>
          <div className={s.item}>
            <span className={s.date}>
              Sep 2019 - Jun 2022 (Bachelor of Science in Media Technology)
            </span>
            <p className={s.role}>ICT, Media and Design</p>
            <p className={s.company}>Södertörn University</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Mar 2022 - May 2022 (Online Course)</span>
            <p className={s.role}>React.js</p>
            <p className={s.company}>Folkuniversitet</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>
              Aug 2015 - Jun 2018 (Upper Secondary School Diploma)
            </span>
            <p className={s.role}>
              Social Science Programme – Media, Information and Communication
            </p>
            <p className={s.company}>Wendela Hebbegymnasiet</p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <h3>Experience</h3>
        <div className={s.timeline}>
          <div className={s.item}>
            <span className={s.date}>Jun 2023 - Jun 2025</span>
            <p className={s.role}>Design Mentor</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Jun 2022 - Jan 2024</span>
            <p className={s.role}>Digital Designer</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Feb 2022 - Jun 2022 (Internship)</span>
            <p className={s.role}>UX & Web Designer</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <h3>Tech Stack</h3>
        <TechBadges />
      </section>
    </article>
  );
}

export default AboutPage;
