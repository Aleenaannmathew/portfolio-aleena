import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-6 font-mono">

        <h2 className="text-4xl font-bold">
          <span className="text-green-600">About</span> Me
        </h2>

        <p>
          I am currently working as a <strong>Python Full Stack Developer and Trainer </strong>
           at Offenso TechSchool, Kochi, where I build scalable web applications
          and mentor aspiring developers in Python, Django, React, databases,
          and real-world project development.
        </p>

        <p>
          My Mathematics background strengthened analytical thinking and
          problem-solving abilities which evolved into software engineering.
          I design backend architectures, secure APIs, and real-time systems
          using WebRTC and WebSockets.
        </p>

        <p>
          Along with development, I actively mentor students through hands-on
          project guidance, doubt clearance sessions, interview preparation,
          and full stack development mentorship programs focused on industry-level skills.
        </p>

        <p>
          I have worked on telehealth platforms, ERP systems, enterprise
          communication software, mentorship platforms, and production
          e-commerce applications deployed on AWS and GCP environments.
        </p>

        <ul className="space-y-2 pt-4">
          <li>✔ Python Full Stack Development</li>
          <li>✔ Django & React Application Development</li>
          <li>✔ Secure REST API design</li>
          <li>✔ WebRTC & WebSocket real-time apps</li>
          <li>✔ Database optimization</li>
          <li>✔ Cloud deployment (AWS/GCP)</li>
          <li>✔ Technical Training & Mentorship</li>
        </ul>
      </div>
    </section>
  );
}
