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
    id: 'tourtales-java-servlet',
    title: 'TourTales – Multi-Role Tour Guide System (Java EE)',
    description: 'A full-stack web application for tour booking, vehicle assignment, and user management using Java Servlets and MySQL.',
    longDescription: 'TourTales is a complete web application built on the Java Servlet and JSP standard, running on Apache Tomcat. It features a complex multi-role system (Customer, Tour Guide, Admin/Staff) with secure login and specific dashboards for each. Core functionality includes package and vehicle management, a full booking and payment flow, and an internal messaging system for real-time communication between all user roles. JDBC is used for database connectivity with MySQL.',
    image: '/projects/tourtales.png', // Suggest using a custom image path
    techStack: ['Java Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat', 'HTML/CSS'],
    githubUrl: 'https://github.com/Kaleshi26/TourTales',
    liveUrl: '', // No live demo URL provided in the README
    category: 'university',
    featured: false // Marking as true due to its large scope (full-stack, multi-role, booking system)
  },
  {
    id: 'jobsea-app',
    title: 'JobSea – Job Search Mobile UI (Kotlin)',
    description: 'A modern, UI/UX-focused Android app concept for job discovery, onboarding, and status tracking.build using Kotlin in Android Studio',
    longDescription: 'A complete, multi-screen Android application built purely for UI/UX demonstration using Kotlin in Android Studio. Features a full user flow: multi-step onboarding, registration/sign-in, a home screen with job browsing by category, dedicated search/filter, and status tracking screens. Focuses on Material Design principles, clean architecture (Activities/Views), and meticulous resource management.',
    image: '/projects/jobsea.png', // Suggest using a custom image path
    techStack: ['Kotlin', 'Android Studio', 'ConstraintLayout', 'Material Design', 'XML'],
    githubUrl: 'https://github.com/Kaleshi26/JobFinder_App.git',
    liveUrl: 'https://vimeo.com/1138993591?fl=ip&fe=ec', // Linking to the Figma prototype as the 'Live Demo'
    category: 'university',
    featured: false // Marking as false since you have four featured already
  },
  {
    id: 'belleza-fashion-store',
    title: 'Belleza – Server-Rendered PHP E-commerce',
    description: 'Full-stack fashion store with an admin panel, product management, and simple cart/checkout logic.',
    longDescription: 'A complete e-commerce platform built using plain PHP and MySQL (mysqli). The architecture utilizes server-side rendering with shared header/footer components and PHP sessions for authentication and cart state. Features include multi-page public browsing, user account management (using md5 hashing for passwords), a full cart/checkout flow, and a secure admin panel for managing products, viewing orders, and displaying simple sales charts via Chart.js.',
    image: '/projects/belleza.png', // Suggest using a custom image path
    techStack: ['PHP', 'MySQL (mysqli)', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    githubUrl: 'https://github.com/Kaleshi26/Belleza-Fashion-Store',
    liveUrl: '', // No live demo URL provided in the audit or README
    category: 'university',
    featured: false // Marking as false to maintain the existing four featured projects
  },
  {
    id: 'smartspendy-kotlin',
    title: 'SmartSpendy – Android Finance Tracker (Kotlin)',
    description: 'Offline-first expense tracker with budgeting, categories, and local backup/restore.this is Native Android app built with Kotlin',
    longDescription: 'Native Android app built with Kotlin. Users manage income/expenses, set monthly budgets with notifications, categorize spending, and back up/restore data via JSON or text files using SharedPreferences and internal storage.',
    image: '/projects/finan.png',
    techStack: ['Kotlin', 'Android Studio', 'SharedPreferences', 'Notifications'],
    githubUrl: 'https://github.com/Kaleshi26/SmartSpendy_App',
    liveUrl: 'https://vimeo.com/1138999936?fl=ip&fe=ec',
    category: 'university',
    featured: true
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
    liveUrl: 'https://vimeo.com/1139806894?fl=ip&fe=ec',
    category: 'university',
    featured: true
  },
  {
    id: 'smart-waste-management',
    title: 'Smart Waste Management System',
    description: 'A multi-role municipal waste management system (Full-stack platform) with Spring Boot and React for PAYT billing, IoT data, and analytics.',
    longDescription: 'A multi-role municipal waste management system integrating IoT sensors, real-time monitoring, and a Pay-As-You-Throw billing model. Backend with Spring Boot (JWT security, SOLID principles) and PostgreSQL; frontend with React + Vite and Chart.js analytics; includes PayHere payment gateway and exportable reports.',
    image: '/projects/waste.png',
    techStack: ['Java 17', 'Spring Boot', 'Spring Security (JWT)', 'React', 'Vite', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com/Kaleshi26/Smart-Waste-Management',
    liveUrl: 'https://vimeo.com/1139998121?fl=ip&fe=ec',
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
    liveUrl: 'https://vimeo.com/1139742593?fl=ip&fe=ec',
    category: 'university',
    featured: true
  },
  {
    id: 'on-demand-skills-app-mern-docker',
    title: 'Service Marketplace (MERN + Docker)',
    description: 'A full-featured service marketplace connecting customers and providers with real-time chat, payments, and role-based management.',
    longDescription: 'A robust, containerized marketplace platform built on the MERN stack (MongoDB, Express, React, Node.js). It supports a multi-role system (Customer, Provider, Admin) with distinct dashboards. Key features include real-time messaging using Socket.IO, secure payment integration via Stripe, comprehensive file uploads, and a detailed review/rating system. The entire application is fully containerized using Docker and Docker Compose for streamlined development and production deployment.',
    image: '/projects/skills-app.png', // Placeholder (as requested)
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Stripe', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/Kaleshi26/on-demand-skills-app.git',
    liveUrl: '', // To be filled if you deploy a live demo
    category: 'personal',
    featured: false
  },
  {
    id: 'microsaas-shop-microservices',
    title: 'MicroSaaS Shop (Next.js/NestJS Microservices)',
    description: 'A production-grade e-commerce platform demonstrating a full microservices architecture, event streaming, and comprehensive observability (Kafka, OpenSearch, Prometheus).',
    longDescription: 'A cutting-edge, full-stack e-commerce solution built with Next.js 14 (Frontend) and NestJS (Backend). It implements a robust microservices architecture using gRPC for inter-service communication and Kafka for real-time event streaming. Advanced features include OpenSearch for lightning-fast full-text search, Stripe for payments, and a professional observability stack featuring Prometheus for metrics and Grafana for dashboard visualization. The project emphasizes modern patterns like Feature Flags (Unleash) and Edge Caching (Cloudflare Workers).',
    image: '/projects/microsaas-shop.png', // Placeholder
    techStack: ['Next.js 14', 'NestJS', 'PostgreSQL', 'Kafka', 'OpenSearch', 'Prometheus', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com/Kaleshi26/microsaas-shop.git',
    liveUrl: '', // To be filled if you deploy a live demo
    category: 'personal',
    featured: false
  },
  {
    id: 'intellicontent-ai-saas',
    title: 'IntelliContent – AI SaaS Content Platform (FastAPI/React)',
    description: 'A premium, AI-powered content generation SaaS platform with multi-model support, RBAC, detailed analytics, and robust export features.',
    longDescription: 'A full-stack, monorepo SaaS application for generating, managing, and sharing multi-format content (blogs, code, emails, translations). The backend is built with FastAPI (Python) and PostgreSQL, handling multi-model AI generation (OpenAI, Anthropic), rate limiting, caching, and admin functions (RBAC). The frontend uses React with MUI and Framer Motion to deliver a modern, accessible, and high-performance glassmorphism UI/UX, complete with analytics dashboards and various export options.',
    image: '/projects/intellicontent.png', // Placeholder
    techStack: ['FastAPI', 'React', 'MUI', 'Framer Motion', 'PostgreSQL', 'OpenAI API', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/Kaleshi26/intellicontent.git',
    liveUrl: '', // To be filled if you deploy a live demo
    category: 'personal',
    featured: false
  }
];
