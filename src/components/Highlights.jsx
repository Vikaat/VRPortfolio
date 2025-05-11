// src/components/Highlights.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Highlights({ theme }) {
  const stats = [
    { icon: '🎓', value: '60+', label: 'Students Mentored' },
    { icon: '🤖', value: '2×', label: 'FRC Worlds Qualifier' },
    { icon: '⏱️', value: '450+', label: 'Service Hours' },
    { icon: '📚', value: '3', label: 'Years Leading STEM' },
  ];

  return (
    <section id="highlights" className="py-8">
      <h2
        className={`
          text-2xl font-bold mb-6
          ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-800'}
        `}
      >
        Quick Highlights
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={`
              flex flex-col items-center p-6 rounded-lg shadow-lg
              cursor-pointer
              ${theme === 'dark'
                ? 'bg-yellow-900 text-yellow-200'
                : 'bg-blue-100 text-blue-800'}
            `}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="mt-1 text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
