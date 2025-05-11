import React from 'react';

const roles = [
  'Camp Khitomer Founder, Olympia Robotics Federation (summer camp for 50+ kids)',
  'Youth Mentor, FIRST FLL (10/2021 – 06/2024)',
  'Teen Tech Tutor, Timberland Library (08/2022 – 04/2023)',
  'Camp CairoBots Instructor, Cairo, Egypt (08/2022)'
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Volunteer &amp; Outreach</h2>
      <ul className="list-disc pl-5 space-y-2">
        {roles.map((r,i) => <li key={i}>{r}</li>)}
      </ul>
    </section>
  );
}
