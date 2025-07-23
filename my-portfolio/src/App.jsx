import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Intro from './components/intro';
import SkillsSection from './components/experience';
import ProjectsSection from './components/project';
import EducationSection from './components/education';

function App() {
  return (
    <div className="App">
      {/* Sticky Header */}
      <Header />

      <main>
        {/* Home / Intro Section */}
        <section id="home" className="min-h-screen scroll-mt-20">
          <Intro />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen scroll-mt-20">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen scroll-mt-20">
          <ProjectsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen scroll-mt-20">
          <EducationSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen scroll-mt-20">
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
