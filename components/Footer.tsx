import React from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <LogoIcon className="h-10 w-auto" />
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} AI with Ezzi. All Rights Reserved.</p>
            <p className="text-sm">Be irreplaceable with AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;