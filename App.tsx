import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import WorkPolicy from './components/WorkPolicy';
import NotFound from './pages/NotFound';

/**
 * A new page should start at the top.
 *
 * Browsers restore the previous scroll position on client-side navigation,
 * which lands the visitor halfway down a page they have never seen.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

/**
 * The Router itself lives in index.tsx rather than here, so that the
 * build-time pre-render can wrap this same tree in a StaticRouter.
 */
const App: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-[var(--color-ice)]">
    <a href="#main" className="skip-link">
      Skip to content
    </a>

    <ScrollToTop />
    <Header />

    <main id="main" className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work-policy" element={<WorkPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

    <Footer />
  </div>
);

export default App;
