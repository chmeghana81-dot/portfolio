import { useEffect, useState } from 'react'
import { Icons } from './Icons.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { navLinks, profile } from '../data/profile.js'

const ids = navLinks.map((l) => l.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={close} aria-label="Cheera Meghana – back to top">
          <span className="brand-mark" aria-hidden="true">CM</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icons.close /> : <Icons.menu />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="primary-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-small btn-primary nav-resume"
            href={profile.resume}
            download={profile.resumeFileName}
            onClick={close}
          >
            <Icons.download width={16} height={16} /> Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
