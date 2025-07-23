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
      {/* Navigation Header - Fixed at top */}
      <Header />
      
      {/* Main Content Sections */}
      <main>
        {/* Intro Section */}
        <section id="intro">
        <Intro/>
        </section>

        {/* About Section */}
        <section id="about">
          <About/>
        </section>


        {/* Hero/Landing Section */}
        <section id="home">
         
        </section>

        {/* Projects Section */}
        <section id="projects">
         <ProjectsSection/>
        </section>
        
        {/* Education Section */}
        <section id="education">
        <EducationSection/>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <SkillsSection/>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact/>
        </section>
      </main>

      {/* Footer */}
     
    </div>
  );
}

export default App;