/**
 * Portfolio Data Configuration
 * CUSTOMIZE: This is the main file where you'll update all your portfolio content
 * Replace all placeholder values with your actual information
 */

import { HeroData } from '../models/hero.model';
import { TechStackItem } from '../models/tech-stack.model';
import { Project } from '../models/project.model';
import { SocialLink } from '../models/social-link.model';

// Hero section - Ido Yahav
export const heroData: HeroData = {
  name: 'Ido Yahav',
  title: 'Software Developer',
  tagline: 'Disciplined problem solver with a strong technical mindset, focused on writing clean code, building reliable solutions, and constantly learning new technologies',
  image: '' // Add profile photo URL here if available
};

// Tech Stack - Ido Yahav
// Proficiency levels: Advanced = 85, Intermediate = 65
export const techStackData: TechStackItem[] = [
  // Frontend
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend', proficiency: 85 },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend', proficiency: 85 },
  { name: 'React', icon: 'react', category: 'Frontend', proficiency: 85 },
  { name: 'HTML5', icon: 'html5', category: 'Frontend', proficiency: 85 },
  { name: 'CSS3', icon: 'css3', category: 'Frontend', proficiency: 85 },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend', proficiency: 65 },
  { name: 'Pug', icon: 'pug', category: 'Frontend', proficiency: 65 },

  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'Backend', proficiency: 85 },
  { name: 'Express', icon: 'express', category: 'Backend', proficiency: 85 },
  { name: 'Python', icon: 'python', category: 'Backend', proficiency: 85 },
  { name: 'Flask', icon: 'flask', category: 'Backend', proficiency: 65 },

  // Databases
  { name: 'MySQL', icon: 'mysql', category: 'Database', proficiency: 85 },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'Database', proficiency: 85 },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database', proficiency: 65 },
  { name: 'Redis', icon: 'redis', category: 'Database', proficiency: 65 },
  { name: 'SQLite', icon: 'sqlite', category: 'Database', proficiency: 65 },

  // DevOps & Tools
  { name: 'Docker', icon: 'docker', category: 'DevOps', proficiency: 65 },
  { name: 'Git/GitHub', icon: 'git', category: 'DevOps', proficiency: 85 },
  { name: 'Linux CLI', icon: 'linux', category: 'DevOps', proficiency: 65 },
  { name: 'Nginx', icon: 'nginx', category: 'DevOps', proficiency: 65 },
  { name: 'AWS', icon: 'aws', category: 'DevOps', proficiency: 65 },
  { name: 'Vite', icon: 'vite', category: 'DevOps', proficiency: 65 },
  { name: 'npm', icon: 'npm', category: 'DevOps', proficiency: 85 },

  // APIs
  { name: 'REST APIs', icon: 'api', category: 'Other', proficiency: 85 },
  { name: 'MCP-based APIs', icon: 'api', category: 'Other', proficiency: 65 },

  // Development Tools
  { name: 'VS Code', icon: 'vscode', category: 'Tools', proficiency: 85 },
  { name: 'Postman', icon: 'postman', category: 'Tools', proficiency: 65 }
];

