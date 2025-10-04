import React from 'react';
import { CheckCircleIcon } from './icons';

const steps = [
  {
    name: 'Discovery & Analysis',
    description: 'We start by understanding your business goals and analyzing your existing workflows to identify automation opportunities.',
  },
  {
    name: 'Strategy & Design',
    description: 'Our experts design a custom AI automation strategy and blueprint tailored to your specific needs.',
  },
  {
    name: 'Implementation & Integration',
    description: 'We build and seamlessly integrate the automation solution into your current systems with minimal disruption.',
  },
  {
    name: 'Support & Optimization',
    description: 'We provide ongoing support and continuously optimize your automated workflows for peak performance.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Simple 4-Step Process</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We make the journey to automation clear, simple, and effective.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-light/50 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md border border-slate-200">
                 <div className="flex items-center justify-center mx-auto mb-4 h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.name}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;