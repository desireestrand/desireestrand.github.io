import ProjectGrid from "../../components/ProjectGrid/ProjectGrid"
import s from "./ProjectsPage.module.css"

function ProjectsPage() {

  return (
    <>
    <div className={s.wrapper}>
      <h2>Projects</h2>
      <ProjectGrid showFilters={true} />
    </div>
    </>
  )
}

export default ProjectsPage