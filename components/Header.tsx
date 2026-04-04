import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();
    const targetId = href.substring(1);
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === '/' && state?.scrollTo) {
      const targetId = state.scrollTo;
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear state
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Projects', href: '#our-projects', highlight: true },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Work Policy', to: '/work-policy' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const isWorkPolicy = location.pathname === '/work-policy';
  const headerTextColor = isScrolled || isWorkPolicy ? 'text-dark' : 'text-white';
  const headerBg = isScrolled || isWorkPolicy ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <LogoIcon className="h-10 w-auto" />
            <span className={`text-xl lg:text-2xl font-bold hidden sm:inline transition-colors ${headerTextColor}`}>AI with Ezzi</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`font-medium whitespace-nowrap transition-colors ${headerTextColor} hover:text-primary`}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className={`font-medium whitespace-nowrap transition-colors ${headerTextColor} hover:text-primary ${link.highlight ? 'highlight-link' : ''}`}
                >
                  {link.name}
                </a>
              )
            ))}
            <a href="#contact" onClick={handleNavClick} className="bg-secondary text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 whitespace-nowrap">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors ${headerTextColor}`} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-dark hover:text-primary transition-colors font-medium text-center"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={handleNavClick} 
                    className={`text-dark hover:text-primary transition-colors font-medium text-center ${link.highlight ? 'highlight-link' : ''}`}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a href="#contact" onClick={handleNavClick} className="bg-secondary text-white font-semibold text-center px-5 py-2 rounded-full hover:bg-orange-600 transition-all">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
