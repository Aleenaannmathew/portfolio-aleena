import React from "react";
import mentora from "../assets/projects/mentora.png";
import docnet from "../assets/projects/docnet.jpg";
import adore from "../assets/projects/adore.png";
import chatconnect from "../assets/projects/chatconnect.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "MENTORA",
      desc: "Omegle-style anonymous mentorship platform using WebRTC and WebSockets with Redis channel layers.",
      tech: "Django Channels, React, Redis, PostgreSQL, JWT",
      link: "#",
      image: mentora,
    },
    {
      title: "DOCNET",
      desc: "AI-powered telehealth consultation system with real-time video consultation and healthcare management.",
      tech: "Django, DRF, React, Redis, Celery, WebRTC",
      link: "https://github.com/Aleenaannmathew/DOCNET.git",
      image: docnet,
    },
    {
      title: "ADORE",
      desc: "Production-ready jewelry e-commerce platform with payments and inventory management.",
      tech: "Django, PostgreSQL, AWS EC2, Nginx",
      link: "https://github.com/Aleenaannmathew/Adore.git",
      image: adore,
    },
    {
      title: "CHATCONNECT",
      desc: "Real-time video meeting and chat application using WebRTC signaling and WebSockets.",
      tech: "Django Channels, React, Redis",
      link: "https://github.com/Aleenaannmathew/ChatConnect.git",
      image: chatconnect,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 font-mono">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-green-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-gray-600 mt-3 leading-7">{p.desc}</p>
                <p className="text-green-600 text-sm mt-4">{p.tech}</p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 text-sm font-semibold text-green-600"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
