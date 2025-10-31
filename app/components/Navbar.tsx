"use client";
import { useEffect, useState } from "react";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "academics", "projects", "contact"];
      const scrollPos = window.scrollY + 150;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(sec);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "academics", label: "Academics" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-teal-500">Kalana</h1>
        <ul className="flex gap-6 text-sm font-medium items-center justify-center flex-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors ${
                  active === item.id
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-teal-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Dark/Light toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
