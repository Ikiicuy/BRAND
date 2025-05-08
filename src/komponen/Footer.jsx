import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" font-medium dark:bg-gray-800 text-center py-6 mt-10 text-sm text-gray-700 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} Brand</p>
    </footer>
  );
};

export default Footer;
