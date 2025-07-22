import React from 'react';

export default function SkillsSection() {
  const skills = {
    "Backend": [
      "Python", "Django", "Django REST Framework", "ORM", "JWT", 
      "Django Channels", "WebSocket", "Celery", "JavaScript"
    ],
    "Frontend": [
      "React", "Redux", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript"
    ],
    "Database": [
      "PostgreSQL", "MongoDB", "Redis", "SQL"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, EKS, RDS, ALB)", "Google Cloud Platform", "NGINX", "Firebase"
    ],
    "Tools": [
      "Git", "Postman", "Figma", "Pandas", "Data Analysis"
    ],
    "Concepts": [
      "MVT Architecture", "REST APIs", "Data Structures", "Algorithms", "C Programming"
    ]
  };

  return (
    <section id="skills" className="bg-white text-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            <span className="text-green-600">Skills</span> & Technologies.
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6"></div>
          <p className="text-gray-600 font-mono text-lg max-w-3xl">
            Here's a comprehensive list of technologies I work with to build robust, scalable applications.
          </p>
        </div>

        {/* Skills Container */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-xl font-mono font-semibold mb-4 text-black">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-black text-white px-4 py-2 font-mono text-sm hover:bg-green-600 hover:text-black transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}