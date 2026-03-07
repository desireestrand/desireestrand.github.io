import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import s from "./ProjectGrid.module.css";

const ProjectGrid = ({ limit, showFilters }) => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className={s.wrapper}>
      {showFilters && (
        <div className={s.filters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? s.activeFilter : ""}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className={s.grid}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No projects match the active filter.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;