import React from 'react';
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
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our AI Automation Services</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            From simple tasks to complex enterprise processes, we have an automation solution for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-light/10 text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;