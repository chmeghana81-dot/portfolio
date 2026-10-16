import Section from './Section.jsx'
import { certifications } from '../data/profile.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="cert-grid">
        {certifications.map((group) => (
          <div key={group.issuer} className="cert-group">
            <h3>{group.issuer}</h3>
            <ul>
              {group.items.map((c) => (
                <li key={c.title}>
                  <span>{c.title}</span>
                  <span className="date">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
