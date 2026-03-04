import { Link } from "react-router-dom";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const hasCase = !!project.fullDescription;

  const CardContent = (
    <div className={s.card}>
      <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
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

        {hasCase ? (
          <span className={s.readMore}>Read case study →</span>
        ) : (
          <div className={s.externalLinks}>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <article className={s.projectCard}>
      {hasCase ? (
        <Link to={`/projects/${project.id}`} className={s.cardLink}>
          {CardContent}
        </Link>
      ) : (
        <div className={s.noLinkCard}>{CardContent}</div>
      )}
    </article>
  );
};

export default ProjectCard;
