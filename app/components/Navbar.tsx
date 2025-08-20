"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-900 shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-teal-400">MyPortfolio</h1>
      <div className="space-x-6">
        <Link href="#about" className="hover:text-teal-300">About</Link>
        <Link href="#projects" className="hover:text-teal-300">Projects</Link>
        <Link href="#contact" className="hover:text-teal-300">Contact</Link>
      </div>
    </nav>
  );
}
