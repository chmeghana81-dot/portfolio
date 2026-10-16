import Section from './Section.jsx'
import { Icons } from './Icons.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" note="Technologies from my projects and internship.">
      <ul className="skill-list">
        {skills.map(({ category, icon, items }) => {
          const Icon = Icons[icon]
          return (
            <li key={category} className="skill-row">
              <h3>
                <Icon width={18} height={18} />
                {category}
              </h3>
              <ul className="badges" aria-label={category}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
