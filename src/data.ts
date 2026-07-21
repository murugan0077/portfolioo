/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Project,
  ExperienceEntry,
  EducationEntry,
  CertificateEntry,
  DisciplineEntry,
  SkillItem,
  TimelineNode,
} from './types';

export const personalInfo = {
  name: 'Murugan S',
  role: 'Full Stack Developer',
  location: 'Srivilliputtur, Tamil Nadu, India',
  company: 'Pranion Technology, Chennai',
  email: 'murugan25oct@gmail.com',
  phone: '+91 8778987102',
  github: 'https://github.com/murugan-s',
  linkedin: 'https://linkedin.com/in/murugan-s',
  status: 'Available for Work',
  experience: '1.7+ Years',
  projectsCount: '8+',
  techCount: '10+',
  tagline: 'Building great software, one line at a time.',
};

export const disciplines: DisciplineEntry[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Dev',
    subtitle: 'End-to-End Web Applications',
    description: 'Building complete, transaction-safe web platforms with robust database schemas, secure session management, and highly optimized API layers. Focused on clean modular architecture and maintainability.',
    iconName: 'Code',
    skills: [
      { name: 'Java', percentage: 88 },
      { name: 'Spring Boot', percentage: 82 },
      { name: 'React.js', percentage: 90 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'PostgreSQL', percentage: 80 },
    ],
    competencies: ['REST API Design', 'MVC Architecture', 'Database Optimization', 'Security', 'Performance', 'Clean Code'],
    linkText: 'Interested in this service? →',
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Interest',
    subtitle: 'Intelligent Systems & Automation',
    description: 'Passionate about integrating AI into real-world products. Exploring Natural Language Processing (NLP), workflow automation bots, and AI-driven features. Built a Jarvis-inspired virtual assistant using Python.',
    iconName: 'Cpu',
    skills: [
      { name: 'Python', percentage: 75 },
      { name: 'Automation', percentage: 80 },
      { name: 'NLP', percentage: 70 },
      { name: 'Prompt Engineering', percentage: 85 },
      { name: 'AI APIs', percentage: 80 },
    ],
    competencies: ['Chatbot development', 'Workflow automation', 'AI product thinking', 'API Integration'],
    linkText: 'Explore AI experiments →',
  },
  {
    id: 'creative-dev',
    title: 'Creative Dev',
    subtitle: 'Premium Interfaces & Micro-Animations',
    description: 'Crafting visually stunning, interaction-rich UIs using React, Framer Motion choreography, and advanced CSS. Attention to detail at every pixel level for modern responsive designs.',
    iconName: 'Palette',
    skills: [
      { name: 'React.js', percentage: 90 },
      { name: 'CSS3 / Tailwind', percentage: 92 },
      { name: 'Motion Animations', percentage: 88 },
      { name: 'UI/UX Prototypes', percentage: 80 },
    ],
    competencies: ['Component systems', 'Animation choreography', 'Dark design', 'Responsive layouts', 'Glassmorphism'],
    linkText: 'View interactive components →',
  },
  {
    id: 'api-design',
    title: 'API & System Design',
    subtitle: 'Robust Backend Systems',
    description: 'Designing scalable RESTful APIs and system architectures for production-grade apps. Experienced in object-oriented database mapping, security protocols, and CI/CD optimization workflows.',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', percentage: 82 },
      { name: 'Node.js', percentage: 75 },
      { name: 'MySQL', percentage: 80 },
      { name: 'PostgreSQL', percentage: 80 },
      { name: 'Docker', percentage: 75 },
    ],
    competencies: ['API contracts', 'Database modeling', 'Deployment pipelines', 'Performance Tuning'],
    linkText: 'Inspect system blueprints →',
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Build, Deploy, Scale',
    description: 'Hands-on CI/CD experience. Successfully reduced build times by 40% at Pranion Technology. Familiar with Docker containerization and automating pipelines for error-free releases.',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker', percentage: 75 },
      { name: 'Git & GitHub', percentage: 85 },
      { name: 'CI/CD Pipelines', percentage: 80 },
      { name: 'Linux Commands', percentage: 70 },
    ],
    competencies: ['Containerization', 'Pipeline automation', 'Environment management', 'GitHub Actions'],
    linkText: 'Check delivery statistics →',
  },
];

