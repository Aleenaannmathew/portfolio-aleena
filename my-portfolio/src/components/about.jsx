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

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="bg-white text-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
                <span className="text-green-600">About</span> Me.
              </h2>
              <div className="w-16 h-1 bg-green-600"></div>
            </div>

            <div className="space-y-4 text-gray-700 font-mono text-sm sm:text-base leading-relaxed">
              <p>
                My journey into tech wasn't conventional. I started with a{' '}
                <span className="text-black font-semibold">BSc in Mathematics</span> with Computer Science
                as a complementary subject, initially preparing for IBPS RRB exams like many others.
              </p>

              <p>
                But something felt different. While others were focused on banking careers, I found myself
                drawn to the logic and creativity of <span className="text-green-600 font-semibold">software development</span>.
                The decision to leave traditional paths and fully immerse myself into programming was one of the
                best choices I've made.
              </p>

              <p>
                Over the years, I've developed practical expertise in{' '}
                <span className="text-green-600 font-semibold">Python, Django, Django REST Framework, React, PostgreSQL, MongoDB</span>{' '}
                and <span className="text-green-600 font-semibold">RESTful APIs</span>. I'm confident working
                across both frontend and backend, always striving for that perfect balance between functionality and elegance.
              </p>

              <p>
                Currently, I'm actively <span className="text-green-600 font-semibold">seeking new opportunities</span>{' '}
                where I can contribute my skills and continue growing as a developer.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Values */}
          <div className="space-y-8">
            {/* What I Do */}
            <div className="bg-gray-50 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-mono font-semibold mb-4 text-black">What I Do</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Build responsive web applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Design and implement REST APIs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Database design and optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Write clean, maintainable code</span>
                </div>
              </div>
            </div>

            {/* Values & Approach */}
            <div className="space-y-4">
              <h3 className="text-xl font-mono font-semibold text-black">My Approach</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Problem-solving through logical thinking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Continuous learning and adaptation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">User-focused development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Collaborative team player</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;