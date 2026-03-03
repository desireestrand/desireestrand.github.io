import { Link } from "react-router-dom";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <article className={s.projectCard}>
      <Link to={`/projects/${project.id}`} className={s.cardLink}>
        <div className={s.card}>
          <img
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
          />

          <div className={s.cardContent}>
            <h3>{project.title}</h3>
            <p className={s.excerpt}>{project.excerpt}</p>

            <div className={s.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <span className={s.readMore}>Read more →</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;