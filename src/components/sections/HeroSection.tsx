import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Zap, Sparkles, Shield, Clock, Upload, Phone, FileText, Scissors } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-16 flex items-center overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/5 rounded-full blur-3xl"></div>
      </div>


      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium border border-purple-200"
            >
              <Sparkles className="w-5 h-5 mr-3 text-yellow-500" />
              <span>Direct UV Printing WITH WHITE Available</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Transform Your
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ideas Into Reality
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              From UV printing on any surface to precision laser cutting, we deliver 
              exceptional quality that brings your vision to life with unmatched precision.
            </motion.p>

            {/* Key Features - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 py-4"
            >
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-purple-600">Premium Quality</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-pink-600">Fast Turnaround</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600">24/7 Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#quote-form"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Upload className="w-6 h-6 mr-2 relative z-10" />
                <span className="relative z-10">Upload Design & Get Quote</span>
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <a 
                href="https://wa.me/919845320533"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-110"
                title="WhatsApp Us"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </motion.div>
            
            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <a href="tel:+919845320533" className="flex items-center hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">98453 20533</span>
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+919980532433" className="flex items-center hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>9980 532 433</span>
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">Bangalore, India</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Large Visual Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-4">
                  {/* Visual Service Cards */}
                  <div className="grid gap-4">
                    <a
                      href="#quote-form?service=uv-printing"
                      className="block"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Zap className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">UV Printing</div>
                            <div className="text-sm text-purple-600">15+ Materials • WITH WHITE</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">Order Now</div>
                        </div>
                      </motion.div>
                    </a>
                    
                    <a
                      href="#quote-form?service=banner-printing"
                      className="block"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Award className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">Banner Printing</div>
                            <div className="text-sm text-gray-600">Large Format</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full">Order Now</div>
                        </div>
                      </motion.div>
                    </a>
                    
                    <a
                      href="#quote-form?service=laser-cutting"
                      className="block"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-gray-300 hover:border-orange-400 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Scissors className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">Laser Cutting</div>
                            <div className="text-sm text-gray-600">Precision Work</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-2 rounded-full">Order Now</div>
                        </div>
                      </motion.div>
                    </a>
                    
                    <a
                      href="#quote-form?service=laser-printing"
                      className="block"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-gray-300 hover:border-rose-400 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                            <FileText className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">Laser Printing</div>
                            <div className="text-sm text-gray-600">Digital Printing</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-2 rounded-full">Order Now</div>
                        </div>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
