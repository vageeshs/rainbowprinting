import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-slate-900 text-white border-t border-purple-800 pt-12">
      <div className="container pb-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">PrintPro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional printing solutions in Bangalore that bring your ideas to life with 
              unmatched quality, precision, and creativity. Direct UV Printing WITH WHITE available.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#quote-form?service=uv-printing" className="text-gray-400 hover:text-white transition-colors">UV Printing</a></li>
              <li><a href="#quote-form?service=banner-printing" className="text-gray-400 hover:text-white transition-colors">Banner Printing</a></li>
              <li><a href="#quote-form?service=laser-cutting" className="text-gray-400 hover:text-white transition-colors">Laser Cutting</a></li>
              <li><a href="#quote-form?service=laser-printing" className="text-gray-400 hover:text-white transition-colors">Digital Printing</a></li>
              <li><a href="#quote-form?service=custom" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">Portfolio</button></li>
              <li><a href="#quote-form" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">Blog</button></li>
              <li><a href="#quote-form" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919845320533" className="text-gray-400 hover:text-white transition-colors">98453 20533</a>
                  <a href="tel:+919980532433" className="text-gray-400 hover:text-white transition-colors">9980 532 433</a>
                  <a href="tel:+919740223633" className="text-gray-400 hover:text-white transition-colors">9740 223 633</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="https://wa.me/919845320533" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp: 98453 20533
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">hello@rainbowprint.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Bangalore, Karnataka<br />
                  India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2024 PrintPro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



