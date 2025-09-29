import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ theme }) {
  return (
    <section
      id="hero"
      className="
        flex flex-col-reverse md:flex-row
        items-center gap-8
        max-w-3xl mx-auto
        text-center md:text-left
      "
    >
      {/* Text block */}
      <div>
        <motion.h1
          className={`
            text-4xl font-bold
            ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-800'}
          `}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Srivikaat Ravi — Aspiring Computer Engineer
        </motion.h1>

        <motion.p
          className={`
            mt-4 text-lg
            ${theme === 'dark' ? 'text-yellow-300' : 'text-blue-600'}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “3 years of experience in leading and founding STEM initiatives.
          Successfully organized team management for FRC Team 4450.
          Founded FIRST STEP ORG, reaching 60+ students in two years.”
        </motion.p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className={`
              px-4 py-2 border rounded-lg transition
              ${theme === 'dark'
                ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-900'
                : 'border-blue-800 text-blue-800 hover:bg-blue-100'}
            `}
          >
            Download Résumé
          </a>

          {/* View LinkedIn */}
          <a
            href="https://www.linkedin.com/in/srivikaatr"
            // target="_blank"
            // rel="noreferrer"
            className={`
              px-4 py-2 rounded-lg transition
              ${theme === 'dark'
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-blue-600 text-white hover:bg-blue-500'}
            `}
          >
            View LinkedIn
          </a>

          {/* View Github */}
          <a
            href="https://www.github.com/Vikaat"
            target="_blank"
            rel="noreferrer"
            className={`
              px-4 py-2 border rounded-lg transition
              ${theme === 'dark'
                ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-900'
                : 'border-blue-800 text-blue-800 hover:bg-blue-100'}
            `}
          >
            View Github
          </a>
        </div>
      </div>

      

      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Srivikaat Ravi"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
        whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.8 }}
            transition={{ type: 'spring', stiffness: 300 }} 
      />
    </section>
  );
}
