import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Award, Users, Headphones, Star } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Quick turnaround times without compromising on quality. Get your projects delivered on time, every time.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'State-of-the-art equipment and premium materials ensure exceptional results that exceed expectations.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or concerns about your printing needs.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced professionals with years of expertise in printing technology and design optimization.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Users,
      title: 'Bulk Orders',
      description: 'Specialized handling for large volume orders with competitive pricing and dedicated project management.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: Headphones,
      title: 'Custom Solutions',
      description: 'Tailored printing solutions designed specifically for your unique requirements and business needs.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6 border border-purple-200"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Why Choose PrintPro?
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Excellence in Every
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Print
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with exceptional service to deliver 
            printing solutions that help your business stand out from the competition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-300 hover:border-purple-500 transition-all duration-500 h-full transform hover:-translate-y-2 hover:shadow-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
