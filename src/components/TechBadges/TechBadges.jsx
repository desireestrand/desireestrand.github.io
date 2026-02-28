import StackIcon from 'tech-stack-icons'
import s from './TechBadges.module.css'
import { useState } from 'react';

const techStack = [
  { id: 'js', name: 'JavaScript', category: 'Language' },
  { id: 'react', name: 'React',  category: 'Library' },
  { id: 'nodejs', name: 'Node.js', category: 'Framework' },
  { id: 'typescript', name: 'TypeScript', category: 'Language' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database' },
  { id: 'postgresql', name: 'PostgresSQL', category: 'Database' },
  { id: 'html5', name: 'HTML5', category: 'Language' },
  { id: 'css3', name: 'CSS3', category: 'Language' },
  { id: 'python', name: 'Python', category: 'Language' },
  { id: 'php', name: 'PHP', category: 'Language' },
  { id: 'mysql', name: 'MySQL', category: 'Database' },
  { id: 'vscode', name: 'VS Code', category: 'Development Tool' },
  { id: 'git', name: 'Git', category: 'Development Tool' },
  { id: 'github', name: 'GitHub', category: 'Development Tool' },
  { id: 'vitejs', name: 'Vite', category: 'Development Tool' },
  { id: 'postman', name: 'Postman', category: 'API' },
];

const categories = ['All', ...new Set(techStack.map(item => item.category))];

function TechBadges() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStack = activeFilter === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === activeFilter);

  return (
    <>
    <div className={s.filterGroup}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`${s.filterBtn} ${activeFilter === cat ? s.active : ''}`}
          >
            {cat}
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
    </>
  )
}

export default TechBadges