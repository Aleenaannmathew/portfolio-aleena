import React from 'react';

export default function SkillsSection() {
  const skills = [
    "Python", "Django", "Django REST Framework", "ORM", "PostgreSQL", "JWT",
    "Django Channels", "Redis", "WebSocket", "Celery", "Supervisor", "Gunicorn",
    "React", "Redux", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript",
    "Firebase", "Razorpay", "Cashfree", "Git", "Postman", "Figma", "Pandas",
    "MongoDB", "SQL", "AWS (EC2, S3)", "GCP", "NGINX",
    "Real Analysis", "Statistical Analysis", "Logical Reasoning",
    "Quantitative Aptitude", "Critical Thinking"
  ];

  return (
    <section id="skills" className="bg-white text-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-10">
          <span className="text-green-600">My</span> Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-xs sm:text-sm font-mono font-medium hover:border-green-600 hover:text-green-600 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
