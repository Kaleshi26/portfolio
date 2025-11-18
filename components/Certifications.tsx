"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { 
  Award, 
  ExternalLink, 
  Calendar,
  Building,
  CheckCircle,
  Star
} from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'from-blue-500 to-cyan-500';
      case 'academic':
        return 'from-green-500 to-emerald-500';
      case 'professional':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technical':
        return '💻';
      case 'academic':
        return '🎓';
      case 'professional':
        return '💼';
      default:
        return '📜';
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
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
            <span className="gradient-text">Certifications & Credentials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and academic achievements that validate my expertise 
            and commitment to continuous learning in technology and computer science.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-xl hover:glow-cyan transition-all duration-300 group"
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(cert.category)} rounded-full flex items-center justify-center text-2xl`}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.category === 'technical' ? 'bg-blue-500/20 text-blue-400' :
                      cert.category === 'academic' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 glass rounded-lg hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>

              {/* Certificate Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 font-medium">{cert.issuer}</span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Certificate Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400">Issued:</span>
                  <span className="text-white font-medium">{cert.issueDate}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-400">ID:</span>
                    <span className="text-white font-mono text-xs">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Credential
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {certifications.length}
            </div>
            <p className="text-gray-400">Total Certifications</p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {certifications.filter(c => c.category === 'technical').length}
            </div>
            <p className="text-gray-400">Technical Certifications</p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {certifications.filter(c => c.category === 'academic').length}
            </div>
            <p className="text-gray-400">Academic Achievements</p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              2024
            </div>
            <p className="text-gray-400">Latest Achievement</p>
          </div>
        </motion.div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Learning Journey */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 gradient-text">My Learning Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Focused Learning</h4>
                <p className="text-gray-400">I choose certifications that align with my career goals and provide practical, industry-relevant skills.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Growth</h4>
                <p className="text-gray-400">Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Community Impact</h4>
                <p className="text-gray-400">I believe in sharing knowledge and helping others in their learning journey through mentorship and collaboration.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Practical Application</h4>
                <p className="text-gray-400">Every certification is followed by hands-on practice and real-world application of the learned concepts.</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Upcoming Certifications */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glass p-8 rounded-xl max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">What's Next?</h3>
            <p className="text-gray-400 mb-6">
              I'm currently working towards additional certifications in cloud computing, 
              machine learning, and advanced web development technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                AWS Solutions Architect
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm">
                Google Cloud Professional
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                Machine Learning Fundamentals
              </span>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
