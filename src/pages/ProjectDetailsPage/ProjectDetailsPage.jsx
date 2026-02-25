import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <p>Projektet hittades inte.</p>;

  return (
    <>
      <article className="project-detail">
        <header>
          <h1>{project.title}</h1>
          <div className="meta">
            <span>{project.type}</span>
            <a href={project.github}>GitHub</a>
          </div>
        </header>

        <section className="content">
          <p>{project.fullDescription}</p>
        </section>

        <section className="image-gallery">
          {project.gallery.map((img, index) => (
            <img key={index} src={img} alt={`Screenshot ${index}`} />
          ))}
        </section>
      </article>
    </>
  )
}

export default ProjectDetailsPage