import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary to-primary-light text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight">
          WorkflowCracy
        </h1>
        <p className="text-2xl md:text-3xl text-cyan-100 max-w-3xl mx-auto">
          Rule Your Business with <span className="text-secondary font-semibold">Automated</span> Workflows
        </p>
        <p className="text-lg md:text-xl mt-8 mb-8 text-cyan-200 max-w-3xl mx-auto">
          We leverage cutting-edge AI to streamline your operations, boost efficiency, and unlock your business's true potential.
        </p>
        <a
          href="#contact"
          className="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 inline-block"
        >
          Schedule a Free Demo
        </a>
      </div>
    </section>
  );
};

export default Hero;