"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-200 dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors">
      <h1 className="text-2xl font-bold text-teal-500">MyPortfolio</h1>
      <div className="flex items-center space-x-6">
        <Link href="#about" className="hover:text-teal-400">About</Link>
        <Link href="#projects" className="hover:text-teal-400">Projects</Link>
        <Link href="#contact" className="hover:text-teal-400">Contact</Link>
        
        {/* Dark/Light Mode Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 rounded-lg border border-gray-400 dark:border-gray-600"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        )}
      </div>
    </nav>
  );
}
