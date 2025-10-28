export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'university' | 'personal' | 'hackathon';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and secure payment integration.',
    longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard. Includes real-time inventory management and order tracking.',
    image: '/projects/ecommerce.svg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB', 'NextAuth.js'],
    githubUrl: 'https://github.com/Kaleshi26/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    category: 'university',
    featured: true
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    longDescription: 'A modern task management application with drag-and-drop functionality, real-time collaboration, file attachments, and progress tracking. Built with React and Firebase for real-time synchronization.',
    image: '/projects/taskmanager.svg',
    techStack: ['React', 'Firebase', 'Material-UI', 'Redux Toolkit', 'React DnD'],
    githubUrl: 'https://github.com/Kaleshi26/task-manager',
    liveUrl: 'https://taskmanager-demo.netlify.app',
    category: 'personal',
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    longDescription: 'A responsive weather dashboard that provides current conditions, 7-day forecasts, and interactive weather maps. Features location-based services and beautiful data visualizations.',
    image: '/projects/weather.svg',
    techStack: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    githubUrl: 'https://github.com/Kaleshi26/weather-dashboard',
    liveUrl: 'https://weather-demo.vercel.app',
    category: 'personal',
    featured: false
  },
  {
    id: 'library-system',
    title: 'Library Management System',
    description: 'Complete library management solution for educational institutions.',
    longDescription: 'A comprehensive library management system with book cataloging, member management, borrowing system, and automated notifications. Built for university coursework with focus on database design and system architecture.',
    image: '/projects/library.svg',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap', 'JSP'],
    githubUrl: 'https://github.com/Kaleshi26/library-management',
    category: 'university',
    featured: false
  }
];
