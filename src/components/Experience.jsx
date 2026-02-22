// src/components/Experience.jsx
import React from 'react';

const items = [
  {
    role: 'Data Scientist, The Boring Club at UW',
    period: 'September 2025 – Present',
    details: 'Investigating practical computer vision pipelines and researching OpenCV methods for real-time video preprocessing and noise reduction.'
  },
  {
    role: 'Web Developer, The Boring Club at UW',
    period: 'February 2026 – Present',
    details: 'Engineering front-end updates using HTML, CSS, and JavaScript while streamlining development workflows through GitHub Issues.'
  },
  {
    role: 'Founder, First Step Org',
    period: 'June 2023 – Present',
    details: 'Founded and led a nonprofit expanding student access to STEM and FIRST Lego League programs through mentorship and resource coordination.'
  },
  {
    role: 'Team Captain, Olympia Robotics Federation (FRC Team 4450)',
    period: 'June 2024 – June 2025',
    details: 'Led a 35+ member team through championships, restructured sub-team leadership, and improved robot design timelines by 2 weeks.'
  },
  {
    role: 'Control Systems Programmer, Olympia Robotics Federation (FRC Team 4450)',
    period: 'February 2024 – August 2025',
    details: 'Designed a Java state-machine architecture for the USS Leviathan, coordinating 10+ motors and 8 pneumatic pistons for competition.'
  },
  {
    role: 'Lead Electrical Engineer, Olympia Robotics Federation (FRC Team 4450)',
    period: 'May 2023 – June 2024',
    details: 'Designed and wired electrical layouts for USS ProtoStar and USS Leviathan, achieving 99% uptime across 84+ matches.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Experience &amp; Leadership</h2>
      <ul className="space-y-6">
        {items.map((exp, i) => (
          <li key={i}>
            <h3 className="font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {exp.period}
            </span>
            {exp.details && <p className="mt-1 text-gray-700 dark:text-gray-300">{exp.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}