import { useState } from "react";
import { DarkMode } from "./DarkMode";

export default function Navbar({ isDark, onToggle }: { isDark: boolean, onToggle: () => void}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log({isDark});

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "dark" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center relative">
          <div className="hidden md:flex space-x-20 text-black dark:text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
            <DarkMode isDarkMode={isDark} onToggle={onToggle} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute left-0 text-black focus:outline-none bg-white px-2 py-1 rounded dark:bg-black dark:text-white"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col text-black dark:text-white">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/projects" className="hover:underline">
            Projects
          </a>
          <DarkMode isDarkMode={isDark} onToggle={onToggle}/>
        </div>
      )}
    </nav>
  );
}