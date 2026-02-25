import StackIcon from 'tech-stack-icons'
import s from './TechBadges.module.css'

const techStack = [
  { id: 'js', name: 'JavaScript' },
  { id: 'react', name: 'React' },
  { id: 'nodejs', name: 'NodeJS' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'postgresql', name: 'PostgresSQL' },
  { id: 'css3', name: 'CSS3' },
  { id: 'html5', name: 'HTML5' },
  { id: 'python', name: 'Python' },
];

function TechBadges() {
  return (
    <>
      <div className={s.container}>
          {techStack.map((tech) => (
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