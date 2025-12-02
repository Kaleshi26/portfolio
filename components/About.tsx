"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Code, Trophy, MapPin, Calendar } from "lucide-react";

const timelineData = [
  {
    year: "2017",
    title: "Kandy District Cricket Team",
    description: "Represented Kandy District in cricket, developing teamwork and discipline skills that would later benefit my programming journey.",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    year: "2022",
    title: "A/L Physical Science Stream",
    description: "Completed Advanced Level examinations in Physical Science stream, building a strong foundation in mathematics and physics.",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    year: "2023",
    title: "University Journey Begins",
    description: "Joined Sri Lanka Institute of Information Technology(SLIIT) and chose software engineering specialization, marking the beginning of my formal computer science education.",
    icon: GraduationCap,
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Dived deep into modern web development, mastering React, Next.js, and backend technologies while maintaining excellent academic performance.",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

const educationData = {
  university: "Sri Lanka Institute of Information Technology (SLIIT)",
  degree: "BSc (Hons) in Information Technology (Software Engineering)",
  currentYear: "3rd Year",
  gpa: "3.69",
  location: "Malabe, Sri Lanka",
  startYear: "2023",
  expectedGraduation: "Present"
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed w-full !text-center">
            From cricket fields to code repositories, my journey has been about passion, 
            dedication, and continuous learning. Here's my story of transformation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">My Journey</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  My journey into technology began unexpectedly. As a cricket player for the Kandy District Team in 2017, 
                  I learned the importance of teamwork, strategy, and continuous improvement. These values became the 
                  foundation of my approach to software development.
                </p>
                <p>
                  After completing my A/Ls in the Physical Science stream, I was drawn to the logical thinking and 
                  problem-solving aspects of mathematics and physics. This naturally led me to choose software engineering as my specialization at SLIIT.
                </p>
                <p>
                  Today, I'm a passionate full-stack developer who loves building innovative web applications. 
                  My background in physical sciences gives me a unique perspective on problem-solving, while my 
                  cricket experience has taught me the value of collaboration and persistence in achieving goals.
                </p>
              </div>
            </div>

            {/* Current Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 rounded-2xl border border-cyan-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Current Education</h3>
                  <p className="text-gray-400">Sri Lanka Institute of Information Technology</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{educationData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">{educationData.startYear} - {educationData.expectedGraduation}</span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg">
                <p className="text-cyan-400 font-semibold">{educationData.degree}</p>
                <p className="text-gray-300">{educationData.currentYear} • GPA: {educationData.gpa}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Timeline</h3>
            
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 p-3 ${item.bgColor} rounded-full border-2 border-gray-800`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                      <div className="h-px bg-gradient-to-r from-cyan-500 to-transparent flex-1"></div>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Why IT Section */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Why I Chose IT</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Problem Solving</h4>
                <p className="text-gray-400">I love breaking down complex problems into manageable solutions, just like strategizing in cricket.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                <p className="text-gray-400">Technology allows me to create solutions that can impact millions of people worldwide.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-400">The field evolves rapidly, offering endless opportunities to learn and grow.</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
