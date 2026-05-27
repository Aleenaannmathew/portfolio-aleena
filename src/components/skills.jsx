import React from "react";

export default function SkillsSection() {
  const skillGroups = {
    Backend: [
      "Python",
      "Django",
      "DRF",
      "FastAPI",
      "Django Channels",
      "JWT",
      "Redis",
      "Celery",
      "WebSocket",
    ],
    Frontend: [
      "React.js",
      "Redux Toolkit",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind",
    ],
    Database: ["PostgreSQL", "MongoDB", "DB Design", "Query Optimization"],
    Cloud: ["AWS EC2", "AWS S3", "GCP", "Docker", "Nginx", "CI/CD"],
    Tools: ["Git", "Postman", "WebRTC", "Agile"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 font-mono">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-green-600">Skills</span>
        </h2>

        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group} className="mb-6">
            <h3 className="font-bold mb-3">{group}</h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="border px-3 py-1 rounded text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}