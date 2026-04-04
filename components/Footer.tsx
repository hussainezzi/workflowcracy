import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <LogoIcon className="h-10 w-auto" />
          </div>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-6 mb-2">
              <Link to="/work-policy" className="hover:text-primary transition-colors text-sm">Work Policy</Link>
              <a href="#services" className="hover:text-primary transition-colors text-sm">Services</a>
              <a href="#pricing" className="hover:text-primary transition-colors text-sm">Pricing</a>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} AI with Ezzi. All Rights Reserved.</p>
              <p className="text-sm">Be irreplaceable with AI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
