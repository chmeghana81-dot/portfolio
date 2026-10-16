import { Icons } from './Icons.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-name">{profile.name}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-target">{profile.target}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/projects">
              View My Projects
            </a>
            <a className="btn btn-ghost" href={profile.resume} download={profile.resumeFileName}>
              <Icons.download width={18} height={18} /> Download Resume
            </a>
            <a className="btn btn-ghost" href="/contact">
              Contact Me
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icons.github width={18} height={18} /> Visit GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <ul className="social-row" aria-label="More contact links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Icons.linkedin width={18} height={18} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <Icons.mail width={18} height={18} /> Email
              </a>
            </li>
            <li>
              <a href={profile.phoneHref}>
                <Icons.phone width={18} height={18} /> Call
              </a>
            </li>
          </ul>
        </div>

        <figure className="api-card" aria-label="Profile summary shown as an API response">
          <figcaption className="api-bar">
            <span className="api-method">GET</span>
            <span className="api-path">/api/developer/cheera-meghana</span>
            <span className="api-status">200 OK</span>
          </figcaption>
          <pre className="api-body">
            <code>
              <span className="p">{'{'}</span>
              {'\n  '}
              <span className="k">"role"</span>: <span className="s">"Python Full Stack Developer"</span>,
              {'\n  '}
              <span className="k">"stack"</span>: <span className="p">[</span>
              <span className="s">"Python"</span>, <span className="s">"Django"</span>,{'\n            '}
              <span className="s">"DRF"</span>, <span className="s">"React.js"</span>, <span className="s">"SQL"</span>
              <span className="p">]</span>,
              {'\n  '}
              <span className="k">"auth"</span>: <span className="s">"JWT"</span>,
              {'\n  '}
              <span className="k">"education"</span>: <span className="s">"B.Com, Computer Applications"</span>,
              {'\n  '}
              <span className="k">"cgpa"</span>: <span className="s">"8.1/10.0"</span>,
              {'\n  '}
              <span className="k">"location"</span>: <span className="s">"Rajahmundry, Andhra Pradesh"</span>,
              {'\n  '}
              <span className="k">"seeking"</span>: <span className="s">"Entry-level Full Stack role"</span>
              {'\n'}
              <span className="p">{'}'}</span>
            </code>
          </pre>
        </figure>
      </div>
    </section>
  )
}
