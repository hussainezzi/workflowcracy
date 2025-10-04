import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Founders from './components/Founders';
import Videos from './components/Videos';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Founders />
        <Videos />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;