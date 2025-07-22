import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

// Intro Section Component
function IntroSection() {
  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold leading-tight">
                <span className="text-green-400">Hello,</span>
                <br />
                I'm <span className="text-white">Aleena Mathew.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 font-mono leading-relaxed">
                A <span className="text-green-400 font-semibold">Full-Stack Developer</span> specializing in{' '}
                <span className="text-green-400 font-semibold">Python, Django and React</span>, I enjoy building{' '}
                <span className="text-green-400 font-semibold">scalable Web Applications</span>.
              </p>
            </div>

            <div className="text-gray-400 font-mono text-sm sm:text-base">
              <p>
                I believe in writing <span className="text-green-400">clean, efficient code</span> and 
                building systems that are both <span className="text-green-400">reliable and maintainable</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-green-400 text-black px-6 py-3 font-mono font-semibold hover:bg-green-300 transition-colors duration-200 border-2 border-green-400">
                View My Work
              </button>
              <button className="border-2 border-white text-white px-6 py-3 font-mono font-semibold hover:bg-white hover:text-black transition-colors duration-200">
                Download CV
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-800">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm font-mono ml-4">~/aleena-portfolio</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center space-x-3">
                  <Code className="text-blue-400" size={20} />
                  <div>
                    <p className="text-gray-300">Frontend Development</p>
                    <p className="text-gray-500 text-xs">React.js, JavaScript, HTML/CSS</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Database className="text-green-400" size={20} />
                  <div>
                    <p className="text-gray-300">Backend Development</p>
                    <p className="text-gray-500 text-xs">Python, Django, REST APIs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="text-purple-400" size={20} />
                  <div>
                    <p className="text-gray-300">Database Management</p>
                    <p className="text-gray-500 text-xs">PostgreSQL, MongoDB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-4 rounded border border-gray-700">
                <p className="text-green-400 text-xs font-mono">
                  <span className="text-gray-500">$</span> aleena --status
                </p>
                <p className="text-white text-xs font-mono mt-1">
                  ✓ Available for new opportunities
                </p>
                <p className="text-green-400 text-xs font-mono">
                  ✓ Ready to build amazing projects
                </p>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;