import { useState } from 'react'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import ImageLightbox from './ImageLightbox.jsx'
import PreviewDialog from './PreviewDialog.jsx'
import { projects } from '../data/profile.js'

export default function Projects() {
  const [previewing, setPreviewing] = useState(null)
  const [enlarged, setEnlarged] = useState(null)

  return (
    <Section id="projects" title="Live Projects" note="Three applications built with React.js, Django and REST APIs.">
      <div className="project-list">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onPreview={setPreviewing} onEnlarge={setEnlarged} />
        ))}
      </div>
      <ImageLightbox image={enlarged} onClose={() => setEnlarged(null)} />
      <PreviewDialog project={previewing} onClose={() => setPreviewing(null)} />
    </Section>
  )
}