export const certifications: CertificateEntry[] = [
  {
    id: 'anthropic',
    no: 'NO. AI–2025–001',
    issuer: 'Anthropic',
    year: '2025',
    title: 'Anthropic AI Fluency Certification',
    score: 'Perfect 10/10 ✦',
    link: '#',
    accent: 'purple',
  },
  {
    id: 'google-mkt',
    no: 'NO. GM–2024–042',
    issuer: 'Google',
    year: '2024',
    title: 'Google Digital Marketing & E-commerce',
    link: '#',
    accent: 'amber',
  },
  {
    id: 'bsc-cs',
    no: 'NO. ED–2022–BSC',
    issuer: 'Ayya Nadar Janaki Ammal College',
    year: '2022',
    title: 'B.Sc Computer Science — 75%',
    link: '#',
    accent: 'green',
  },
  {
    id: 'debugging-award',
    no: 'NO. AW–2021–002',
    issuer: 'Inter-college Competition',
    year: '2021',
    title: '2nd Place — Debugging Competition',
    link: '#',
    accent: 'amber',
  },
];

export const journeyTimeline: TimelineNode[] = [
  {
    year: '2019',
    title: 'The Curiosity Phase',
    body: 'Discovered web development in college. Built first static websites with HTML, CSS, JavaScript. Fell in love with creating interactive elements on the web.',
    tag: '2019 · Origin',
    iconName: 'Sparkles',
  },
  {
    year: '2019–2022',
    title: 'Engineering Foundation',
    body: 'Pursued B.Sc Computer Science at ANJAC. Dived deep into data structures, algorithms, Object-Oriented Programming (OOP), and software engineering fundamentals.',
    tag: '2019–2022 · Education',
    iconName: 'BookOpen',
  },
  {
    year: '2021',
    title: 'Leadership & Community',
    body: 'Elected Secretary of Nanotier Computer Science Association. Organized tech events, guest lectures, workshops, and inter-college symposia.',
    tag: '2021 · Leadership',
    iconName: 'Users',
  },
  {
    year: 'Apr 2024',
    title: 'Professional Developer',
    body: 'Joined Pranion Technology as a Full Stack Developer. Worked on Galaxy Renewal (Drupal + CSS animations) and Tripuu (Java + React travel booking app).',
    tag: 'Apr 2024 · Career Start',
    iconName: 'Briefcase',
  },
  {
    year: '2025',
    title: 'AI Exploration',
    body: 'Started exploring AI — built Jarvis-like automation bot in Python, earned Anthropic AI Fluency cert with perfect score. Integrating AI assistant features into projects.',
    tag: '2025 · AI Journey',
    iconName: 'Cpu',
  },
  {
    year: 'Present',
    title: 'Building for Scale',
    body: 'Currently building production-grade web applications at Pranion. Focusing on mastering AI-integrated full-stack systems and high-fidelity React frontend architectures.',
    tag: '2026 · Active',
    iconName: 'Rocket',
  },
];

export const experience: ExperienceEntry = {
  period: 'Apr 2024 – Present',
  title: 'Full Stack Developer',
  company: 'Pranion Technology, Chennai',
  current: true,
  highlights: [
    'Developed Galaxy Renewal portal using Drupal + advanced CSS animations, boosting user engagement.',
    'Built Tripuu travel app with Java + Spring Boot backend, PostgreSQL database, and React frontend.',
    'Reduced CI/CD pipeline build times by 40% through environment and script optimizations.',
    'Maintained and optimized 8+ production applications across insurance and travel domains.',
  ],
  skills: [
    { name: 'Java', percentage: 88 },
    { name: 'Spring Boot', percentage: 82 },
    { name: 'React.js', percentage: 90 },
    { name: 'SQL/PostgreSQL', percentage: 85 },
  ],
};

export const education: EducationEntry = {
  period: '2019 – 2022',
  title: 'B.Sc Computer Science',
  institution: 'Ayya Nadar Janaki Ammal College, Sivakasi',
  score: '75% Aggregate',
  highlights: [
    'Awarded 2nd place in inter-college debugging competition.',
    'Elected Secretary — Nanotier Computer Science Association.',
    'Certified in Google Digital Marketing & E-commerce.',
    'Strong theoretical foundations in DSA, OOP, Database Systems, and Networks.',
  ],
  skills: [
    { name: 'DSA & Algorithms', percentage: 85 },
    { name: 'Object-Oriented Programming', percentage: 82 },
    { name: 'Web Development', percentage: 88 },
    { name: 'Database Systems', percentage: 80 },
  ],
};

