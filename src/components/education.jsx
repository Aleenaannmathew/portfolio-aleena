import React from "react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 font-mono">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-green-600">Education</span>
        </h2>

        <div className="space-y-6">

          <Card
            title="Python Full Stack Developer Training"
            org="Brototype, Kozhikode"
            year="Feb 2024 – Dec 2024"
          />

          <Card
            title="BSc Mathematics"
            org="Kannur University (CGPA: 8.04)"
            year="2018 – 2022"
          />

          <Card
            title="Python for Data Analysis"
            org="Udemy Certification"
            year="2025"
          />

        </div>
      </div>
    </section>
  );
}

function Card({ title, org, year }) {
  return (
    <div className="border p-6 rounded-lg shadow">
      <h3 className="font-bold">{title}</h3>
      <p className="text-green-600">{org}</p>
      <p className="text-gray-500 text-sm">{year}</p>
    </div>
  );
}
