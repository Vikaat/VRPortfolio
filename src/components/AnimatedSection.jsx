// src/components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  id,
  className = 'py-8',
  children
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,            // continue to animate on re-entry
        amount: 0.05,           // trigger when 5% of the section is visible
        margin: '-20% 0px -20% 0px' // start 20% before the section actually enters view
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