export const skillsList: SkillItem[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', iconName: 'Layers' },
  { name: 'TypeScript', category: 'Frontend', iconName: 'FileCode' },
  { name: 'JavaScript', category: 'Frontend', iconName: 'Code2' },
  { name: 'HTML5 / CSS3', category: 'Frontend', iconName: 'FileHtml' },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Wind' },
  
  // Backend
  { name: 'Java', category: 'Backend', iconName: 'Coffee' },
  { name: 'Spring Boot', category: 'Backend', iconName: 'Leaf' },
  { name: 'Node.js', category: 'Backend', iconName: 'Terminal' },
  { name: 'REST APIs', category: 'Backend', iconName: 'Webhook' },
  { name: 'SQL', category: 'Backend', iconName: 'Database' },

  // Database & Tools
  { name: 'PostgreSQL', category: 'Database & Tools', iconName: 'HardDrive' },
  { name: 'MySQL', category: 'Database & Tools', iconName: 'DatabaseBackup' },
  { name: 'Git & GitHub', category: 'Database & Tools', iconName: 'Github' },
  { name: 'Docker', category: 'Database & Tools', iconName: 'Container' },
  { name: 'Linux', category: 'Database & Tools', iconName: 'TerminalSquare' },

  // Soft / Other
  { name: 'Python', category: 'Soft / Other', iconName: 'Binary' },
  { name: 'CI/CD Pipelines', category: 'Soft / Other', iconName: 'GitMerge' },
  { name: 'Firebase', category: 'Soft / Other', iconName: 'Flame' },
  { name: 'Figma', category: 'Soft / Other', iconName: 'Figma' },
  { name: 'Drupal', category: 'Soft / Other', iconName: 'Layout' },
];

export const projects: Project[] = [
  {
    id: 'tripuu',
    number: '01',
    title: 'Tripuu',
    category: 'Full Stack',
    description: 'Travel booking platform engineered with a Java Spring Boot backend and React frontend. Features real-time search, robust PostgreSQL database relations, JWT authorization, and continuous containerized deployments.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    featured: true,
  },
  {
    id: 'galaxy-renewal',
    number: '02',
    title: 'Galaxy Renewal',
    category: 'Frontend',
    description: 'Premium insurance renewal portal custom-crafted with Drupal CMS as backend and an interactive custom React layer featuring fluid micro-animations. Achieved a 40% performance uplift and smooth user transition flows.',
    tags: ['Drupal', 'React', 'CSS Animations', 'motion', 'CMS'],
    featured: false,
  },
  {
    id: 'mlms',
    number: '03',
    title: 'MLMS Lead Management',
    category: 'Full Stack',
    description: 'CRM-style lead tracking and statistics dashboard engineered for multi-level marketing workflow optimization. Features secure role-based access control, rich data analytics, and high-performance MySQL queries.',
    tags: ['Laravel', 'MySQL', 'PHP', 'Livewire', 'CRM'],
    featured: false,
  },
  {
    id: 'ojpms',
    number: '04',
    title: 'OJPMS Performance System',
    category: 'Full Stack',
    description: 'Online job performance management and evaluation engine. Features role management, dynamic evaluation criteria builder, detailed performance reporting, and administrative control panels.',
    tags: ['Laravel', 'Livewire', 'MySQL', 'PHP', 'Dashboard'],
    featured: false,
  },
  {
    id: 'e-commerce-backend',
    number: '05',
    title: 'E-Commerce Core API',
    category: 'Full Stack',
    description: 'Backend web service orchestrating product cataloging, cart caching, secure checkouts, and historical order tracking. Fully responsive admin panel integrated with customized Java spring components.',
    tags: ['Java', 'PostgreSQL', 'REST API', 'React', 'Spring Boot'],
    featured: false,
  },
  {
    id: 'task-app',
    number: '06',
    title: 'Task Management App',
    category: 'Frontend',
    description: 'Kanban-inspired team collaboration board built with real-time state synchronization via Firebase. Includes drag-and-drop mechanics, nested task tags, checklist progress trackers, and user avatars.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Drag & Drop'],
    featured: false,
  },
  {
    id: 'jarvis',
    number: '07',
    title: 'Jarvis Voice Assistant',
    category: 'AI/Automation',
    description: 'AI-powered personal desktop assistant. Features voice command recognition, basic conversational NLP parsing, local system process automation, scraping queries, and structured task dispatching.',
    tags: ['Python', 'NLP', 'Automation', 'Speech Recognition', 'AI'],
    featured: true,
  },
  {
    id: 'meenatchi',
    number: '08',
    title: 'Meenatchi Traders',
    category: 'Full Stack',
    description: 'E-commerce storefront designed for a local distribution merchant. Features lightning-fast React views paired with Firebase firestore, customizable product catalog, and offline checkout requests.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'E-commerce'],
    featured: true,
  },
];
