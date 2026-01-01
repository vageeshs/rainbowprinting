import React from 'react';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import FeaturesSection from './sections/FeaturesSection';
import CtaSection from './sections/CtaSection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
