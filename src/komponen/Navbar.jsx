import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['beranda', 'tentang', 'galeri', 'gabung'];

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 shadow dark:shadow-[#E2E8F0] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src={darkMode ? '/putih.png' : '/hitam.png'} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((id) => (
          <Link
            key={id}
            to={id}
            smooth
            duration={500}
            className="cursor-pointer capitalize hover:underline"
          >
            {id}
          </Link>
        ))}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile buttons */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-16 w-1/2 bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded-md shadow-md md:hidden flex flex-col gap-3"
          >
            {navLinks.map((id) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer capitalize hover:underline"
              >
                {id}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
