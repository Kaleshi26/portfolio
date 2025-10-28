"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/skills";
import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  Cloud,
  CheckCircle,
  Star
} from "lucide-react";

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
  { id: 'database', name: 'Database', icon: Database, color: 'from-orange-500 to-red-500' },
  { id: 'devops', name: 'DevOps', icon: Cloud, color: 'from-purple-500 to-pink-500' },
  { id: 'tools', name: 'Tools', icon: Wrench, color: 'from-yellow-500 to-orange-500' }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      react: '⚛️',
      nextjs: '▲',
      typescript: '📘',
      tailwind: '🎨',
      javascript: '🟨',
      html5: '🌐',
      css3: '💎',
      vue: '💚',
      nodejs: '🟢',
      express: '🚀',
      python: '🐍',
      java: '☕',
      spring: '🍃',
      api: '🔌',
      graphql: '🔷',
      mongodb: '🍃',
      postgresql: '🐘',
      mysql: '🐬',
      redis: '🔴',
      docker: '🐳',
      aws: '☁️',
      vercel: '▲',
      git: '📚',
      github: '🐙',
      vscode: '💻',
      figma: '🎨',
      postman: '📮',
      jest: '🧪'
    };
    return iconMap[iconName] || '💻';
  };

  const getProficiencyLevel = (proficiency: number) => {
    if (proficiency >= 90) return { level: 'Expert', color: 'text-green-400', stars: 5 };
    if (proficiency >= 80) return { level: 'Advanced', color: 'text-blue-400', stars: 4 };
    if (proficiency >= 70) return { level: 'Intermediate', color: 'text-yellow-400', stars: 3 };
    if (proficiency >= 60) return { level: 'Beginner', color: 'text-orange-400', stars: 2 };
    return { level: 'Learning', color: 'text-gray-400', stars: 1 };
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to build 
            modern, scalable, and efficient web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'glass text-gray-400 hover:text-white hover:bg-cyan-500/10'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const proficiency = getProficiencyLevel(skill.proficiency);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="glass p-6 rounded-xl hover:glow-cyan transition-all duration-300 cursor-pointer group"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{getSkillIcon(skill.icon)}</div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < proficiency.stars
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className={`text-sm font-semibold ${proficiency.color}`}>
                      {proficiency.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {skill.proficiency}%
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/30 pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">
              {skills.filter(s => s.proficiency >= 80).length}+
            </div>
            <p className="text-gray-400">Advanced Skills</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">
              {skills.length}+
            </div>
            <p className="text-gray-400">Technologies</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">
              {Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}%
            </div>
            <p className="text-gray-400">Average Proficiency</p>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Learning Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Continuous Learning</h4>
                  <p className="text-gray-400">Technology evolves rapidly, and I believe in staying updated with the latest trends and best practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Hands-on Practice</h4>
                  <p className="text-gray-400">I learn best by building real projects and solving actual problems rather than just theoretical knowledge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Community Engagement</h4>
                  <p className="text-gray-400">Contributing to open source and helping others learn is an integral part of my growth journey.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Quality over Quantity</h4>
                  <p className="text-gray-400">I focus on mastering core technologies deeply rather than superficially learning many tools.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
