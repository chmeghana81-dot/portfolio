// import Section from './Section.jsx'
// import { Icons } from './Icons.jsx'
// import { profile } from '../data/profile.js'

// export default function About() {
//   return (
//     <Section id="about" title="About">
//       <p className="lead">{profile.summary}</p>
//       <p className="lead">{profile.target}</p>
//       <ul className="facts">
//         <li>
//           <Icons.pin width={18} height={18} />
//           <span>{profile.location}</span>
//         </li>
//         <li>
//           <Icons.award width={18} height={18} />
//           <span>B.Com (Computer Applications), CGPA 8.1/10.0</span>
//         </li>
//         <li>
//           <Icons.code width={18} height={18} />
//           <span>Full Stack Developer Intern, Jul 2026 – Oct 2026</span>
//         </li>
//       </ul>
//     </Section>
//   )
// }



// import Section from './Section.jsx'
// import { Icons } from './Icons.jsx'
// import { profile } from '../data/profile.js'
// import '../About.css'

// export default function About() {
//   return (
//     <Section id="about" title="">
//       <div className="about-layout">
//         {/* Left side: Profile photo */}
//         <div className="about-photo-container">
//           <img
//             src="/photo1.jpeg"
//             alt="Meghana - Python Full Stack Developer"
//             className="about-profile-photo"
//           />
//         </div>

//         {/* Right side: About information */}
//         <div className="about-content">
//           <h2 className="about-heading">About Me</h2>

//           <p className="lead">{profile.summary}</p>

//           <p className="lead">{profile.target}</p>

//           <ul className="facts">
//             <li>
//               <Icons.pin width={18} height={18} />
//               <span>{profile.location}</span>
//             </li>

//             <li>
//               <Icons.award width={18} height={18} />
//               <span>
//                 B.Com (Computer Applications), CGPA 8.1/10.0
//               </span>
//             </li>

//             <li>
//               <Icons.code width={18} height={18} />
//               <span>
//                 Full Stack Developer Intern, Jul 2026 – Oct 2026
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </Section>
//   )
// }






import Section from './Section.jsx'
import { Icons } from './Icons.jsx'
import { profile } from '../data/profile.js'
import './About.css'

export default function About() {
  return (
    <Section id="about" title="">
      <div className="about-layout">
        {/* Profile Photo */}
        <div className="about-photo-container">
          <img
            src="/image.jpeg"
            alt="Meghana - Python Full Stack Developer"
            className="about-profile-photo"
          />
          <div className="about-photo-glow"></div>
        </div>

        {/* About Information */}
       <div className="about-photo-section">
           <h2 className="about-heading">About Me</h2>

          <p className="lead">{profile.summary}</p>

          <p className="lead">{profile.target}</p>

          <ul className="facts">
            <li>
              <Icons.pin width={18} height={18} />
              <span>{profile.location}</span>
            </li>

            <li>
              <Icons.award width={18} height={18} />
              <span>
                B.Com (Computer Applications), CGPA 8.1/10.0
              </span>
            </li>

            <li>
              <Icons.code width={18} height={18} />
              <span>
                Full Stack Developer Intern, Jul 2026 – Oct 2026
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
