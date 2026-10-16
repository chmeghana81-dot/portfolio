
// import { useState } from 'react'
// import { Icons } from './Icons.jsx'

// const BASE = import.meta.env.BASE_URL
// const EXTENSIONS = ['png', 'jpg', 'webp']

// export default function ProjectVisual({ project, onEnlarge }) {
//   const { id, name, live, image } = project
//   const [attempt, setAttempt] = useState(0)

//   // const src = ext
//   //   ? attempt < EXTENSIONS.length
//   //     ? image.replace(/\.(png|jpg|jpeg|webp)$/i, `.${EXTENSIONS[attempt]}`)
//   //     : null

//   const src = image || null
//     : attempt < EXTENSIONS.length
//       ? `${BASE}projects/${id}/screenshot.${EXTENSIONS[attempt]}`
//       : null

//   const host = live
//     ? new URL(live).host
//     : 'Live demo not published'

//   const alt = `Screenshot of the ${name} project`

//   return (
//     <div className="frame">
//       <div className="frame-bar" aria-hidden="true">
//         <span />
//         <span />
//         <span />
//         <em>{host}</em>
//       </div>

//       {src ? (
//         <button
//           type="button"
//           className="shot"
//           onClick={() => onEnlarge({ src, alt, name })}
//         >
//           <img
//             src={src}
//             alt={alt}
//             width="1440"
//             height="900"
//             onError={() => setAttempt((n) => n + 1)}
//           />

//           <span className="shot-hint">
//             <Icons.expand width={16} height={16} />
//             View larger
//           </span>

//           <span className="sr-only">
//             Open larger screenshot of {name}
//           </span>
//         </button>
//       ) : (
//         <div
//           className="placeholder"
//           role="img"
//           aria-label={`Screenshot placeholder for ${name}`}
//         >
//           <strong>Screenshot placeholder</strong>
//           <span>
//             Add your screenshot to{' '}
//             <code>public/projects/{id}/screenshot.png</code>
//           </span>
//           <small>Recommended size: 1440 × 900 pixels</small>
//         </div>
//       )}
//     </div>
//   )
// }


import { useState } from 'react'
import { Icons } from './Icons.jsx'

const BASE = import.meta.env.BASE_URL
const EXTENSIONS = ['png', 'jpg', 'webp']

export default function ProjectVisual({ project, onEnlarge }) {
  const { id, name, live, image } = project
  const [attempt, setAttempt] = useState(0)

  // Use the image path from the projects data.
  // Try PNG, JPG, and WebP if the image fails to load.
  const src = image
    ? attempt < EXTENSIONS.length
      ? image.replace(
          /\.(png|jpg|jpeg|webp)$/i,
          `.${EXTENSIONS[attempt]}`
        )
      : null
    : attempt < EXTENSIONS.length
      ? `${BASE}projects/${id}/screenshot.${EXTENSIONS[attempt]}`
      : null

  const host = live
    ? new URL(live).host
    : 'Live demo not published'

  const alt = `Screenshot of the ${name} project`

  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>{host}</em>
      </div>

      {src ? (
        <button
          type="button"
          className="shot"
          onClick={() => onEnlarge({ src, alt, name })}
        >
          <img
            src={src}
            alt={alt}
            width="1440"
            height="900"
            onError={() => setAttempt((n) => n + 1)}
          />

          <span className="shot-hint">
            <Icons.expand width={16} height={16} />
            View larger
          </span>

          <span className="sr-only">
            Open larger screenshot of {name}
          </span>
        </button>
      ) : (
        <div
          className="placeholder"
          role="img"
          aria-label={`Screenshot placeholder for ${name}`}
        >
          <strong>Screenshot placeholder</strong>
          <span>
            Add your screenshot to{' '}
            <code>public/projects/{id}/screenshot.png</code>
          </span>
          <small>Recommended size: 1440 × 900 pixels</small>
        </div>
      )}
    </div>
  )
}