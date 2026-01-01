import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { ArrowRight, CheckCircle, Star, Zap, Award, Clock, Sparkles, Shield, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {

  const getImagePath = (productId: string) => {
    const imageMap: { [key: string]: string } = {
      'uv-printing': '/images/UV Flatbed printer.jpeg',
      'banner-printing': '/images/Banner printer.png',
      'laser-printing': '/images/Lazer printer.png',
      'laser-cutting': '/images/lazer cutting machine.png'
    };
    return imageMap[productId] || '/images/UV Flatbed printer.jpeg';
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/5 rounded-full blur-2xl"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-32 right-32 w-24 h-24 border border-purple-300/15 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-lg"
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 text-sm font-medium mb-6 border border-purple-200/50"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Printing Services
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Discover our comprehensive range of professional printing services, 
            each designed to meet your specific needs with precision and quality.
          </p>
          <p className="text-lg text-purple-600 font-semibold">
            💡 Need help choosing? <a href="#quote-form" className="underline hover:text-purple-700">Compare pricing & get instant quote</a>
          </p>
        </motion.div>

        {/* Visual Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const imagePath = getImagePath(product.id);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 overflow-hidden h-full"
                >
                  {/* Visual Product Header with Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
                    <img 
                      src={imagePath} 
                      alt={product.name}
                      className="w-4/5 h-4/5 object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors">
                        {product.name}
                        {product.id === 'uv-printing' && (
                          <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold align-middle">
                            WITH WHITE
                          </span>
                        )}
                      </h3>
                      <p className="text-base text-purple-500 font-semibold">
                        {product.category}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Visual Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Visual Materials Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Materials
                      </h4>
                      <p className="text-sm text-purple-600 font-medium">
                        {product.materials.slice(0, 5).join(', ')}
                        {product.materials.length > 5 && `, +${product.materials.length - 5} more`}
                      </p>
                    </div>

                    {/* Pricing Hint */}
                    <div className="mb-4 text-center">
                      <span className="text-xs text-gray-500">Starting from </span>
                      <span className="text-lg font-bold text-purple-600">
                        {product.id === 'uv-printing' ? '₹50/sq.ft' : 
                         product.id === 'banner-printing' ? '₹30/sq.ft' :
                         product.id === 'laser-printing' ? '₹2/page' :
                         product.id === 'laser-cutting' ? '₹5/cut' : 'Get Quote'}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">*Final price depends on material & quantity</span>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`#quote-form?service=${product.id}`}
                      className="group w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Order {product.name}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
