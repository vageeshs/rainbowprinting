import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle, Upload, X, FileText, IndianRupee } from 'lucide-react';

const CtaSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    // Get service from URL hash
    const hash = window.location.hash;
    const serviceMatch = hash.match(/service=([^&]+)/);
    if (serviceMatch) {
      setSelectedService(serviceMatch[1]);
      // Scroll to form
      setTimeout(() => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const getServicePricing = (serviceId: string) => {
    const pricing: { [key: string]: { min: string; note: string } } = {
      'uv-printing': { min: '₹50/sq.ft', note: 'Price varies by material (Glass, MDF, ACP, PVC, Acrylic, Metal, etc.)' },
      'banner-printing': { min: '₹30/sq.ft', note: 'Depends on material type and quantity' },
      'laser-printing': { min: '₹2/page', note: 'Bulk orders get better rates' },
      'laser-cutting': { min: '₹5/cut', note: 'Based on material thickness and complexity' }
    };
    return pricing[serviceId] || { min: 'Get Quote', note: 'Contact us for pricing' };
  };

  const pricing = selectedService ? getServicePricing(selectedService) : null;

  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-900"
          >
            <h2 className="text-display text-heading-2 mb-6 text-gray-900">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of satisfied customers who trust PrintPro for their printing needs. 
              Get started with a free quote and experience the difference of professional printing.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <a href="tel:+919845320533" className="text-purple-600 hover:text-purple-700 transition-colors">98453 20533</a>
                  <span className="text-gray-400 mx-2">|</span>
                  <a href="tel:+919980532433" className="text-purple-600 hover:text-purple-700 transition-colors">9980 532 433</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <a href="https://wa.me/919845320533" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                    Chat with us instantly
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@rainbowprint.in</div>
                </div>
              </div>
            </div>

            {/* Pricing Info Card */}
            {pricing && (
              <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Estimated Starting Price:</span>
                  <span className="text-2xl font-bold text-purple-600 flex items-center">
                    <IndianRupee className="w-5 h-5 mr-1" />
                    {pricing.min.split('₹')[1] || pricing.min}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{pricing.note}</p>
                <p className="text-xs text-gray-500 mt-2">*Final quote provided after reviewing your design & requirements</p>
              </div>
            )}

            {/* Quick CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/919845320533?text=Hi, I need a quote for printing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Quick Quote
              </a>
            </div>
          </motion.div>

          {/* Right Content - Quote Form */}
          <motion.div
            id="quote-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-heading-3 text-gray-900">
                Get Instant Quote
              </h3>
              <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium">
                Upload Design
              </span>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="uv-printing">Direct UV Printing (WITH WHITE)</option>
                  <option value="banner-printing">Banner Printing</option>
                  <option value="laser-printing">Digital Laser Printing</option>
                  <option value="laser-cutting">Laser Cutting</option>
                  <option value="custom">Custom Solution</option>
                </select>
                {selectedService && (
                  <div className="mt-2 text-sm text-purple-600">
                    💡 {getServicePricing(selectedService).note}
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="10 digit mobile number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Same as phone or different"
                />
                {whatsappNumber && (
                  <p className="mt-1 text-xs text-green-600">We'll send quote via WhatsApp</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity / Size
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 100 pieces, 2ft x 3ft, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material (if known)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Glass, MDF, ACP, PVC, Acrylic, Vinyl, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Design Files
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors bg-gray-50">
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.cdr"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <p className="text-sm text-gray-700 mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, AI, EPS, PSD, PNG, JPG, CDR (Max 10MB each)
                    </p>
                  </label>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-gray-900 truncate max-w-xs">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Timeline, special requirements, color preferences, etc."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                {whatsappNumber && (
                  <a
                    href={`https://wa.me/91${whatsappNumber}?text=Hi, I submitted a quote request for ${selectedService || 'printing'}. Please check and send me the quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                )}
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                We'll respond within 2-4 hours during business hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
