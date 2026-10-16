import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Python Full Stack Developer.
        </p>
        <ul>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
          <li>
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
