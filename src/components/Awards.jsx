import React from 'react';

const awards = [
  'Presidential Volunteer Service Award – Gold (10/2024)',
  '1st Place Securities & Investments, FBLA (02/2022)'
];

export default function Awards() {
  return (
    <section id="awards" className="py-12">
      <h2 className="text-2xl font-bold mb-4">
        Awards &amp; Scholarships
      </h2>
      <div className="flex flex-wrap gap-4">
        {awards.map((a, i) => (
          <span
            key={i}
            className="
              px-3 py-1 rounded-full text-sm font-medium
              bg-yellow-200 text-gray-800
              dark:bg-yellow-700 dark:text-gray-100
            "
          >
            {a}
          </span>
        ))}
      </div>
    </section>
  );
}
