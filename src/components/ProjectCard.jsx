// import { Icons } from './Icons.jsx'
// import ProjectVisual from './ProjectVisual.jsx'

// export default function ProjectCard({ project, onPreview, onEnlarge }) {
//   const { name, description, tech, features, live, repo } = project
//   return (
//     <article className="project">
//       <ProjectVisual project={project} onEnlarge={onEnlarge} />
//       <div className="project-body">
//         <h3>{name}</h3>
//         <p className="project-desc">{description}</p>

//         <ul className="badges" aria-label={`Technologies used in ${name}`}>
//           {tech.map((t) => (
//             <li key={t}>{t}</li>
//           ))}
//         </ul>

//         <ul className="feature-list">
//           {features.map((f) => (
//             <li key={f}>
//               <Icons.check width={16} height={16} />
//               <span>{f}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="project-actions">
//           {live && (
//             <>
//               <a className="btn btn-primary btn-small" href={live} target="_blank" rel="noopener noreferrer">
//                 Live Demo <Icons.external width={15} height={15} />
//                 <span className="sr-only"> for {name} (opens in a new tab)</span>
//               </a>
//               <button type="button" className="btn btn-ghost btn-small" onClick={() => onPreview(project)}>
//                 <Icons.eye width={15} height={15} /> Quick preview
//                 <span className="sr-only"> of {name}</span>
//               </button>
//             </>
//           )}
//           {repo && (
//             <a className="btn btn-ghost btn-small" href={repo} target="_blank" rel="noopener noreferrer">
//               <Icons.github width={15} height={15} /> Source code
//               <span className="sr-only"> for {name} (opens in a new tab)</span>
//             </a>
//           )}
//           {!live && !repo && <p className="muted-note">A public demo link isn’t available for this project yet.</p>}
//         </div>
//       </div>
//     </article>
//   )
// }




// import { Icons } from './Icons.jsx'
// import ProjectVisual from './ProjectVisual.jsx'

// export default function ProjectCard({ project, onPreview, onEnlarge }) {
//   const {
//     name,
//     description,
//     tech = [],
//     features = [],
//     live,
//     repo,
//   } = project

//   return (
//     <article className="project">
//       <ProjectVisual
//         project={project}
//         onEnlarge={onEnlarge}
//       />

//       <div className="project-body">
//         <h3>{name}</h3>
//         <p className="project-desc">{description}</p>

//         <ul className="badges" aria-label={`Technologies used in ${name}`}>
//           {tech.map((t) => (
//             <li key={t}>{t}</li>
//           ))}
//         </ul>

//         {features.length > 0 && (
//           <ul className="feature-list">
//             {features.map((feature) => (
//               <li key={feature}>
//                 <Icons.check width={16} height={16} />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         )}

//         <div className="project-actions">
//           {live && (
//             <>
//               <a
//                 className="btn btn-primary btn-small"
//                 href={live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Live Demo
//                 <Icons.external width={15} height={15} />
//                 <span className="sr-only">
//                   {' '}for {name} (opens in a new tab)
//                 </span>
//               </a>

//               {onPreview && (
//                 <button
//                   type="button"
//                   className="btn btn-ghost btn-small"
//                   onClick={() => onPreview(project)}
//                 >
//                   <Icons.eye width={15} height={15} />
//                   Quick preview
//                   <span className="sr-only">{' '}of {name}</span>
//                 </button>
//               )}
//             </>
//           )}

//           {repo && (
//             <a
//               className="btn btn-ghost btn-small"
//               href={repo}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Icons.github width={15} height={15} />
//               Source code
//               <span className="sr-only">
//                 {' '}for {name} (opens in a new tab)
//               </span>
//             </a>
//           )}

//           {!live && !repo && (
//             <p className="muted-note">
//               A public demo link isn’t available for this project yet.
//             </p>
//           )}
//         </div>
//       </div>
//     </article>
//   )
// }


import { Icons } from './Icons.jsx'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project, onPreview, onEnlarge }) {
  const {
    name,
    description,
    tech = [],
    features = [],
    live,
    repo,
  } = project

  return (
    <article className="project">
      <ProjectVisual
        project={project}
        onEnlarge={onEnlarge}
      />

      <div className="project-body">
        <h3>{name}</h3>

        <p className="project-desc">{description}</p>

        {tech.length > 0 && (
          <ul className="badges" aria-label={`Technologies used in ${name}`}>
            {tech.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {features.length > 0 && (
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>
                <Icons.check width={16} height={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          {live && (
            <>
              <a
                className="btn btn-primary btn-small"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <Icons.external width={15} height={15} />
                <span className="sr-only">
                  {' '}for {name} (opens in a new tab)
                </span>
              </a>

              {onPreview && (
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  onClick={() => onPreview(project)}
                >
                  <Icons.eye width={15} height={15} />
                  Quick preview
                  <span className="sr-only">
                    {' '}of {name}
                  </span>
                </button>
              )}
            </>
          )}

          {repo && (
            <a
              className="btn btn-ghost btn-small"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github width={15} height={15} />
              Source code
              <span className="sr-only">
                {' '}for {name} (opens in a new tab)
              </span>
            </a>
          )}

          {!live && !repo && (
            <p className="muted-note">
              A public demo link isn't available for this project yet.
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
