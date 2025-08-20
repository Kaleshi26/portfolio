"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-teal-400"
      >
        <Image
          src="/me.jpg" // 👈 place your photo in /public/me.jpg
          alt="Kalana Eshan Dharmarathne"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text Info */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-teal-500">
          Kalana Eshan Dharmarathne
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Full-Stack Developer | MERN & Next.js Enthusiast
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a href="mailto:kalanaeshan07@gmail.com" className="hover:text-teal-400">
            📧 Email
          </a>
          <a href="https://www.linkedin.com/in/kalana-dharmarathne-346a48312/" target="_blank" className="hover:text-teal-400">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/Kaleshi26" target="_blank" className="hover:text-teal-400">
            💻 GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
