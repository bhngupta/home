import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
import Experience from './components/Experience/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

function App() {
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    // Set a timer for 2.5 seconds before starting the slide-up animation
    const timer = setTimeout(() => {
      setSlide(true);
      setTimeout(() => setLoading(false), 1000); // Match the animation duration
    }, 2100);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loading screen */}
      {loading && (
        <div className={`loading-screen ${slide ? 'slide-up' : ''}`}>
          <div className="container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}

      {!loading && (
        <div>
          <Navbar />
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 relative">
            <Home />
            <Experience />
            <Projects />
            <Contact />

            {/* Vertical Copyright */}
            <div className="fixed left-12 bottom-8 transform -rotate-90 origin-bottom-left flex items-center text-gray-400 text-xs">
              <span className="block w-12 h-px bg-gray-400 mr-3"></span>©
              MMXXIV, Bhanu Gupta
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
