import React from 'react';
import { Code, Database, Globe, Github, Linkedin, Mail } from 'lucide-react';

function IntroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center justify-center py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
                <img
                  src="/image.jpg" 
                  alt="Aleena Mathew"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating indicator */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-mono shadow-lg">
                👋 Available
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold leading-tight">
                <span className="text-green-600">Hello,</span>
                <br />
                I'm <span className="text-black">Aleena Mathew.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-700 font-mono leading-relaxed max-w-3xl mx-auto">
                A <span className="text-green-600 font-semibold">Full-Stack Developer</span> specializing in{' '}
                <span className="text-green-600 font-semibold">Python, Django and React</span>, I enjoy building{' '}
                <span className="text-green-600 font-semibold">scalable Web Applications</span>.
              </p>
            </div>

            <div className="text-gray-600 font-mono text-sm sm:text-base max-w-2xl mx-auto">
              <p>
                I believe in writing <span className="text-green-600">clean, efficient code</span> and
                building systems that are both <span className="text-green-600">reliable and maintainable</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              
              
              <a
                href="https://github.com/Aleenaannmathew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-mono font-semibold border-2 border-green-600 transition duration-200 shadow-sm hover:shadow-lg">
                  View My Work
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-6">
              <a
                href="https://github.com/Aleenaannmathew"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-mono font-semibold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-600 font-mono text-xs">React.js, JavaScript, HTML/CSS</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                <Database className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-mono font-semibold text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-600 font-mono text-xs">Python, Django, REST APIs</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-mono font-semibold text-gray-800 mb-2">Database Management</h3>
              <p className="text-gray-600 font-mono text-xs">PostgreSQL, MongoDB</p>
            </div>
          </div>

          {/* Status Banner */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto border border-white/20">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-sm">Available for new opportunities</span>
            </div>
            <p className="text-gray-600 text-sm mt-2 font-mono">Ready to build amazing projects</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;