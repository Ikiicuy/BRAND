import React, { useState, useEffect } from 'react';
import Navbar from './komponen/Navbar';
import Beranda from './komponen/Beranda';
import About from './komponen/About';
import Gallery from './komponen/Gallery';
import CTA from './komponen/CTA';
import Footer from './komponen/Footer';
import "./App.css"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="font-sans bg-[#F0F9FF] dark:bg-[#1F2937]  text-black dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Beranda />
      <About />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
