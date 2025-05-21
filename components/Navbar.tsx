"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "/", label: "Home" },
    // { href: "/game", label: "Game" },
    // { href: "/progress", label: "Progress" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-blue-400 dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-indigo-400"
        >
          TypeMaster
        </Link>

        {/* Desktop Nav + ThemeToggle */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-900  dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-400 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-md">
          <nav className="flex flex-col py-4 px-4 space-y-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-gray-700  dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}
