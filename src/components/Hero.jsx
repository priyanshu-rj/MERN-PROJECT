// src/components/Hero.js
import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <motion.h1
      className="text-4xl md:text-6xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      AI for Dementia Care
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      MemoTag helps caregivers monitor and support loved ones with dementia using smart AI tools.
    </motion.p>
    <motion.button
      className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      whileHover={{ scale: 1.05 }}
    >
      Get Started
    </motion.button>
  </section>
);
