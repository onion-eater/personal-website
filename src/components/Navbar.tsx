import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/0 navbar-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center relative">
          <div className="hidden md:flex space-x-20">
            <a href="/" className="text-white hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-white hover:text-blue-500">
              About
            </a>
            <a href="/projects" className="text-white hover:text-blue-500">
              Projects
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute left-0 text-white focus:outline-none bg-black px-2 py-1 rounded"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-white hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-white hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-white hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
