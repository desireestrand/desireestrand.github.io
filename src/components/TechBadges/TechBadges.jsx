import { useState } from "react";
import s from "./TechBadges.module.css";

import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaFigma, FaPhp, FaDocker, FaCode } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiVite, SiPostman, SiJquery, SiExpress, SiJsonwebtokens, SiWordpress, SiMongoose } from "react-icons/si";
import { MdDesignServices, MdOutlinePsychology, MdOutlineRocketLaunch, MdOutlineQuiz, MdDevices, MdAccessibility } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoAdobe } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaNoteSticky } from "react-icons/fa6";
import { GoIterations } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";

const iconMap = {
  react: <FaReact />,
  javascript: <IoLogoJavascript />,
  nodejs: <FaNodeJs />,
  typescript: <SiTypescript />,
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  expressjs: <SiExpress />,
  mongoose: <SiMongoose />,
  jwt: <SiJsonwebtokens />,
  python: <FaPython />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  mysql: <DiMysql />,
  restapi: <TbApi />,
  git: <FaGitAlt />,
  github: <FaGithub />,
  vscode: <VscVscodeInsiders />,
  vitejs: <SiVite />,
  postman: <SiPostman />,
  docker: <FaDocker />,
  figma: <FaFigma />,
  jquery: <SiJquery />,
  php: <FaPhp />,
  agile: <GoIterations />,
  designthinking: <LuBrainCircuit />,
  cms: <SiWordpress />,
  responsive: <MdDevices />,
  accessability: <MdAccessibility />,
  research: <MdOutlinePsychology />,
  idea: <FaNoteSticky />,
  prototype: <MdDesignServices />,
  testing: <MdOutlineQuiz />,
  adobecc: <BiLogoAdobe />,
  cicd: <MdOutlineRocketLaunch />,
};

const techStack = [
  { id: "react", name: "React", category: "Frontend" },
  { id: "javascript", name: "JavaScript (ES6+)", category: "Frontend" },
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "typescript", name: "TypeScript", category: "Backend" },
  { id: "html5", name: "HTML5", category: "Frontend" },
  { id: "css3", name: "CSS3", category: "Frontend" },
  { id: "expressjs", name: "Express.js", category: "Backend" },
  { id: "mongoose", name: "Mongoose", category: "Backend" },
  { id: "jwt", name: "JWT", category: "Backend" },
  { id: "python", name: "Python", category: "Backend" },
  { id: "mongodb", name: "MongoDB", category: "Databases" },
  { id: "postgresql", name: "PostgreSQL", category: "Databases" },
  { id: "mysql", name: "MySQL", category: "Databases" },
  { id: "restapi", name: "REST APIs", category: "Databases" },
  { id: "git", name: "Git", category: "Tools" },
  { id: "github", name: "GitHub", category: "Tools" },
  { id: "vscode", name: "VS Code", category: "Tools" },
  { id: "vitejs", name: "Vite", category: "Tools" },
  { id: "postman", name: "Postman", category: "Tools" },
  { id: "docker", name: "Docker", category: "Tools" },
  { id: "figma", name: "Figma", category: "Tools" },
  { id: "jquery", name: "jQuery", category: "Frontend" },
  { id: "php", name: "PHP", category: "Backend" },
  { id: "agile", name: "Agile (SCRUM, Kanban)", category: "Methods" },
  { id: "designthinking", name: "Design Thinking", category: "Methods" },
  { id: "cms", name: "CMS (WordPress, Wix, Shopify, Teamtailor)", category: "Frontend" },
  { id: "responsive", name: "Responsive Design", category: "Frontend" },
  { id: "accessability", name: "Accessability (WCAG)", category: "Frontend" },
  { id: "research", name: "User Research", category: "Methods" },
  { id: "idea", name: "Brainstorming", category: "Methods" },
  { id: "prototype", name: "Lo-fi and Hi-fi Prototyping", category: "Methods" },
  { id: "testing", name: "Usability Testing", category: "Methods" },
  { id: "adobecc", name: "Adobe Creative Suite", category: "Tools" },
  { id: "cicd", name: "CI/CD and Deployment", category: "Methods" },
];

const categories = ["All", ...new Set(techStack.map((item) => item.category))];

function TechBadges() {
  const [activeFilter, setActiveFilter] = useState("All");

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
            <span className={s.icon}>{iconMap[tech.id]}</span>
            <p className={s.label}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechBadges;