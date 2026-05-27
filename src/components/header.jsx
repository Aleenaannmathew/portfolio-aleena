import React, { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((sec) =>
      observer.observe(sec)
    );

    return () =>
      document
        .querySelectorAll("section[id]")
        .forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-mono font-bold text-xl">
            <span className="text-green-600">&lt;</span>
            Aleena Mathew
            <span className="text-green-600">/&gt;</span>
          </h1>
          <p className="text-xs text-gray-500 font-mono">
            Python Full Stack Developer | Django & React
          </p>
        </div>

        <nav className="hidden md:flex space-x-3 bg-gray-100 rounded-full px-4 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`font-mono text-sm px-4 py-2 rounded-full ${activeSection === link.href
                ? "bg-green-600 text-white"
                : "hover:bg-green-100 text-gray-700"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Aleenaannmathew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a href="https://linkedin.com/in/aleena-mathew-900063294"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:aleenamathew986@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}