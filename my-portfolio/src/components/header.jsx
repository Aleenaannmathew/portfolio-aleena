import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Education', href: 'education' },
    { name: 'Contact', href: 'contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec));
    return () =>
      document.querySelectorAll('section[id]').forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-mono font-bold">
              <span className="text-green-500">{'<'}</span>
              Aleena Mathew
              <span className="text-green-500">{'/>'}</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-mono mt-1">
              Full Stack Developer
            </p>
          </div>

          <nav className="hidden md:flex items-center space-x-3 bg-gray-100 rounded-full px-4 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`font-mono text-sm px-4 py-2 rounded-full transition duration-200 ${
                  activeSection === link.href
                    ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                    : 'hover:bg-green-100 text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <a href="https://github.com/Aleenaannmathew" target="_blank" rel="noreferrer">
                <Github className="text-gray-500 hover:text-black" size={20} />
              </a>
              <a href="https://linkedin.com/in/aleena-mathew-900063294/" target="_blank" rel="noreferrer">
                <Linkedin className="text-gray-500 hover:text-black" size={20} />
              </a>
              <a href="mailto:aleenamathew986@gmail.com">
                <Mail className="text-gray-500 hover:text-black" size={20} />
              </a>
            </div>
            <button onClick={toggleMenu} className="md:hidden text-black hover:text-green-600" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 font-mono text-sm rounded transition ${
                    activeSection === link.href
                      ? 'bg-green-100 text-green-700 font-semibold'
                      : 'hover:bg-green-50 text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="https://github.com/Aleenaannmathew" target="_blank" rel="noreferrer">
                <Github className="text-gray-600 hover:text-black" size={20} />
              </a>
              <a href="https://linkedin.com/in/aleena-mathew-900063294/" target="_blank" rel="noreferrer">
                <Linkedin className="text-gray-600 hover:text-black" size={20} />
              </a>
              <a href="mailto:aleenamathew986@gmail.com">
                <Mail className="text-gray-600 hover:text-black" size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
