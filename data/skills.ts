export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  proficiency: number; // 1-100
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 90, icon: 'react', color: 'bg-blue-500' },
  { name: 'Next.js', category: 'frontend', proficiency: 50, icon: 'nextjs', color: 'bg-gray-800' },
  { name: 'TypeScript', category: 'frontend', proficiency: 80, icon: 'typescript', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 95, icon: 'tailwind', color: 'bg-cyan-500' },
  { name: 'JavaScript', category: 'frontend', proficiency: 90, icon: 'javascript', color: 'bg-yellow-500' },
  { name: 'HTML5', category: 'frontend', proficiency: 95, icon: 'html5', color: 'bg-orange-500' },
  { name: 'CSS3', category: 'frontend', proficiency: 90, icon: 'css3', color: 'bg-blue-500' },
  { name: 'Vue.js', category: 'frontend', proficiency: 40, icon: 'vue', color: 'bg-green-500' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 85, icon: 'nodejs', color: 'bg-green-600' },
  { name: 'Express.js', category: 'backend', proficiency: 80, icon: 'express', color: 'bg-gray-600' },
  { name: 'Python', category: 'backend', proficiency: 15, icon: 'python', color: 'bg-yellow-600' },
  { name: 'Java', category: 'backend', proficiency: 70, icon: 'java', color: 'bg-red-600' },
  { name: 'Spring Boot', category: 'backend', proficiency: 65, icon: 'spring', color: 'bg-green-500' },
  { name: 'REST APIs', category: 'backend', proficiency: 85, icon: 'api', color: 'bg-purple-500' },
  { name: 'GraphQL', category: 'backend', proficiency: 60, icon: 'graphql', color: 'bg-pink-500' },

  // Database
  { name: 'MongoDB', category: 'database', proficiency: 80, icon: 'mongodb', color: 'bg-green-500' },
  { name: 'PostgreSQL', category: 'database', proficiency: 75, icon: 'postgresql', color: 'bg-blue-600' },
  { name: 'MySQL', category: 'database', proficiency: 80, icon: 'mysql', color: 'bg-orange-500' },
  { name: 'Redis', category: 'database', proficiency: 60, icon: 'redis', color: 'bg-red-500' },

  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 70, icon: 'docker', color: 'bg-blue-500' },
  { name: 'AWS', category: 'devops', proficiency: 10, icon: 'aws', color: 'bg-orange-500' },
  { name: 'Vercel', category: 'devops', proficiency: 35, icon: 'vercel', color: 'bg-black' },
  { name: 'Git', category: 'devops', proficiency: 90, icon: 'git', color: 'bg-orange-600' },
  { name: 'GitHub Actions', category: 'devops', proficiency: 70, icon: 'github', color: 'bg-gray-800' },

  // Tools
  { name: 'VS Code', category: 'tools', proficiency: 95, icon: 'vscode', color: 'bg-blue-500' },
  { name: 'Figma', category: 'tools', proficiency: 70, icon: 'figma', color: 'bg-purple-500' },
  { name: 'Postman', category: 'tools', proficiency: 80, icon: 'postman', color: 'bg-orange-500' },
  { name: 'Jest', category: 'tools', proficiency: 75, icon: 'jest', color: 'bg-red-500' }
];
