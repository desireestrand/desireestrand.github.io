import TechBadges from "../../components/TechBadges/TechBadges";
import s from "./AboutPage.module.css";

function AboutPage() {
  return (
    <article className={s.wrapper}>
      <header className={s.header}>
        <h2>Desirée Strand</h2>
        <div className={s.details}>
          <p className={s.title}>Fullstack Developer & UX/UI Designer</p>
          <span className={s.location}>Stockholm, Sweden</span>
        </div>
      </header>

      <section className={s.content}>
        <h3>About me</h3>
        <p>
          I'm a Junior <span className={s.highlight}>Fullstack Developer</span>{" "}
          and <span className={s.highlight}> UX/UI Designer</span> passionate
          about building digital products that solve real-world problems and
          create meaningful experiences for users.
        </p>
        <p>
          Currently, I'm studying <span className={s.highlight}>Fullstack Development at Nackademin</span>, deepening
          my frontend skills in React and JavaScript while expanding into
          backend development with Node.js, TypeScript, APIs, and database
          management.
        </p>
        <p>
          With a <span className={s.highlight}>Bachelor's degree in Media Technology</span> and a background in
          UX/UI, I bring a holistic perspective to product development. My
          experience with the design processes that precede development helps me
          understand user needs and design intent, translating them into
          intuitive interfaces and reliable solutions that are both technically
          solid and meaningful to users. I enjoy <span className={s.highlight}>bridging the gap between design
          and engineering</span>, contributing across the entire product lifecycle —
          from initial concept to final implementation and long-term
          maintenance.
        </p>
        <p>
          As a curious and analytical person, I'm motivated by technical
          challenges that require thoughtful problem-solving and continuous
          learning. I work in a structured and systematic way, focusing on
          writing clean, maintainable, and scalable code while building
          user-focused, accessible, and sustainable solutions. I'm highly
          self-driven, but thrive in cross-functional teams and collaborative,
          creative environments where development happens close to the product
          and its users.
        </p>
        <p>
          For me, technology is at its most compelling when it isn't just
          functional, but truly valuable and appreciated by the people who use
          it. <span className={s.highlight}>✴︎</span>
        </p>
      </section>

      <section className={s.section}>
        <h3>Tech Stack</h3>
        <TechBadges />
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
              <li>
                Acquiring broad skills in both frontend and backend development,
                mastering languages and frameworks such as HTML5, CSS3, Vanilla
                JavaScript, React, Node.js, and TypeScript
              </li>
              <li>
                Managing database systems including PostgreSQL and MongoDB to
                build data-driven applications
              </li>
              <li>
                Implementing modern development tools and industry best
                practices, with strong emphasis on Git, GitHub, and Agile
                methodologies
              </li>
              <li>
                Executing team-based projects, gaining practical experience in
                collaborative, solution-oriented development; from initial
                planning and coding to final implementation
              </li>
              <li>
                Developing professional practices and business thinking as a
                developer in the tech industry
              </li>
            </ul>
          </div>
          <div className={s.item}>
            <span className={s.date}>
              Sep 2019 - Jun 2022 (Bachelor of Science in Media Technology)
            </span>
            <p className={s.role}>ICT, Media and Design</p>
            <p className={s.company}>Södertörn University</p>
            <ul className={s.courseList}>
              <li>
                Acquired vast knowledge and skill in UX and UI design, web and
                mobile development, graphic design and media production
              </li>
              <li>
                Applied user-centered design through methodologies like Design
                Thinking and Agile development, covering user research,
                usability testing, and lo-fi and hi-fi prototyping
              </li>
              <li>Followed design principles and best practices</li>
              <li>
                Collaborated in cross-functional teams, taking on various roles
                in both design and development
              </li>
              <li>
                Mastered industry-standard design tools, specifically Figma and
                the Adobe Creative Suite
              </li>
              <li>
                Worked with languages and libraries including HTML5, CSS3,
                JavaScript, jQuery, PHP, MySQL, p5.js and Flutter
              </li>
            </ul>
          </div>
          <div className={s.item}>
            <span className={s.date}>Mar 2022 - May 2022 (Online Course)</span>
            <p className={s.role}>React.js</p>
            <p className={s.company}>Folkuniversitet</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Jan 2022 - Feb 2022 (Course)</span>
            <p className={s.role}>Mobile Services and Interfaces</p>
            <p className={s.company}>Södertörn University</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Jan 2019 - Jun 2019 (Course)</span>
            <p className={s.role}>Cinema Studies I</p>
            <p className={s.company}>Stockholm University</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Sep 2018 - Jan 2019 (Course)</span>
            <p className={s.role}>Art History I: Visual Studies</p>
            <p className={s.company}>Stockholm University</p>
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
            <span className={s.date}>Jun 2023 - Jun 2025 (Consultant)</span>
            <p className={s.role}>Design Mentor</p>
            <p className={s.company}>ZoCom AB</p>
          </div>
          <div className={s.item}>
            <span className={s.date}>Jun 2022 - Jan 2024 (Consultant)</span>
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
    </article>
  );
}

export default AboutPage;
