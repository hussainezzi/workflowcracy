import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, CpuChipIcon, WebsiteIcon } from './icons';

const projectData = [
  {
    category: 'Business Chatbots',
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    items: [
      {
        title: 'Scholarship Data Chatbot',
        link: 'https://n8n.aiwithezzi.cfd/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
      },
      {
        title: 'Google Map Scraper AI Agent',
        link: 'https://n8n.aiwithezzi.cfd/webhook/1368b305-38cc-4d34-be78-fd57edcbc755/chat',
      },
    ],
  },
  {
    category: 'Machine Learning Projects',
    icon: <CpuChipIcon />,
    items: [
      {
        title: 'Health Cost Predictor',
        link: 'https://healthcare-premium-predictor-msme-1514.streamlit.app/',
      },
      {
        title: 'Risk Modelling',
        link: 'https://credit-score-predictor-msme-1514.streamlit.app/',
      },
      {
        title: 'Car Damage Detection App',
        link: 'https://car-damage-detection-msme-1065.streamlit.app/',
      },
      {
        title: 'SMS Spam Classifier',
        link: 'https://sms-spam-detector-msme-1514.streamlit.app/',
      },
      {
        title: 'Image Captions Generator',
        link: 'https://image-caption-generator-msme1514.streamlit.app/',
      },
    ],
  },
  {
    category: 'Web Applications',
    icon: <WebsiteIcon />,
    items: [
      {
        title: 'Ezzi Home Gadgets Ecommerce store',
        link: 'https://ezzi-home-gadgets.vercel.app/',
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Explore Our Live Projects</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            See our expertise in action with these live applications and demos.
          </p>
        </div>
        <div className="space-y-16">
          {projectData.map((category) => (
            <div key={category.category}>
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 text-primary">{category.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark ml-4">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((project) => (
                  <div key={project.title} className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-slate-200 flex flex-col">
                    <h4 className="text-xl font-bold mb-4 text-primary flex-grow">{project.title}</h4>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-secondary hover:text-orange-600 transition-colors self-start"
                    >
                      View Project &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;