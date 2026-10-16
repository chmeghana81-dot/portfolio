import { useEffect, useRef } from 'react'
import { Icons } from './Icons.jsx'

export default function ImageLightbox({ image, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={image ? `Larger screenshot of ${image.name}` : 'Screenshot viewer'}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {image && (
        <div className="lightbox-inner">
          <button type="button" className="icon-btn lightbox-close" onClick={onClose} autoFocus>
            <Icons.close />
            <span className="sr-only">Close larger view</span>
          </button>
          <img src={image.src} alt={image.alt} />
        </div>
      )}
    </dialog>
  )
}
