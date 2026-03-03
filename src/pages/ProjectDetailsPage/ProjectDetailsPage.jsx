import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import s from "./ProjectDetailsPage.module.css";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className={s.notFound}>Projektet hittades inte.</p>;

  return (
    <article className={s.wrapper}>
      <Link to="/projects" className={s.backLink}>
        ← Back to projects
      </Link>

      <header className={s.header}>
        <span className={s.type}>{project.type.toUpperCase()}</span>
        <h1>{project.title}</h1>
        <div className={s.meta}>
          <div className={s.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={s.tagBadge}>
                {tag}
              </span>
            ))}
          </div>
          <p className={s.excerpt}>{project.excerpt}</p>
          <div className={s.links}>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      <div className={s.heroImage}>
        <img src={project.thumbnail} alt={`${project.title} main view`} />
      </div>

      <section className={s.content}>
        <h3>Project Overview</h3>
        <p>{project.fullDescription}</p>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className={s.gallery}>
          <h3>Photo Gallery</h3>
          <div className={s.imageGrid}>
            {project.gallery.map((img, index) => (
              <div key={index} className={s.imageWrapper}>
                <img src={img} alt={`${project.title} detail ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default ProjectDetailsPage;