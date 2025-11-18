"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { academicData, overallGPA, currentYear, currentSemester } from "@/data/academics";
import { 
  GraduationCap, 
  BookOpen, 
  TrendingUp,
  Award,
  Calendar,
  BarChart3,
  Target,
  Star
} from "lucide-react";

export default function Academics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState(academicData[0]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400 bg-green-500/20';
      case 'A-': return 'text-green-300 bg-green-500/15';
      case 'B+': return 'text-blue-400 bg-blue-500/20';
      case 'B': return 'text-blue-300 bg-blue-500/15';
      case 'B-': return 'text-yellow-400 bg-yellow-500/20';
      case 'C+': return 'text-yellow-300 bg-yellow-500/15';
      case 'C': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.7) return 'text-green-400';
    if (gpa >= 3.3) return 'text-blue-400';
    if (gpa >= 3.0) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core': return '💻';
      case 'elective': return '📚';
      case 'general': return '🔬';
      default: return '📖';
    }
  };

  return (
    <section id="academics" className="py-20 relative">
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
            <span className="gradient-text">Academic Performance</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My academic journey at the University of Peradeniya, showcasing consistent performance 
            and dedication to excellence in Computer Science education.
          </p>
        </motion.div>

        {/* Academic Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="glass p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {currentYear}
            </div>
            <p className="text-gray-400">Current Year</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className={`text-3xl font-bold mb-2 ${getGPAColor(overallGPA)}`}>
              {overallGPA}
            </div>
            <p className="text-gray-400">Overall GPA</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {academicData.reduce((total, year) => total + year.modules.length, 0)}
            </div>
            <p className="text-gray-400">Modules Completed</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">
              {currentSemester}
            </div>
            <p className="text-gray-400">Current Semester</p>
          </div>
        </motion.div>

        {/* Year Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {academicData.map((year) => (
            <motion.button
              key={`${year.year}-${year.semester}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedYear.year === year.year && selectedYear.semester === year.semester
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'glass text-gray-400 hover:text-white hover:bg-cyan-500/10'
              }`}
            >
              {year.year} - Semester {year.semester}
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Year Details */}
        <motion.div
          key={`${selectedYear.year}-${selectedYear.semester}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass p-8 rounded-xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedYear.year} - Semester {selectedYear.semester}
                </h3>
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-bold ${getGPAColor(selectedYear.gpa)}`}>
                    GPA: {selectedYear.gpa}
                  </span>
                  <span className="text-gray-400">
                    {selectedYear.modules.length} Modules
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Semester Performance</div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-semibold text-white">
                    {selectedYear.modules.filter(m => m.grade === 'A' || m.grade === 'A-').length}/
                    {selectedYear.modules.length} A Grades
                  </span>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedYear.modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass p-6 rounded-lg hover:glow-cyan transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getCategoryIcon(module.category)}</span>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {module.code}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {module.credits} Credits
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(module.grade)}`}>
                      {module.grade}
                    </span>
                  </div>
                  
                  <h5 className="text-white font-medium mb-2">
                    {module.name}
                  </h5>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      GPA: {module.gpa}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      module.category === 'core' ? 'bg-blue-500/20 text-blue-400' :
                      module.category === 'elective' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {module.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Performance Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Grade Distribution */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              Grade Distribution
            </h3>
            <div className="space-y-4">
              {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'].map((grade) => {
                const count = academicData.reduce((total, year) => 
                  total + year.modules.filter(m => m.grade === grade).length, 0
                );
                const total = academicData.reduce((total, year) => total + year.modules.length, 0);
                const percentage = total > 0 ? (count / total) * 100 : 0;
                
                return (
                  <div key={grade} className="flex items-center gap-4">
                    <span className={`w-12 text-center px-2 py-1 rounded text-sm font-bold ${getGradeColor(grade)}`}>
                      {grade}
                    </span>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{count} modules</span>
                        <span className="text-white">{percentage.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className={`h-2 rounded-full ${
                            grade === 'A' ? 'bg-green-500' :
                            grade === 'A-' ? 'bg-green-400' :
                            grade === 'B+' ? 'bg-blue-500' :
                            grade === 'B' ? 'bg-blue-400' :
                            grade === 'B-' ? 'bg-yellow-500' :
                            grade === 'C+' ? 'bg-yellow-400' :
                            'bg-orange-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Goals */}
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-cyan-400" />
              Academic Goals
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Maintain Excellence</h4>
                  <p className="text-gray-400">Keep GPA above 3.5 and continue achieving A grades in core subjects.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Expand Knowledge</h4>
                  <p className="text-gray-400">Take advanced electives in AI, machine learning, and software engineering.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Research Projects</h4>
                  <p className="text-gray-400">Engage in research projects and publish papers in computer science.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Leadership</h4>
                  <p className="text-gray-400">Take on leadership roles in student organizations and tech communities.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Academic Philosophy */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 gradient-text">My Academic Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Deep Understanding</h4>
                <p className="text-gray-400">I focus on understanding concepts deeply rather than memorizing, ensuring long-term retention and practical application.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-400">Learning doesn't stop at the classroom. I actively seek additional resources and stay updated with industry trends.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Collaborative Learning</h4>
                <p className="text-gray-400">I believe in learning with and from peers, sharing knowledge, and building a supportive academic community.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Goal-Oriented</h4>
                <p className="text-gray-400">Every course and project is aligned with my career goals, ensuring maximum value from my academic journey.</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
