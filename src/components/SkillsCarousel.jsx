// src/components/SkillsTicker.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Adobe Creative Suite',
  'Community Outreach',
  'Convolutional Neural Networks',
  'Educational Services',
  'Java',
  'Linux',
  'Mentorship',
  'Robotics',
  'Team Management',
  'Technical Leadership',
  'Web Design'
];

export default function SkillsTicker({ theme }) {
  // duplicate the array so each row loops seamlessly
  const looped = [...skills, ...skills];
  const duration = 60; // seconds per full loop

  // common item styling
  const itemClass = `
    inline-block uppercase text-2xl md:text-3xl
    font-bold tracking-wider
    ${theme === 'dark' ? 'text-yellow-200' : 'text-blue-700'}
  `;

  return (
    <section id="skills" className="py-0">
      <h2
        className={`
          text-2xl font-bold mb-2
          ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-800'}
        `}
      >
        Technical Skills
      </h2>

      <div className="space-y-4">
        {/* Top row: scrolls leftwards */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-flex space-x-12"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration,
                ease: 'linear'
              }
            }}
          >
            {looped.map((skill, i) => (
              <span key={i} className={itemClass}>
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom row: scrolls rightwards */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-flex space-x-12"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration,
                ease: 'linear'
              }
            }}
          >
            {looped.map((skill, i) => (
              <span key={i + looped.length} className={itemClass}>
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
