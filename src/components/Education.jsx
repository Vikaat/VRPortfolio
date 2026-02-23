import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Education &amp; Certifications</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Education</h3>
        <div className="space-y-4 mt-2">
          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="font-medium">University of Washington - Seattle</h4>
              <span className="text-sm text-gray-600 dark:text-gray-400">Expected Dec. 2027</span>
            </div>
            <p className="text-sm">Bachelor's of Science in Computer Science</p>
            <p className="text-xs text-gray-500 mt-1 italic">
              Relevant Coursework: Database Systems, Data Visualization, Differential Equations
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h4 className="font-medium">South Puget Sound Community College</h4>
              <span className="text-sm text-gray-600 dark:text-gray-400">Sept. 2023 – June 2025</span>
            </div>
            <p className="text-sm">Associate's in Computer Science</p>
            <p className="text-xs text-gray-500 mt-1 italic">
              Relevant Coursework: SQL Fundamentals, Object Oriented Programming, Calculus
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Certifications</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li className="text-sm">AWS Academy Graduate – Data Engineering (06/2024)</li>
          <li className="text-sm">AWS Academy Graduate - Cloud Practicioner (02/2024)</li>
          <li className="text-sm">Inspirit AI Scholars Program (08/2023)</li>
          <li className="text-sm">Seal of Biliteracy - Tamil (04/2022)</li>
        </ul>
      </div>
    </section>
  );
}