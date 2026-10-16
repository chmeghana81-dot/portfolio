import Section from './Section.jsx'
import { education } from '../data/profile.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.qualification} className="edu-item">
            <p className="period">{e.period}</p>
            <div>
              <h3>{e.qualification}</h3>
              <p className="org">{e.institution}</p>
              <p className="result">{e.result}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
