// app/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-32 px-6">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-teal-500">Kalana Eshan</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg">
          Full-Stack Developer specializing in MERN & Next.js. I turn creative ideas into interactive web apps.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a href="mailto:kalanaeshan07@gmail.com" className="hover:text-teal-400">📧 Email</a>
          <a href="https://github.com/Kaleshi26" target="_blank" className="hover:text-teal-400">💻 GitHub</a>
          <a href="https://linkedin.com/in/kalana-dharmarathne-346a48312" target="_blank" className="hover:text-teal-400">🔗 LinkedIn</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex-1 h-[70vh] md:h-[80vh] flex justify-center md:justify-end"
      >
        <Image
          src="/me.png"
          alt="Kalana Eshan"
          fill
          className="object-contain rounded-2xl shadow-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
