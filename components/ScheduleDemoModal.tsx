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
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    // Validate form: name must not be empty and at least one service must be selected
    setIsFormValid(formData.name.trim() !== '' && selectedServices.length > 0);
  }, [formData.name, selectedServices]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    // --- Step 1: Send data to Google Sheet via Apps Script ---
    // IMPORTANT: Replace this placeholder with your actual Google Apps Script URL from Step 3
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzS_Mo2JpHFadPM738BEuq1w5L1wEnSPk5pAhbBbvpQcKTBNLXF0YhYBwgm5APpjFk/exec';

    try {
      const submissionData = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        services: selectedServices,
      };
      
      // Use 'text/plain' for the body to work with the 'no-cors' mode of fetch
      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

    } catch (error) {
      console.error("Error submitting to Google Sheet:", error);
      // We will still proceed to WhatsApp even if this fails
    }

    // --- Step 2: Open WhatsApp link ---
    let message = `Hello, my name is ${formData.name.trim()}`;
    if (formData.company.trim()) {
      message += ` from ${formData.company.trim()}`;
    }
    message += `.

I'm proactively looking to enhance our business processes and I'm very interested in how we can leverage your expertise.

Specifically, I'd like to discuss the following services:
- ${selectedServices.join('\n- ')}

Ready to explore how we can implement these solutions. Please let me know the next steps for a consultation.`;

    if (formData.email.trim()) {
      message += `

You can also reach me at: ${formData.email.trim()}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '923182339392';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    setIsSubmitting(false);
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

        <h2 className="text-2xl font-bold text-primary mb-2">Request a Free Consultation</h2>
        <p className="text-slate-600 mb-6">Let's discuss how we can elevate your business.</p>
        
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="e.g., John Doe" required />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company / Shop Name <span className="text-slate-400">(Optional)</span></label>
            <input type="text" name="company" id="company" value={formData.company} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="e.g., Innovate Inc." />
          </div>
           <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-slate-400">(Optional)</span></label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="e.g., john.doe@example.com" />
          </div>
        </div>
        
        <p className="text-sm font-medium text-slate-700 mb-2">I'm interested in... <span className="text-red-500">*</span></p>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 mb-6 border rounded-md p-3">
          {services.map(service => (
            <label key={service} className="flex items-center p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
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
          onClick={handleSubmit}
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-all transform hover:scale-105 disabled:bg-orange-300 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Send via WhatsApp'}
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