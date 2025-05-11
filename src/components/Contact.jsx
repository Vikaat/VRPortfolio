import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:vikaat08@gmail.com" className="text-blue-600 hover:underline">
          vikaat08@gmail.com
        </a>
      </p>
      <p className="mt-2">
        <strong>GitHub:</strong>{' '}
        <a
          href="https://github.com/Vikaat"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          github.com/Vikaat
        </a>
      </p>
    </section>
  );
}
