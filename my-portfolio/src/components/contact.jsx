import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "aleena.mathew@email.com",
      description: "Send me an email anytime",
      action: "mailto:aleena.mathew@email.com",
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Call me for immediate response",
      action: "tel:+919876543210",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kozhikode, Kerala",
      description: "Available for local meetings",
      action: "#",
      color: "text-purple-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "@aleena-mathew",
      url: "https://linkedin.com/in/aleena-mathew",
      color: "text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      username: "@aleena-mathew",
      url: "https://github.com/aleena-mathew",
      color: "text-gray-700"
    }
  ];

  return (
    <section id="contact" className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Let's <span className="text-green-400">Connect</span>.
          </h2>
          <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg font-mono text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and{' '}
            <span className="text-green-400 font-semibold">bring your ideas to life</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono font-bold mb-6 text-white">
                Get <span className="text-green-400">In Touch</span>
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      className="block bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-400 hover:bg-gray-850 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-800 border border-gray-700 rounded-lg group-hover:border-green-400 transition-colors duration-300">
                          <IconComponent className={`${method.color} group-hover:text-green-400`} size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-mono font-semibold text-white mb-1">
                            {method.title}
                          </h4>
                          <p className="font-mono text-green-400 text-sm mb-2 font-medium">
                            {method.value}
                          </p>
                          <p className="font-mono text-gray-400 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-mono font-semibold text-white mb-4">
                Find Me Online
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 hover:border-green-400 hover:bg-gray-850 transition-all duration-300 group"
                    >
                      <IconComponent className={`${social.color} group-hover:text-green-400`} size={20} />
                      <div className="font-mono text-sm">
                        <p className="text-white group-hover:text-green-400 font-medium">
                          {social.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-mono font-semibold text-green-400">
                  Available for Work
                </h4>
              </div>
              <p className="font-mono text-sm text-gray-300 mb-3">
                Currently seeking new opportunities and exciting projects to work on.
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                <Clock size={14} />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-mono font-bold mb-6 text-white">
              Send a <span className="text-green-400">Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white font-mono text-sm focus:border-green-400 focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white font-mono text-sm focus:border-green-400 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white font-mono text-sm focus:border-green-400 focus:outline-none transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white font-mono text-sm focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 font-mono font-semibold text-sm transition-all duration-300 rounded flex items-center justify-center space-x-2 ${
                  isSubmitted 
                    ? 'bg-green-600 text-white' 
                    : isSubmitting 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-green-400 text-black hover:bg-green-300'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Terminal-style note */}
            <div className="mt-8 bg-gray-950 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3 pb-2 border-b border-gray-800">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs font-mono ml-4">~/contact-info</span>
              </div>
              <p className="text-green-400 text-xs font-mono">
                <span className="text-gray-500">$</span> echo "Thanks for reaching out!"
              </p>
              <p className="text-white text-xs font-mono mt-1">
                I'll get back to you as soon as possible.
              </p>
              <p className="text-green-400 text-xs font-mono">
                Looking forward to our conversation! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;