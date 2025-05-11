import React from 'react';

const items = [
  {
    role: 'Team Captain, Olympia Robotics Federation (FRC 4450)',
    period: '06/2024 – Present',
    details: 'Restructured leadership and ran rookie workshops.'
  },
  {
    role: 'Founder & Secretary, OHS Stock Market Club',
    period: '04/2024 – Present',
    details: 'Designed curriculum and led weekly simulations.'
  },
  {
    role: 'Founder, FIRST STEP ORG',
    period: '06/2023 – Present',
    details: 'Launched 6 FLL teams; mentored 60+ students in 2 yrs.'
  },
  {
    role: 'Headstarter AI Fellow',
    period: '07/2024 – 09/2024',
    details: 'Built this portfolio site; mastered HTML/CSS/JS & GitHub workflows.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Experience &amp; Leadership</h2>
      <ul className="space-y-4">
        {items.map((exp, i) => (
          <li key={i}>
            <h3 className="font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-600">{exp.period}</span>
            <p className="mt-1">{exp.details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
