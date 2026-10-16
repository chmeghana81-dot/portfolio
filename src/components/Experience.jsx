import Section from './Section.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <Section id="experience" title="Internship Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.period} className="timeline-item">
            <p className="period">{job.period}</p>
            <h3>{job.role}</h3>
            <p className="org">
              {job.company}, {job.place}
            </p>
            <ul className="bullets">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="badges" aria-label="Technologies used during the internship">
              {job.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
