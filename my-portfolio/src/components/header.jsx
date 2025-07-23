import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-mono font-bold">
              <span className="text-green-400">{'<'}</span>
              Aleena Mathew
              <span className="text-green-400">{'/>'}</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="font-mono text-sm hover:text-green-400 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#projects" 
              className="font-mono text-sm hover:text-green-400 transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#skills" 
              className="font-mono text-sm hover:text-green-400 transition-colors duration-200 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#education" 
              className="font-mono text-sm hover:text-green-400 transition-colors duration-200 relative group"
            >
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="font-mono text-sm hover:text-green-400 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-3">
              <a 
                href="https://github.com/aleena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/aleena-mathew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:aleena@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-green-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <nav className="py-4 space-y-2">
              <a 
                href="#about" 
                className="block py-2 font-mono text-sm hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="block py-2 font-mono text-sm hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="block py-2 font-mono text-sm hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="block py-2 font-mono text-sm hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="block py-2 font-mono text-sm hover:text-green-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800 mt-4">
                <a 
                  href="https://github.com/Aleenaannmathew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aleena-mathew-900063294/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:aleenamathew986@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}