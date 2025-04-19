import React, { useState } from 'react';
import { Hero } from './components/Hero'; 
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Traction } from './components/Traction';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <button
          className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-3 py-1 rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Hero />
        <Problem />
        <Solution />
        <Traction />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
