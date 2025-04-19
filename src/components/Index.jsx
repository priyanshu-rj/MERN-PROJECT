import React from 'react'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Problem } from '../pages/Problem';
import { Solution } from '../pages/Solution';
import { Traction } from '../pages/Traction';
import { CTA } from '../pages/CTA';
import { Footer } from '../pages/Footer';


const index = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>MemoTag - AI for Dementia Care</title>
      </Head>
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

export default index