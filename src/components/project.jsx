import React from 'react';
import { ExternalLink, Github, Globe, Database, Code, CreditCard, Video, Zap } from 'lucide-react';

// Projects Section Component
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "DOCNET",
      subtitle: "Telehealth Platform",
      description: "A comprehensive full-stack telehealth platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, and integrated payment processing.",
      image: "/DOCNET.png",
      technologies: [
        { name: "Django DRF", icon: Database, color: "text-green-600" },
        { name: "React Redux", icon: Code, color: "text-blue-600" },
        { name: "WebRTC", icon: Video, color: "text-purple-600" },
        { name: "Celery", icon: Zap, color: "text-orange-600" },
        { name: "Redis", icon: Database, color: "text-red-600" },
        { name: "Razorpay", icon: CreditCard, color: "text-green-600" }
      ],
      features: [
        "Secure video consultations",
        "Real-time appointment scheduling",
        "Payment gateway integration",
        "Doctor-patient management",
        "Medical record storage"
      ],
      type: "Full-Stack Application",
      status: "Completed",
      codeLink: "https://github.com/Aleenaannmathew/DOCNET.git",
    },
    {
      id: 2,
      title: "ADORE",
      subtitle: "E-commerce Jewellery Platform",
      description: "An elegant e-commerce website specializing in jewelry sales with secure payment processing, product catalog management, and responsive design for optimal user experience.",
      image: "/Adore.png",
      technologies: [
        { name: "Django", icon: Database, color: "text-green-600" },
        { name: "HTML/CSS", icon: Code, color: "text-orange-600" },
        { name: "Bootstrap", icon: Globe, color: "text-purple-600" },
        { name: "Razorpay", icon: CreditCard, color: "text-green-600" }
      ],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Responsive design",
        "Admin dashboard",
        "Order management system"
      ],
      type: "E-commerce Website",
      status: "Completed",
      codeLink: "https://github.com/Aleenaannmathew/Adore.git",
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 text-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            <span className="text-green-600">Featured</span> Projects.
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg font-mono text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development
            and passion for creating <span className="text-green-600 font-semibold">meaningful digital solutions</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 rounded overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Status Badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-mono font-semibold">
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-mono text-sm font-semibold uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-mono font-bold">
                    {project.title}
                    <span className="text-green-600 ml-2">.</span>
                  </h3>

                  <p className="text-lg font-mono text-gray-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-700 font-mono text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-mono font-semibold text-black uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center space-x-2 bg-white border border-gray-200 px-3 py-2 rounded text-xs font-mono"
                        >
                          <IconComponent className={tech.color} size={14} />
                          <span className="text-gray-700 font-semibold">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-mono font-semibold text-black uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-700 font-mono text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 font-mono font-semibold hover:bg-green-700 transition-colors duration-200 border-2 border-green-600 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>View Live Demo</span>
                  </a> */}

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 font-mono font-semibold hover:border-green-600 hover:text-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-mono font-semibold mb-4 text-green-800">
              Interested in Working Together?
            </h3>
            <p className="text-green-700 font-mono text-sm mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <button className="bg-green-600 text-white px-6 py-3 font-mono font-semibold hover:bg-green-700 transition-colors duration-200">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;