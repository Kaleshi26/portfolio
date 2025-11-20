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
  ,
  {
    id: 'ecoconnect-app',
    title: 'EcoConnect – Environmental Initiative Platform',
    description: 'Role-based React Native app connecting volunteers, organizers, sponsors, collectors, and researchers.',
    longDescription: 'EcoConnect is a comprehensive, role-based mobile application built with Expo (React Native) and TypeScript. It features Firebase Auth, Firestore, and Storage, Expo Router for file-based navigation, NativeWind for styling, and contexts for Auth, Currency, and Notifications. Supports image uploads and key Expo APIs (Camera, Location, Image Picker, Notifications).',
    image: '/projects/ecoC.png',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase Auth', 'Firestore', 'Expo Router', 'NativeWind'],
    githubUrl: 'https://github.com/Kaleshi26/EcoConnect-App',
    liveUrl: '',
    category: 'university',
    featured: true
  },
  {
    id: 'smart-waste-management',
    title: 'Smart Waste Management System',
    description: 'Full-stack platform with Spring Boot and React for PAYT billing, IoT data, and analytics.',
    longDescription: 'A multi-role municipal waste management system integrating IoT sensors, real-time monitoring, and a Pay-As-You-Throw billing model. Backend with Spring Boot (JWT security, SOLID principles) and PostgreSQL; frontend with React + Vite and Chart.js analytics; includes PayHere payment gateway and exportable reports.',
    image: '/projects/waste.png',
    techStack: ['Java 17', 'Spring Boot', 'Spring Security (JWT)', 'React', 'Vite', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com/Kaleshi26/Smart-Waste-Management',
    liveUrl: '',
    category: 'university',
    featured: true
  },
  {
    id: 'campease-mern',
    title: 'CampEase – Camping Gear Rental (MERN)',
    description: 'End-to-end rental platform with role-based dashboards, payments, and notifications.',
    longDescription: 'CampEase is a full-stack MERN application for managing camping gear rentals. Customers can browse, reserve, and pay; admins and staff manage users, inventory, reservations, finance, and marketing. Includes secure payments and email/SMS notifications.',
    image: '/projects/campE.png',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Kaleshi26/Camping-Gear-Rental',
    liveUrl: '',
    category: 'university',
    featured: true
  },
  {
    id: 'smartspendy-kotlin',
    title: 'SmartSpendy – Android Finance Tracker (Kotlin)',
    description: 'Offline-first expense tracker with budgeting, categories, and local backup/restore.',
    longDescription: 'Native Android app built with Kotlin. Users manage income/expenses, set monthly budgets with notifications, categorize spending, and back up/restore data via JSON or text files using SharedPreferences and internal storage.',
    image: '/projects/android.svg',
    techStack: ['Kotlin', 'Android Studio', 'SharedPreferences', 'Notifications'],
    githubUrl: 'https://github.com/Kaleshi26/SmartSpendy_App',
    liveUrl: '',
    category: 'university',
    featured: false
  }
];
