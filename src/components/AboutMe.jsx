// src/components/AboutMe.jsx
import React from 'react';

export default function AboutMe({ theme }) {
  return (
    <section id="about" className="py-12">
      <h2
        className={`
          text-2xl font-bold mb-6
          ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-800'}
        `}
      >
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: your bio text */}
        <div
          className={`
            space-y-4
            ${theme === 'dark' ? 'text-yellow-300' : 'text-blue-600'}
          `}
        >
          <p>
            I’m a Running Start student at SPSCC pursuing an A.A. in Computer Science
            and an aspiring Electrical & Computer Engineer. Over the past three
            years, I’ve led robotics teams, founded STEM outreach programs, and
            completed a Headstarter AI Fellowship.
          </p>
          <p>
            As captain of FRC Team 4450, I restructured leadership and ran rookie
            workshops; as founder of FIRST STEP ORG, I launched six FLL teams and
            mentored over 60 students; and through my fellowship, I mastered
            HTML, CSS, JavaScript, and Git workflows.
          </p>
        </div>

        {/* Right: static LinkedIn card */}
        <div
          className={`
            p-6 border rounded-lg shadow
            ${theme === 'dark'
              ? 'bg-gray-800 border-yellow-600'
              : 'bg-white border-blue-600'}
          `}
        >
          <h3
            className={`
              text-lg font-semibold mb-2
              ${theme === 'dark' ? 'text-yellow-300' : 'text-blue-700'}
            `}
          >
            LinkedIn Profile
          </h3>
          <p className={theme === 'dark' ? 'text-yellow-200' : 'text-blue-600'}>
            View my full summary, work history, and recommendations on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/srivikaatr"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              mt-4 inline-block px-4 py-2 rounded transition
              ${theme === 'dark'
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-blue-600 text-white hover:bg-blue-500'}
            `}
          >
            View on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
