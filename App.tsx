import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Founders from './components/Founders';
import Videos from './components/Videos';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WorkPolicy from './components/WorkPolicy';

const Home: React.FC = () => (
  <main>
    <Hero />
    <Services />
    <HowItWorks />
    <Founders />
    <Videos />
    <Projects />
    <Pricing />
    <Testimonials />
    <CTA />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-50 text-dark">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-policy" element={<WorkPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;