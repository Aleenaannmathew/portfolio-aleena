import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "MENTORA",
      desc: "Omegle-style anonymous mentorship platform using WebRTC and WebSockets with Redis channel layers.",
      tech: "Django Channels, React, Redis, PostgreSQL, JWT",
      link: "#",
    },
    {
      title: "DOCNET",
      desc: "Telehealth consultation system with Redis caching reducing API response time by 40%.",
      tech: "Django, DRF, React, Redis, Celery, WebRTC",
      link: "https://github.com/Aleenaannmathew/DOCNET.git",
    },
    {
      title: "ADORE",
      desc: "Production-ready jewelry e-commerce platform with payments and inventory management.",
      tech: "Django, PostgreSQL, AWS EC2, Nginx",
      link: "https://github.com/Aleenaannmathew/Adore.git",
    },
    {
      title: "CHATCONNECT",
      desc: "Real-time video meeting application using WebRTC signaling.",
      tech: "Django Channels, React, Redis",
      link: "https://github.com/Aleenaannmathew/ChatConnect.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 font-mono">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-green-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <p className="text-green-600 text-sm mt-3">{p.tech}</p>

              <a
                href={p.link}
                className="inline-block mt-4 text-sm text-green-600"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
