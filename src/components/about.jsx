import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-6 font-mono">

        <h2 className="text-4xl font-bold">
          <span className="text-green-600">About</span> Me
        </h2>

        <p>
          I am a Python Full Stack Developer with professional experience
          building scalable web platforms, real-time communication systems,
          and enterprise applications using Django and React.
        </p>

        <p>
          My Mathematics background strengthened analytical thinking and
          problem-solving abilities which evolved into software engineering.
          I design backend architectures, secure APIs, and real-time systems
          using WebRTC and WebSockets.
        </p>

        <p>
          I have worked on telehealth platforms, ERP systems, enterprise
          communication software, and production e-commerce platforms
          deployed on AWS and GCP environments.
        </p>

        <ul className="space-y-2 pt-4">
          <li>✔ Scalable Django backend architecture</li>
          <li>✔ Secure REST API design</li>
          <li>✔ WebRTC & WebSocket real-time apps</li>
          <li>✔ Database optimization</li>
          <li>✔ Cloud deployment (AWS/GCP)</li>
          <li>✔ Mentoring developers</li>
        </ul>
      </div>
    </section>
  );
}
