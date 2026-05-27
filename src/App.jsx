import React from 'react';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import ExperienceSection from './components/experience';
import SkillsSection from './components/skills';
import ProjectsSection from './components/project';
import EducationSection from './components/education';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      {/* Sticky Header */}
      <Header />

      <main>

        {/* Home */}
        <section id="home" className="scroll-mt-24">
          <Intro />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24">
          <EducationSection />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;