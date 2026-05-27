import React from "react";
import { Code, Database, Globe, Github, Linkedin, Mail } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">

        <img
          src="/image.jpg"
          alt="Aleena"
          className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
        />

        <h1 className="text-5xl font-mono font-bold">
          Hello, I'm <span className="text-green-600">Aleena Mathew</span>
        </h1>

        <p className="text-xl font-mono text-gray-700 max-w-3xl mx-auto">
          A <strong>Python Full Stack Developer</strong> with 2+ years of experience
          building scalable backend systems using Django, DRF, and React.
          Specialized in secure REST APIs, WebRTC & WebSocket real-time systems,
          and deploying production applications on AWS & GCP.
        </p>

        <p className="font-mono text-gray-600">
          Focused on clean architecture, performance optimization, and
          production-ready scalable systems.
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a href="https://github.com/Aleenaannmathew">
            <Github />
          </a>
          <a href="https://linkedin.com/in/aleena-mathew-900063294">
            <Linkedin />
          </a>
          <a href="mailto:aleenamathew986@gmail.com">
            <Mail />
          </a>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-10">
          <Card
            icon={<Code />}
            title="Frontend"
            text="React.js, Redux Toolkit, Tailwind, Modern JS"
          />
          <Card
            icon={<Database />}
            title="Backend"
            text="Django, DRF, FastAPI, REST APIs, JWT"
          />
          <Card
            icon={<Globe />}
            title="Database"
            text="PostgreSQL, Redis, MongoDB Optimization"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="text-green-600 mb-3">{icon}</div>
      <h3 className="font-mono font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 font-mono">{text}</p>
    </div>
  );
}