import React, { useState, useEffect } from 'react';
import { XIcon } from './icons';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
    'Custom Workflow Automation',
    'Intelligent Data Processing',
    'AI-Powered Chatbots',
    'Business Analytics',
    'Process Optimization',
    'CRM Automation',
    'Machine learning predictions for business',
    'Web development for ecommerce store',
    'Generative AI ad campaigns',
];

const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleCheckboxChange = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSendWhatsApp = () => {
    if (selectedServices.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    const selectedServicesText = selectedServices.join(', ');
    const message = `Hello! I'd like to schedule a free consultation for the following services: ${selectedServicesText}.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '923182339392';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-lg w-full text-dark relative transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-dark transition-colors"
          aria-label="Close modal"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-4">Request a Free Consultation</h2>
        <p className="text-slate-600 mb-6">Select the services you're interested in, and we'll get in touch via WhatsApp.</p>
        
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2 mb-6">
          {services.map(service => (
            <label key={service} className="flex items-center p-3 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                checked={selectedServices.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <span className="ml-3 text-slate-700">{service}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleSendWhatsApp}
          disabled={selectedServices.length === 0}
          className="w-full bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 disabled:bg-orange-300 disabled:cursor-not-allowed disabled:scale-100"
        >
          Send via WhatsApp
        </button>
      </div>
       <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ScheduleDemoModal;
