// About Section
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold"
      >
        About Me
      </motion.h2>

      {/* Animated Gradient Line */}
      <div className="mt-2 h-1 w-40 bg-gradient-to-r from-pink-500 via-yellow-400 to-teal-400 rounded-full animate-pulse"></div>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        I am a passionate Full-Stack Developer with experience in building
        responsive and modern web applications using MERN stack and Next.js.
        I love turning creative ideas into interactive digital experiences.
      </motion.p>
    </section>
  );
}
