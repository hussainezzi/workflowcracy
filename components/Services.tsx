import React, { useEffect, useRef, useState } from 'react';
import { CogIcon, ChartBarIcon, ChatBubbleLeftRightIcon, BoltIcon, DocumentChartBarIcon, UsersIcon } from './icons';

const services = [
  {
    icon: <CogIcon />,
    title: 'Custom Workflow Automation',
    description: 'We design and build bespoke automation solutions that fit your unique business processes like a glove.',
  },
  {
    icon: <DocumentChartBarIcon />,
    title: 'Intelligent Data Processing',
    description: 'Automate data entry, extraction, and analysis from any document format to save time and reduce errors.',
  },
  {
    icon: <ChatBubbleLeftRightIcon />,
    title: 'AI-Powered Chatbots',
    description: 'Enhance customer engagement with intelligent 24/7 chatbots for support, sales, and lead generation.',
  },
  {
    icon: <ChartBarIcon />,
    title: 'Business Analytics',
    description: 'Gain actionable insights from your data with automated reporting and predictive analytics dashboards.',
  },
  {
    icon: <BoltIcon />,
    title: 'Process Optimization',
    description: 'Identify bottlenecks and inefficiencies in your current workflows with our AI-driven process analysis.',
  },
  {
    icon: <UsersIcon />,
    title: 'CRM Automation',
    description: 'Streamline your sales and marketing funnels by automating lead nurturing, follow-ups, and data management.',
  },
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation only once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-70 animate-pulse-slow" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Our AI Automation Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From simple tasks to complex enterprise processes, we orchestrate intelligent solutions that work while you sleep.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform border border-slate-100 hover:border-primary/20 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Hover Gradient Background (Subtle) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-primary-light" />
                <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                  <span className="text-primary group-hover:text-primary-light group-hover:scale-110 transition-all duration-300">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "h-8 w-8" })}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
                  {service.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Services;