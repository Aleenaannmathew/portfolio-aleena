import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Python Full Stack Developer & Trainer",
      company: "Offenso TechSchool, Kochi",
      period: "Dec 2025 – Present",
      points: [
        "Developing scalable full-stack applications using Django and React",
        "Training students in Python, SQL, Django, and Full Stack Development",
        "Designing high-performance REST APIs and real-time systems",
        "Mentoring students through live projects and interview preparation",
      ],
    },
    {
      role: "Freelance Backend Developer",
      company: "Third Day Academy ERP",
      period: "Freelance",
      points: [
        "Built multi-branch academy ERP system",
        "Implemented role-based authentication",
        "Integrated Razorpay payments",
        "AWS S3 media storage integration",
      ],
    },
    {
      role: "Backend Developer",
      company: "Private B2B Video Communication",
      period: "Freelance",
      points: [
        "Developed enterprise video communication platform",
        "Integrated Agora SDK for video conferencing",
        "Implemented region-based access control",
        "Handled signaling and session lifecycle",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 font-mono">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-green-600">Experience</span>
        </h2>

        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-green-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

            <ul className="list-disc ml-5 space-y-1">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
