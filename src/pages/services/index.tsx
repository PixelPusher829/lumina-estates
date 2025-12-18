import React from 'react';
import Hero from './Hero';
import Residential from './Residential';
import Investment from './Investment';
import PropertyManagement from './PropertyManagement';
import Cta from './Cta';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <Residential />
      <Investment />
      <PropertyManagement />
      <Cta />
    </div>
  );
};

export default Services;