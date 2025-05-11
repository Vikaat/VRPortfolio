import React from 'react';

const skills = [
  'Adobe Creative Suite', 'Community Outreach', 'Convolutional Neural Networks',
  'Educational Services', 'Java', 'Linux', 'Mentorship',
  'Robotics', 'Team Management', 'Technical Leadership', 'Web Design'
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 border rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
