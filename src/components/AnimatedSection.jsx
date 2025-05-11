// src/components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ id, className = 'py-8', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}   // ← animate on every enter/exit
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
