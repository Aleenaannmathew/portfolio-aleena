import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Clock,
  CheckCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          }, 3000);
        },
        (error) => {
          console.error('Email sending failed:', error);
          setIsSubmitting(false);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aleenamathew986@gmail.com',
      description: 'Send me an email',
      action: 'mailto:aleenamathew986@gmail.com',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kerala',
      description: '',
      action: '#',
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: '@aleena-mathew',
      url: 'https://www.linkedin.com/in/aleena-mathew-900063294/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      username: '@aleena-mathew',
      url: 'https://github.com/Aleenaannmathew',
      color: 'text-gray-700'
    }
  ];

  return (
    <section id="contact" className="bg-white text-black py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-4">
            Let's <span className="text-green-600">Connect</span>.
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg font-mono text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’m always open to
            new ideas and discussions. Let’s bring something awesome to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Panel: Contact Cards + Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-mono font-bold mb-6">
                Get <span className="text-green-600">In Touch</span>
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      className="block bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white border border-green-200 rounded-lg">
                          <IconComponent
                            className={`${method.color}`}
                            size={24}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-mono font-semibold mb-1">
                            {method.title}
                          </h4>
                          <p className="font-mono text-green-600 text-sm font-medium">
                            {method.value}
                          </p>
                          <p className="font-mono text-gray-500 text-sm">
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
              <h4 className="text-lg font-mono font-semibold mb-4">
                Find Me Online
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 hover:shadow-md transition-all duration-300 group"
                    >
                      <IconComponent className={`${social.color}`} size={20} />
                      <div className="font-mono text-sm">
                        <p className="text-black font-medium">{social.name}</p>
                        <p className="text-gray-600 text-xs">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-mono font-semibold text-green-800">
                  Available for Work
                </h4>
              </div>
              <p className="font-mono text-sm text-gray-700 mb-3">
                Currently open to exciting projects, collaborations, and new
                roles.
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
                <Clock size={14} />
                <span>Response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form */}
          <div>
            <h3 className="text-2xl font-mono font-bold mb-6">
              Send a <span className="text-green-600">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-black font-mono text-sm focus:border-green-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-black font-mono text-sm focus:border-green-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-black font-mono text-sm focus:border-green-500 focus:outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-mono font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-black font-mono text-sm focus:border-green-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 font-mono font-semibold text-sm transition-all duration-300 rounded flex items-center justify-center space-x-2 ${isSubmitted
                    ? 'bg-green-600 text-white'
                    : isSubmitting
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-400'
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

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3 pb-2 border-b border-green-200">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 text-xs font-mono ml-4">
                  ~/contact-info
                </span>
              </div>
              <p className="text-green-700 text-xs font-mono">
                <span className="text-gray-500">$</span> echo "Thanks for reaching out!"
              </p>
              <p className="text-black text-xs font-mono mt-1">
                I’ll get back to you shortly.
              </p>
              <p className="text-green-700 text-xs font-mono">
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
