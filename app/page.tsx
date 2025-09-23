
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "resume", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 text-white backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-xl font-bold text-teal-400">Kalana</h1>
          <ul className="flex gap-6 text-sm font-medium">
            {["projects", "resume", "contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className={`transition-colors ${
                    active === link
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "hover:text-teal-300"
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto pt-32 px-6"
      >
        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="uppercase text-sm tracking-widest text-gray-500 dark:text-gray-400">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Hi, I’m <span className="text-teal-500">Kalana Eshan</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              a Professional Coder.
            </span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg">
            I specialize in building modern web apps with MERN and Next.js,
            turning creative ideas into interactive, user-friendly experiences.
          </p>

          {/* Socials */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="mailto:kalanaeshan07@gmail.com"
              className="hover:text-teal-400"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/Kaleshi26"
              target="_blank"
              className="hover:text-teal-400"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kalana-dharmarathne-346a48312/"
              target="_blank"
              className="hover:text-teal-400"
            >
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Side: Big Full Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1 h-[70vh] md:h-[80vh] flex justify-center md:justify-end"
        >
          <Image
            src="/me.png" // 👈 make sure your transparent PNG is here
            alt="Kalana Eshan Dharmarathne"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}
