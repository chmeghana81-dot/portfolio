import { useEffect, useRef } from 'react'
import { Icons } from './Icons.jsx'

// Native <dialog>: focus trap, Escape to close and backdrop handled by the browser.
export default function PreviewDialog({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      className="preview"
      aria-labelledby="preview-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {project && (
        <div className="preview-inner">
          <div className="preview-head">
            <h3 id="preview-title">{project.name}</h3>
            <a className="btn btn-ghost btn-small" href={project.live} target="_blank" rel="noopener noreferrer">
              Open in new tab <Icons.external width={15} height={15} />
            </a>
            <button type="button" className="icon-btn" onClick={onClose} autoFocus>
              <Icons.close />
              <span className="sr-only">Close preview</span>
            </button>
          </div>
          <iframe title={`Live preview of ${project.name}`} src={project.live} loading="lazy" />
          <p className="muted-note">If the preview stays blank, use “Open in new tab”.</p>
        </div>
      )}
    </dialog>
  )
}
