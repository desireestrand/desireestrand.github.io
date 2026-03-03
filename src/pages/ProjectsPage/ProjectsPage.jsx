import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import s from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <section className={s.projectsPage}>
      <h2>Projects</h2>
      <ProjectGrid showFilters={true} />
    </section>
  );
}

export default ProjectsPage;