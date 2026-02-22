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
            I'm a Computer Science student at the University of Washington's Paul G. 
            Allen School of Computer Science & Engineering with plans to minor in Data Science.
            My interests span both data science and software engineering. I love to work on projects that 
            bring together complex data analysis and robust software, whether it's through modeling data
            for visualizations, developing full-stack web applications, or building backend databse systems.
          </p>
          <p>
            My drive for collaborative problem-solving stems from my four years in competitive robotics, 
            where I served as Captain and Lead Software & Electrical Engineer of FRC Team 4450, leading 
            technical initiatives and running workshops. Today, I'm always open to connecting with others 
            in the community to exchange ideas, build together, and explore new opportunities. 
            Feel free to reach out to me on LinkedIn!
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