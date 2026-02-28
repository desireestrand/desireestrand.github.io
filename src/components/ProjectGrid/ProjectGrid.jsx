import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import s from './ProjectGrid.module.css'

const ProjectGrid = ({ limit, showFilters }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  const displayedProjects = limit 
    ? filteredProjects.slice(0, limit) 
    : filteredProjects;

  return (
    <section className={s.wrapper}>
      {showFilters && (
        <div className={s.filters}>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('frontend')}>Frontend</button>
        </div>
      )}

      <div className={s.grid}>
        {displayedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;