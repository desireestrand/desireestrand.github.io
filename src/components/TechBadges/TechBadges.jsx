import StackIcon from "tech-stack-icons";
import s from "./TechBadges.module.css";
import { useState } from "react";

const techStack = [
  { id: "react", name: "React", category: "Frontend" },
  { id: "js", name: "JavaScript", category: "Frontend" },
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "typescript", name: "TypeScript", category: "Backend" },
  { id: "html5", name: "HTML5", category: "Frontend" },
  { id: "css3", name: "CSS3", category: "Frontend" },
  { id: "python", name: "Python", category: "Backend" },
  { id: "mongodb", name: "MongoDB", category: "Databases" },
  { id: "postgresql", name: "PostgreSQL", category: "Databases" },
  { id: "mysql", name: "MySQL", category: "Databases" },
  { id: "git", name: "Git", category: "Tools" },
  { id: "github", name: "GitHub", category: "Tools" },
  { id: "vscode", name: "VS Code", category: "Tools" },
  { id: "vitejs", name: "Vite", category: "Tools" },
  { id: "postman", name: "Postman", category: "Tools" },
  { id: "figma", name: "Figma", category: "Tools" },
  { id: "jquery", name: "jQuery", category: "Frontend" },
  { id: "php", name: "PHP", category: "Backend" },
  { id: "agile", name: "Agile (SCRUM, Kanban)", category: "Methods" },
  { id: "dt", name: "Design Thinking", category: "Methods" },
  { id: "research", name: "User Research", category: "Methods" },
  { id: "idea", name: "Brainstorming", category: "Methods" },
  { id: "prototype", name: "Lo-fi and Hi-fi Prototyping", category: "Methods" },
  { id: "testing", name: "Usability Testing", category: "Methods" },
  { id: "adobecc", name: "Adobe Creative Suite", category: "Tools" },
];

const categories = ["All", ...new Set(techStack.map((item) => item.category))];

function TechBadges() {
  const [activeFilter, setActiveFilter] = useState("Frontend");

  const filteredStack =
    activeFilter === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeFilter);

  return (
    <div className={s.wrapper}>
      <div className={s.filterGroup}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`${s.filterBtn} ${activeFilter === category ? s.active : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={s.container}>
        {filteredStack.map((tech) => (
          <div key={tech.id} className={s.badge}>
            <StackIcon name={tech.id} className={s.icon} />
            <p className={s.label}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechBadges;