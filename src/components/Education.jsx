import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-bold mb-4">Education &amp; Certifications</h2>
      <div className="mb-6">
        <h3 className="font-semibold">Education</h3>
        <ul className="list-disc pl-5">
          <li>Olympia High School, High School Diploma (’25)</li>
          <li>SPSCC, A.A. in Computer Science (’25)</li>
          <li>Univeristy of Washington, Intended Major: Computer Science ('29)</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Certifications</h3>
        <ul className="list-disc pl-5">
          <li>AWS Data Engineering Academy (06/2024)</li>
          <li>AWS Cloud Practitioner (02/2024)</li>
          <li>Inspirit AI Scholars Program (08/2023)</li>
          <li>Seal of Biliteracy, Tamil (04/2022)</li>
        </ul>
      </div>
    </section>
  );
}
