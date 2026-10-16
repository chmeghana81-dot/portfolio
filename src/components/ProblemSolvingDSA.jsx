import Section from './Section.jsx'
import { Icons } from './Icons.jsx'
import { dsa } from '../data/profile.js'

export default function ProblemSolvingDSA() {
  return (
    <Section
      id="problem-solving"
      title="Problem Solving & DSA"
      note="Practice and learning, alongside my development work."
    >
      <p className="lead">{dsa.description}</p>

      <ul className="dsa-grid">
        {dsa.cards.map(({ icon, title, text }) => {
          const Icon = Icons[icon]
          return (
            <li key={title} className="dsa-card">
              <span className="dsa-icon">
                <Icon width={22} height={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          )
        })}
      </ul>

      <div className="dsa-topics">
        <h3>Practice areas</h3>
        <ul className="badges" aria-label="Practice areas">
          {dsa.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="muted-note">{dsa.supporting}</p>
      </div>
    </Section>
  )
}
