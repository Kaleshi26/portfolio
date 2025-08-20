"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold text-teal-500">Kalana</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><Link href="#projects" className="hover:text-teal-400">Projects</Link></li>
            <li><Link href="#resume" className="hover:text-teal-400">Resume</Link></li>
            <li><Link href="#contact" className="hover:text-teal-400">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto pt-32 px-6">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="uppercase text-sm tracking-widest text-gray-500">Welcome to my world</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Hi, I’m <span className="text-teal-500">Kalana Eshan</span><br />
            <span className="text-gray-800 dark:text-gray-200">a Professional Coder.</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg">
            I specialize in building modern web apps with MERN and Next.js, turning creative ideas
            into interactive, user-friendly experiences.
          </p>

          {/* Socials */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="mailto:kalanaeshan07@gmail.com" className="hover:text-teal-400">📧 Email</a>
            <a href="https://github.com/Kaleshi26" target="_blank" className="hover:text-teal-400">💻 GitHub</a>
            <a href="https://www.linkedin.com/in/kalana-dharmarathne-346a48312/" target="_blank" className="hover:text-teal-400">🔗 LinkedIn</a>
          </div>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <Image
            src="/me.png"  // 👈 your photo (transparent background PNG) goes here
            alt="Kalana Eshan Dharmarathne"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}
