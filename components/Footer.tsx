"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Kaneza. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/amankanz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-gray-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/fred-kaneza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-gray-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
