"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Submitted email:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the <span className="text-blue-600">MemoTag</span> Waitlist
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sign up to get notified about our beta release and product demos.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Join Now
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-semibold mt-4">
            🎉 Thank you for joining!
          </div>
        )}
      </motion.div>
    </section>
  );
};
