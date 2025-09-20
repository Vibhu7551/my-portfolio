import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-400">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/about" className="hover:text-indigo-400">About</Link>
          <Link to="/resume" className="hover:text-indigo-400">Resume</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;