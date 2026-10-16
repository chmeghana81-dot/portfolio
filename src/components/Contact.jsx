import { Icons } from './Icons.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div>
            <h2 id="contact-title">Hiring for an entry-level Full Stack or Python role?</h2>
            <p>
              I’m looking for a Full Stack / Python Full Stack Developer opportunity. Review my resume, then reach me by
              email, phone or LinkedIn.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Icons.mail width={18} height={18} /> Email me
              </a>
              <a className="btn btn-ghost" href={profile.resume} download={profile.resumeFileName}>
                <Icons.download width={18} height={18} /> Download Resume
              </a>
            </div>
          </div>

          <ul className="contact-list">
            <li>
              <Icons.mail width={18} height={18} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icons.phone width={18} height={18} />
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <Icons.linkedin width={18} height={18} />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>
            </li>
            <li>
              <Icons.github width={18} height={18} />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
            </li>
            <li>
              <Icons.pin width={18} height={18} />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
