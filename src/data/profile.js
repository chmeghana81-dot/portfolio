// All content below comes from the resume (Ch_Meghana.pdf).
// Edit this file to update the site – no component changes needed.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Cheera Meghana',
  headline: 'Python Full Stack Developer | Aspiring Software Developer',
  location: 'Rajahmundry, Andhra Pradesh',
  email: 'chmeghana81@gmail.com',
  phone: '+91 7730830874',
  phoneHref: 'tel:+917730830874',
  github: 'https://github.com/chmeghana81-dot',
  linkedin: 'https://www.linkedin.com/in/ch-meghana-a5449334a',
  resume: `${base}Cheera_Meghana_Resume.pdf`,
  resumeFileName: 'Cheera_Meghana_Resume.pdf',
  intro:
    'Entry-level developer who builds responsive web applications, REST APIs, and practical software solutions with Python, Django and React.js. I enjoy problem solving and am building my Data Structures and Algorithms skills alongside my full stack projects.',
  target: 'Seeking an entry-level Full Stack / Python Full Stack Developer role.',
  summary:
    'Entry-level Full Stack Developer and recent B.Com (Computer Applications) graduate with hands-on experience in Python, Django, Django REST Framework, React.js, JavaScript, and SQL. Built responsive web applications and REST APIs with JWT authentication through projects and a Full Stack Developer internship.',
}

export const skills = [
  { category: 'Programming Languages', icon: 'code', items: ['Python', 'JavaScript', 'Java', 'C++'] },
  {
    category: 'Frontend Development',
    icon: 'layout',
    items: ['React.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend Development',
    icon: 'server',
    items: ['Django', 'Django REST Framework', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  { category: 'Databases', icon: 'database', items: ['MySQL', 'MongoDB', 'SQL'] },
  {
    category: 'Tools and Technologies',
    icon: 'tool',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
  },
]

export const projects = [
 



{
  id: 'shop-kart',
  name: 'Shop-Kart',
  description:
    'A responsive online shopping application designed to provide a convenient product browsing and shopping experience.',
  tech: ['React', 'JavaScript', 'CSS', 'Node.js','Express.js','MongoDB','REST API','Git','GitHub', 'Vercel'],
  features: [
     'Responsive shopping interface',
     'Product browsing',
     'Frontend and backend integration',
     'Database integration',
    'Live website deployment',
  ],
  live: 'https://shop-kart-lime.vercel.app/',
  repo: null,
  image: `${base}projects/shop-kart.png`,
},


  {
    id: 'kadappa-cafe',
    name: 'Kadappa Cafe Website',
    description:
      'A dosa website showcasing its interface and available features.',
    tech: ['React', 'JavaScript', 'CSS','Vite','Git','GitHub','Vercel',],
    features: [
      'Responsive cafe website',
    'Interactive user interface',
    'Cafe menu presentation',
    'Mobile-friendly design',
    'Live website deployment',
    ],
    live: 'https://dosa-project.vercel.app/',
    repo: null,
    image: `${base}projects/Dosa image.jpg`,
  },
  
{
  id: "jobtrack",
  name: "JobTrack – Job Application Tracker",
  description:
    "A full-stack job application tracking platform to organize job applications, manage interviews, and monitor job search progress.",
  image: "/projects/jobtrack.png",
  technologies: [
     'React',
      'JavaScript',
      'CSS',
      'Vite',
      'Python',
      'Django',
      'Django REST Framework',
      'JWT Authentication',
      'SQLite',
      'Git',
      'GitHub',
      'Vercel'
  ],
  features: [
    'Job application tracking and management',
    'Interview scheduling and tracking',
    'Job search dashboard',
    'REST API integration',
    'User authentication',
    'Live website deployment',
  ],
  live:"https://job-track-snowy.vercel.app/",
  repo: null,
  // github: "https://github.com/chmeghana81-dot/JobTrack"
},


  {
    id: 'derma-glo',
    name: 'Derma Glo – Skin, Hair & Laser Clinic Website',
    description:
      'A responsive clinic website covering treatments, gallery, reviews and appointment booking.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3','Vite','Git','GitHub','Vercel',],
    features: [
    'Responsive clinic website',
    'Skin and hair treatment information',
    'Services and treatment gallery',
    'Clinic contact information',
    'Appointment enquiry interface',
    'Mobile-friendly navigation',
    'Live website deployment',
    ],
    live: 'https://derma-glo-phi.vercel.app/',
    repo: null,
    image: `${base}projects/derma-glo image.jpg`,
  },
]


export const dsa = {
  description:
    'Developing strong problem-solving skills through Python programming and Data Structures and Algorithms practice, with a focus on logical thinking, efficient solutions, and writing clean, readable code.',
  cards: [
    {
      icon: 'steps',
      title: 'Problem Solving',
      text: 'Breaking a problem into clear steps before writing code.',
    },
    {
      icon: 'tree',
      title: 'Data Structures and Algorithms',
      text: 'Learning core data structures and algorithms, and when to use each.',
    },
    {
      icon: 'terminal',
      title: 'Python Coding Practice',
      text: 'Practising coding problems in Python with clean, readable code.',
    },
    {
      icon: 'bulb',
      title: 'Logical and Analytical Thinking',
      text: 'Reasoning through requirements and edge cases to reach efficient solutions.',
    },
  ],
  topics: ['Arrays', 'Strings', 'Searching', 'Sorting', 'Basic algorithmic problems'],
  supporting: 'HackerRank Software Engineer Role Certification (09/2026)',
}

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Godavari Wave Technologies Private Limited',
    place: 'Rajahmundry',
    period: 'Jul 2026 – Oct 2026',
    points: [
      'Developed and enhanced web application components using Python, Django, Django REST Framework, React.js, and SQL.',
      'Integrated React.js frontend with backend REST APIs to support application functionality.',
      'Tested API endpoints with Postman, debugged issues, and managed code with Git and GitHub.',
      'Collaborated with team members to complete development tasks and project deliverables.',
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'React.js', 'SQL', 'Postman', 'Git', 'GitHub'],
  },
]

export const education = [
  {
    qualification: 'B.Com, Computer Applications',
    institution: 'Government College (Autonomous), Adikavi Nannaya University',
    period: 'Sep 2023 – May 2026',
    result: 'CGPA: 8.1/10.0',
  },
  {
    qualification: 'Intermediate (Vocational)',
    institution: 'Government Junior College, Rajahmundry',
    period: 'Aug 2021 – Mar 2023',
    result: '850 Marks, A Grade',
  },
  {
    qualification: 'SSC',
    institution: 'Z.P.H.S. Satellite City, Rajahmundry',
    period: 'Jun 2021',
    result: '79.17% (475/600)',
  },
]

export const certifications = [
  {
    issuer: 'Godavari Wave Training Institute LLP',
    items: [{ title: 'Python Full Stack Development', date: 'Mar 2026 – Aug 2026' }],
  },
  {
    issuer: 'HackerRank',
    items: [{ title: 'Software Engineer Role Certification', date: 'Sep 2026' }],
  },
  {
    issuer: 'Forage',
    items: [
      { title: 'Software Engineering Job Simulation', date: 'Feb 2026' },
      { title: 'Technology Consulting Job Simulation', date: 'Mar 2026' },
    ],
  },
  {
    issuer: 'Claude Academy',
    items: [
      { title: 'AI Fluency: Framework and Foundations', date: 'Oct 2026' },
      { title: 'AI Capabilities and Limitations', date: 'Oct 2026' },
      { title: 'Claude Code 101', date: 'Oct 2026' },
    ],
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'projects', label: 'Live Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
