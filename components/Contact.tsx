"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Kaleshi26",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-500/20"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kalana-dharmarathne-346a48312/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/20"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kalanaeshan07@gmail.com",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-500/20"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/kalanaeshan",
    color: "hover:text-cyan-400",
    bgColor: "hover:bg-cyan-500/20"
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "kalanaeshan07@gmail.com",
    href: "mailto:kalanaeshan07@gmail.com",
    color: "text-red-400"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
    color: "text-green-400"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Peradeniya, Sri Lanka",
    href: "https://maps.google.com/?q=Peradeniya,Sri+Lanka",
    color: "text-blue-400"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities, 
            share ideas, or just have a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, innovative projects, 
                or just connecting with fellow developers and tech enthusiasts. Feel free to 
                reach out through any of the channels below!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:glow-cyan transition-all duration-300 group cursor-pointer"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300`}>
                    <info.icon className={`w-6 h-6 ${info.color} group-hover:text-white transition-colors`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 glass rounded-lg ${social.bgColor} ${social.color} transition-all duration-300 hover:glow-cyan`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-white font-semibold">Currently Available</h4>
              </div>
              <p className="text-gray-400 text-sm">
                I'm open to new opportunities, collaborations, and interesting projects. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  formStatus === 'sending'
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : formStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                }`}
              >
                {formStatus === 'sending' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"
                  />
                )}
                {formStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                {formStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                {formStatus === 'idle' && <Send className="w-5 h-5" />}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
                {formStatus === 'error' && 'Try Again'}
                {formStatus === 'idle' && 'Send Message'}
              </motion.button>
            </form>

            {/* Form Status Messages */}
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
              >
                <p className="text-green-400 text-sm">
                  Thank you for your message! I'll get back to you as soon as possible.
                </p>
              </motion.div>
            )}
            
            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
              >
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or contact me directly via email.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Call to Action */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Start Something Amazing?</h3>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to chat about technology, 
                I'd love to hear from you. Let's create something incredible together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:kalanaeshan07@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 min-w-[160px]"
                >
                  <Mail className="w-5 h-5" />
                  Email Me Directly
                </motion.a>
                <motion.a
                  href="https://github.com/Kaleshi26"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 glass border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 min-w-[160px]"
                >
                  <Github className="w-5 h-5" />
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
