// src/components/Experience.jsx
import React from 'react';

const items = [
  {
    role: 'Team Captain, Olympia Robotics Federation (FRC Team 4450)',
    period: 'June 2024 – Present',
    details: 'One of the captains of the First Robotics Competition Team, the Olympia Robotics Federation Team 4450.'
  },
  {
    role: 'Lead Programmer, Olympia Robotics Federation (FRC Team 4450)',
    period: 'June 2024 – Present',
    details: 'Lead programmer of FRC Team #4450’s 2025 Reefscape season robot: USS Leviathan.'
  },
  {
    role: 'Member, Olympia Robotics Federation (FRC Team 4450)',
    period: 'September 2021 – Present',
    details: ''
  },
  {
    role: 'Chief Communications Officer (CCO), Olympia Robotics Federation (FRC Team 4450)',
    period: 'May 2023 – June 2024',
    details: 'As CCO, managed official paperwork, administrative tasks, and strengthened communication between team members, parents, and mentors.'
  },
  {
    role: 'Electrical Lead, Olympia Robotics Federation (FRC Team 4450)',
    period: 'May 2023 – June 2024',
    details: "Oversaw electrical engineering for ORF 4450’s 2024 season robot “USS ProtoStar,” including drivetrain construction and motor controller wiring."
  },
  {
    role: 'Head FLL Program Manager, FIRST STEP ORG',
    period: 'August 2023 – Present',
    details: 'Spearheaded the FLL program at local middle schools, reviving teams in 4 of 5 district schools and enrolling 80+ students.'
  },
  {
    role: 'Founder, FIRST STEP ORG',
    period: 'June 2023 – Present',
    details: 'Founded a nonprofit to bridge the gap between education and STEM by offering resources, guidance, and support to local students.'
  },
  {
    role: 'Software Engineering Fellow, Headstarter AI',
    period: 'July 2024 – September 2024',
    details: ''
  },
  {
    role: 'Secretary, OlyRobots (FTC)',
    period: 'September 2023 – June 2024',
    details: 'As one of four ASB club officers, managed part order approvals, meeting minutes, and club-wide communications.'
  },
  {
    role: 'Secretary, OHS Aerospace Club',
    period: 'March 2023 – June 2024',
    details: 'Founding officer responsible for meeting minutes and member communications; supported club mission to design, build, and fly model rockets.'
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
            {exp.details && <p className="mt-1">{exp.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
