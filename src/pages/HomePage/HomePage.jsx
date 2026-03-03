import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import s from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={s.wrapper}>
      <Hero />
      <section className={s.section}>
        <h2>Projects</h2>
        <ProjectGrid limit={3} showFilters={false} />
        <Link to="/projects" className={s.button}>Show all</Link>
      </section>
    </div>
  );
}

export default HomePage;