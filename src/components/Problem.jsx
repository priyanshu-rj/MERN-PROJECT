import { motion } from 'framer-motion';

export const Problem = () => (
  <section className="py-20 px-6 bg-white dark:bg-gray-900">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-4">The Problem</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Over 55 million people suffer from dementia globally. Early diagnosis is rare, and care is often reactive, not proactive. Caregivers lack tools to track mental decline or changes.
      </p>
    </motion.div>
  </section>
);
