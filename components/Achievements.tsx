"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { achievements } from "@/data/achievements";
import { 
  Trophy, 
  Star, 
  Award, 
  Calendar,
  ExternalLink,
  Github,
  Heart
} from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hacktoberfestBadges = achievements.filter(achievement => achievement.category === 'hacktoberfest');
  const otherAchievements = achievements.filter(achievement => achievement.category !== 'hacktoberfest');

  return (
    <section id="achievements" className="py-20 relative">
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
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            Celebrating milestones in my journey, from open source contributions to academic excellence 
            and sports achievements. Each badge represents dedication, learning, and growth.
          </p>
        </motion.div>

        {/* Hacktoberfest 2025 Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Hacktoberfest 2025</h3>
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-lg text-gray-400 max-w-2xl text-center">
                Successfully completed Hacktoberfest 2025, contributing to open source projects 
                and earning recognition for my contributions to the developer community.
              </p>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-6 gap-x-6">
            {hacktoberfestBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer min-w-0"
              >
                <div className="glass p-4 rounded-xl hover:glow-cyan transition-all duration-300 text-center h-full">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <Image
                      src={badge.image}
                      alt={badge.alt}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {badge.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-16 block" aria-hidden="true"></div>

          {/* Hacktoberfest Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {hacktoberfestBadges.length}
              </div>
              <p className="text-gray-400">Badges Earned</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                Supercontributor
              </div>
              <p className="text-gray-400">Highest Level</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                2025
              </div>
              <p className="text-gray-400">Year</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Other Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Academic Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-xl hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Dean's List</h4>
                  <p className="text-gray-400">Academic Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Recognized for outstanding academic performance in Computer Science program 
                at University of Peradeniya, maintaining a GPA of 3.6+.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                <Calendar className="w-4 h-4" />
                2024
              </div>
            </motion.div>

            {/* Cricket Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-xl hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Kandy District Team</h4>
                  <p className="text-gray-400">Cricket Player</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Represented Kandy District in cricket competitions, developing leadership, 
                teamwork, and strategic thinking skills that benefit my programming career.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                <Calendar className="w-4 h-4" />
                2017
              </div>
            </motion.div>

            {/* Open Source Contribution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-xl hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Open Source</h4>
                  <p className="text-gray-400">Contributor</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Active contributor to various open source projects, helping improve 
                developer tools and libraries used by thousands of developers worldwide.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                <Heart className="w-4 h-4" />
                Ongoing
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-full h-32 block" aria-hidden="true"></div>

        {/* Achievement Philosophy */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 gradient-text">My Achievement Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Goal-Oriented</h4>
                <p className="text-gray-400">Every achievement starts with a clear goal and a plan to reach it.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Continuous Growth</h4>
                <p className="text-gray-400">I believe in constant learning and pushing beyond comfort zones.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Community Impact</h4>
                <p className="text-gray-400">The best achievements are those that help others grow too.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Resilience</h4>
                <p className="text-gray-400">Success comes from persistence and learning from failures.</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