// Projects - Customize your projects here
// 
// HOW TO ADD/MODIFY PROJECTS:
// 1. Add your project screenshot images to: src/assets/images/
// 2. Update the projectsData array below with your project information
// 3. Recommended image size: 800x600px or similar aspect ratio
// 4. You can add as many projects as you want - the grid will automatically adjust!
//
// PROJECT STRUCTURE:
// - id: Unique identifier (string)
// - title: Project name
// - description: What the project does, key features, technologies used
// - image: Path to screenshot (e.g., 'assets/images/project1.png')
// - technologies: Array of technology names used in the project
// - links: Object with optional demo and github URLs
//
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'ShopiSense (Shopify - SaaS)',
    description: 'ShopiSense is an MCP-based SaaS platform for Shopify that transforms static online stores into adaptive experiences. It analyzes real-time user behavior, remembers returning visitors, and dynamically personalizes products and content based on each shopper’s evolving preferences — increasing relevance, engagement, and conversion. Behind the scenes, it functions like a quiet digital sales assistant, continuously learning from user interactions and improving the shopping experience in a positive, user-centric way, without the customer ever being consciously aware of it.',
    image: 'assets/images/ShopiSense.jpeg',
    technologies: [
      'Python',
      'FastAPI',
      'Uvicorn',
      'Pydantic',
      'SQLAlchemy',
      'PostgreSQL',
      'Alembic',
      'Redis',
      'Celery',
      'Shopify API',
      'scikit-learn',
      'XGBoost',
      'Implicit (ALS)',
      'NumPy',
      'SciPy',
      'HTTPX',
      'Cryptography (Fernet)',
      'pytest',
      'Model Context Protocol (MCP)',
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-2',
    title: 'Weezer - Social Network',
    description: 'Weezer is a social networking platform inspired by Twitter, built for real-time sharing, conversations, and community interaction. Users can post short updates, engage with others through likes and comments, and follow topics and people in a fast, streamlined experience.',
    image: 'assets/images/weezer_social_network.png',
    technologies: [
      'TypeScript',
      'React',
      'Node.js (Express)',
      'MySQL',
      'Redux Toolkit',
      'React Context API',
      'Socket.IO',
      'Stripe',
      'AWS S3',
      'OpenAI API',
      'Passport OAuth',
      'Jest & Supertest',
      'Cloudinary',
      'JWT Authentication',
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-3',
    title: 'Holidex',
    description: 'A vacation booking platform similar to Gulliver, where users can browse vacations and like their favorites, with an admin user and dedicated admin interface to add, edit, and delete vacations and users.',
    image: 'assets/images/holidex.png',
    technologies: [
      'React',
      'TypeScript',
      'Node.js (Express)',
      'MySQL',
      'Sequelize ORM',
      'Socket.IO',
      'JWT Authentication',
      'Redux Toolkit',
      'React Context API',
      'AWS S3',
      'Joi',
      'Jest & Supertest',
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-4',
    title: 'Handy Count',
    description: 'Hand Finger Counter with Voice Feedback Real-time computer vision Python project that detects hands via webcam, counts fingers, recognizes basic gestures, and provides voice feedback using text-to-speech.',
    image: 'assets/images/Handy_count.png',
    technologies: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'NumPy',
      'pyttsx3'
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-4',
    title: 'Rateon',
    description: 'Rateon is a real-time cryptocurrency tracking web app that streams live market data via WebSockets, enabling users to monitor prices, compare multiple coins, and visualize trends interactively in real time.',
    image: 'assets/images/Rateon.png',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (Vanilla)',
      'Bootstrap 5',
      'Chart.js',
      'WebSocket',
      'CoinCap API',
      'Binance WebSocket Streams',
      'LocalStorage'
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-codequest',
    title: 'CodeQuest JS',
    description: 'CodeQuest JS is a full-stack gamified mobile learning platform for iPhone that teaches JavaScript, HTML, and CSS through interactive challenges. Features a structured curriculum with adaptive difficulty based on user experience level, six exercise types including drag-and-drop code building and live bug detection, and a real-time 1v1 competitive Duel Mode that matches players worldwide via WebSockets for timed JS challenges.',
    image: 'assets/images/mcp_files.png',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js (Express)',
      'PostgreSQL',
      'Prisma ORM',
      'Socket.IO',
      'Zustand',
      'React Query',
      'React Navigation',
      'Reanimated',
      'JWT Authentication',
      'Zod',
      'Docker',
    ],
    links: {
      demo: '',
      github: ''
    }
  },
  {
    id: 'project-4',
    title: 'NoteHub',
    description: 'Task Board Manager is a small frontend project focused on DOM manipulation. It allows users to add, render, and remove task notes dynamically, with data persisted in localStorage.',
    image: 'assets/images/NoteHUb.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'DOM Manipulation',
      'LocalStorage',
      'Bootstrap'
    ],
    links: {
      demo: '',
      github: ''
    }
  }
];


// Social Links & Contact - Ido Yahav 
export const socialLinksData: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/IdoY12',
    icon: 'github',
    label: 'Visit Ido Yahav\'s GitHub profile'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/idoyahav/',
    icon: 'linkedin',
    label: 'Connect with Ido Yahav on LinkedIn'
  },
  {
    platform: 'Email',
    url: 'mailto:idoyahav15@gmail.com',
    icon: 'email',
    label: 'Send an email to Ido Yahav'
  },
  {
    platform: 'Phone',
    url: 'tel:050-545-4225',
    icon: 'phone',
    label: 'Call Ido Yahav at 050-545-4225'
  }
];
