import { Link } from "react-router-dom";
import s from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={s.projectcard}>
      <Link to={`/projects/${project.id}`}>
        <div className={s.card}>
          <img src={project.thumbnail} alt={project.title} />
          <div className={s.cardcontent}>
            <h4>{project.title}</h4>
            <p className={s.excerpt}>{project.excerpt}</p>
            <div className={s.tags}>
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className={s.readmore}><span>Read more →</span></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;