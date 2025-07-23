import React from 'react';
import { BookOpen, Code, GraduationCap, Award, Users, Lightbulb } from 'lucide-react';

function EducationSection() {
  const timeline = [
    {
      id: 1,
      period: "2024 - 2025",
      title: "Full Stack Development Bootcamp",
      institution: "Brototype, Calicut",
      type: "Professional Training",
      icon: Code,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Completed an intensive 32-week full-stack development program focusing on modern web technologies and practical application.",
      highlights: [
        "Built two full-scale projects from concept to deployment",
        "Mentored junior developers throughout the program",
        "Provided technical guidance to fellow students",
        "Assisted instructors in conducting technical workshops",
        "Mastered Django, React, REST APIs, and database management"
      ],
      skills: ["Python", "Django", "React", "JavaScript", "PostgreSQL", "MongoDB", "REST APIs"],
      achievement: "Software Developer"
    },
    {
      id: 2,
      period: "2021 - 2024",
      title: "Banking Exam Preparation",
      institution: "SBI IBPS RRB Preparation",
      type: "Competitive Exam Prep",
      icon: BookOpen,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Dedicated three years to preparing for banking sector competitive examinations, developing strong analytical and quantitative skills.",
      highlights: [
        "Intensive study of quantitative aptitude and reasoning",
        "Developed strong problem-solving methodologies",
        "Enhanced logical thinking and analytical skills",
        "Built discipline and time management expertise",
        "Gained deep understanding of financial concepts"
      ],
      skills: ["Analytical Thinking", "Problem Solving", "Time Management", "Quantitative Analysis"],
      achievement: "Self-Directed Learning"
    },
    {
      id: 3,
      period: "2018 - 2021",
      title: "Bachelor of Science in Mathematics",
      institution: "Kannur University",
      type: "Undergraduate Degree",
      icon: GraduationCap,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Completed a comprehensive mathematics degree with Computer Science as complementary subject, building a strong foundation in logical thinking and computational concepts.",
      highlights: [
        "Strong foundation in mathematical concepts and logic",
        "Introduction to computer science principles",
        "Developed analytical and problem-solving skills",
        "Experience with mathematical modeling and statistics",
        "Built systematic approach to complex problem-solving"
      ],
      skills: ["Mathematical Analysis", "Logic", "Statistics", "Computer Science ", "Research Methods"],
      achievement: "Graduate"
    }
  ];

  return (
    <section id="education" className="bg-white text-black py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            <span className="text-green-600">Education</span> & Training.
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg font-mono text-gray-600 max-w-2xl mx-auto">
            My journey from mathematics to software development, showcasing a{' '}
            <span className="text-green-600 font-semibold">commitment to continuous learning</span> and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.id} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-green-600 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8 ${isEven ? '' : 'md:text-right'}`}>
                    {/* Empty column for alternating layout */}
                    <div className={`hidden md:block ${isEven ? 'md:order-1' : 'md:order-2'}`}></div>
                    
                    {/* Main Content */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'} ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                      <div className={`${item.bgColor} ${item.borderColor} border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                        {/* Header */}
                        <div className={`flex items-start space-x-4 mb-4 ${isEven ? '' : 'md:flex-row-reverse md:space-x-reverse md:text-right'}`}>
                          <div className={`p-3 ${item.bgColor} border ${item.borderColor} rounded-lg flex-shrink-0`}>
                            <IconComponent className={`${item.iconColor}`} size={24} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`${item.iconColor} font-mono text-sm font-semibold uppercase tracking-wider`}>
                                {item.type}
                              </span>
                              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                              <span className="font-mono text-sm text-gray-600 font-semibold">
                                {item.period}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-mono font-bold text-black mb-1">
                              {item.title}
                            </h3>
                            
                            <p className="font-mono text-sm text-gray-600 font-medium">
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 font-mono text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Key Highlights */}
                        <div className="mb-4">
                          <h4 className="text-sm font-mono font-semibold text-black uppercase tracking-wider mb-3">
                            Key Highlights
                          </h4>
                          <div className="space-y-2">
                            {item.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className={`flex items-start space-x-3 ${isEven ? '' : 'md:flex-row-reverse md:space-x-reverse md:text-right'}`}>
                                <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></span>
                                <span className="text-gray-700 font-mono text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills & Achievement */}
                        <div className="space-y-4">
                          {/* Skills */}
                          <div>
                            <h4 className="text-sm font-mono font-semibold text-black uppercase tracking-wider mb-3">
                              Skills Developed
                            </h4>
                            <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'md:justify-end'}`}>
                              {item.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-white border border-gray-300 px-3 py-1 rounded text-xs font-mono font-medium text-gray-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievement Badge */}
                          <div className={`flex items-center space-x-2 ${isEven ? '' : 'md:justify-end'}`}>
                            <Award className="text-green-600" size={16} />
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-mono font-semibold">
                              {item.achievement}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-mono font-semibold mb-4 text-green-800">
              Learning Philosophy
            </h3>
            <p className="text-green-700 font-mono text-sm max-w-3xl mx-auto italic">
              "From mathematical foundations to full-stack development, my journey reflects a commitment to 
              continuous learning and adaptation. Every challenge has been an opportunity to grow, 
              and every skill learned has prepared me for the next adventure in technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;