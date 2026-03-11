import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import s from "./ProjectDetailsPage.module.css";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className={s.notFound}>Project not found.</p>;

  return (
    <article className={s.wrapper}>
      <Link to="/projects" className={s.backLink}>
        ← Back to projects
      </Link>

      <header className={s.header}>
        <span className={s.category}>{project.category}</span>
        <h1>{project.title}</h1>

        <div className={s.tagsContainer}>
          <div className={s.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={s.tagBadge}>
                {tag}
              </span>
            ))}
          </div>

          <p className={s.summary}>{project.summary}</p>

          <div className={s.links}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className={s.heroImage}>
          <img src={project.thumbnail} alt={`${project.title} main view`} />
        </div>

        <div className={s.metaGrid}>
          <div className={s.metaItem}>
            <span>Project Type</span> {project.type}
          </div>
          <div className={s.metaItem}>
            <span>Client</span> {project.client}
          </div>
          <div className={s.metaItem}>
            <span>Duration</span> {project.duration}
          </div>
          <div className={s.metaItem}>
            <span>Skills</span> {project.skills.join(", ")}
          </div>
          <div className={s.metaItem}>
            <span>Tools</span> {project.tools.join(", ")}
          </div>
        </div>
      </header>

      <div className={s.contentBlocks}>
        {project.blocks.map((block, index) => {
          switch (block.type) {
            case "h1":
              return (
                <h2 key={index} className={s.h1Block}>
                  {block.content}
                </h2>
              );

            case "h2":
              return (
                <h3 key={index} className={s.h2Block}>
                  {block.content}
                </h3>
              );

            case "h3":
              return (
                <h4 key={index} className={s.h3Block}>
                  {block.content}
                </h4>
              );

            case "text":
              return (
                <p key={index} className={s.textBlock}>
                  {block.content}
                </p>
              );

            case "image":
              return (
                <figure key={index} className={s.imageBlock}>
                  <img src={block.url} alt="" />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );

            case "gallery-2col":
              return (
                <figure key={index} className={s.galleryBlock}>
                  <div className={s.gallery2Col}>
                    {block.images.map((img, i) => (
                      <img key={i} src={img.url} alt="" />
                    ))}
                  </div>
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );

            case "gallery-row":
              return (
                <figure key={index} className={s.galleryBlock}>
                  <div className={s.galleryRow}>
                    {block.images.map((img, i) => (
                      <img key={i} src={img.url} alt="" />
                    ))}
                  </div>
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );

            case "video":
              const isExternal =
                block.url.includes("youtube") || block.url.includes("vimeo");

              return (
                <figure key={index} className={s.videoBlock}>
                  <div className={s.videoWrapper}>
                    {isExternal ? (
                      /* Extern video (YouTube/Vimeo) - Autoplay styrs av URL-parametrar */
                      <iframe
                        src={block.url}
                        allowFullScreen
                        title="video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : (
                      /* Lokal fil - Ta bort 'autoPlay' här för att stoppa den */
                      <video
                        src={block.url}
                        controls
                        preload="metadata"
                        className={s.localVideo}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
              );

            case "quote":
              return (
                <blockquote key={index} className={s.quoteBlock}>
                  <p>"{block.content}"</p>
                  {block.caption && <span>{block.caption}</span>}
                </blockquote>
              );

            case "button":
              return (
                <div key={index} className={s.buttonBlock}>
                  <a
                    href={block.url}
                    target={block.external ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={s.projectButton}
                  >
                    {block.text}
                  </a>
                </div>
              );

            case "list":
              const ListTag = block.style === "numbered" ? "ol" : "ul";
              return (
                <ListTag
                  key={index}
                  className={
                    block.style === "numbered" ? s.numberedList : s.bulletList
                  }
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ListTag>
              );

            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}

export default ProjectDetailsPage;
