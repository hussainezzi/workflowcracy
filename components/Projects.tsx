import React from 'react';
import { CpuChipIcon, WebsiteIcon, BoltIcon, SunIcon, ChartBarIcon, CogIcon } from './icons';

const projectData = [
  {
    category: 'Business Magics with Generative AI',
    icon: <BoltIcon />,
    items: [
      {
        title: 'Lesson Architect AI',
        link: 'https://lesson-architect.vercel.app/',
      },
      {
        title: 'AI Recipe Inventor',
        link: 'https://ai-recipe-inventor.vercel.app/',
      },
      {
        title: 'Real Estate Collateral AI',
        link: 'https://real-estate-collateral-ai.vercel.app/',
      },
      {
        title: 'AI Apparel Studio',
        link: 'https://apparel-ai-studio.vercel.app/',
      },
      {
        title: 'Game Concept Maker',
        link: 'https://indie-game-concept-prototyper.vercel.app/',
      },
    ],
  },
  {
    category: 'Solar Panel Business With Gen AI',
    icon: <SunIcon />,
    items: [
      {
        title: 'Solar Genius Sales PWA',
        link: 'https://solar-genius-pwa.vercel.app/',
      },
      {
        title: 'Dynamic Solar Proposal Presenter',
        link: 'https://solar-genius-presenter.vercel.app/',
      },
      {
        title: 'AI Pre-Installation Checklist',
        link: 'https://solar-pre-installation-checklist-ai.vercel.app/',
      },
      {
        title: 'Solar Success AI Toolkit',
        link: 'https://solar-success-ai.vercel.app/',
      },
    ],
  },
  {
    category: 'n8n Automation Workflows',
    icon: <CogIcon />,
    items: [
      {
        title: 'Gmail Auto Labeling',
        link: 'https://n8n.srv1069133.hstgr.cloud/workflow/okI529F7dooyLAje',
      },
      {
        title: 'Task Managment bot',
        link: 'https://n8n.srv1069133.hstgr.cloud/webhook/df8223bf-119c-44d5-9bbf-f74ae26828e8/chat',
      },
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
    category: 'Data Analytics with Power BI',
    icon: <ChartBarIcon />,
    items: [
      {
        title: 'Business Insights 360',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZTMzMjBiYWYtYjdlNS00Y2I2LWJhYjItMzE3MWE5MWYyYjI4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'IPL Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZjAyYjBlNTctYzc4Yy00YWRiLTg4YmEtNDFjYmVjMTE1ODRmIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'Revenue Insights for AtliQ Hotels',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZDdiOWVkZjAtYzMzMC00YjFmLWEyMzgtMzU5MjVkZGUxZDkzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'Road Accident Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMDg1OTBiOWItY2Q0ZC00OTJiLWJmODktZTFhMmYxMzM4Mjk0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
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
      {
        title: 'Fruit Pop Boba store',
        link: 'https://fruitypopboba.vercel.app/',
      },
      {
        title: 'Quran Majeed Memorization Goal Tracker',
        link: 'https://hifz-goal-tracker.vercel.app/',
      },
      {
        title: 'AI WITH EZZI',
        link: 'https://ai-with-ezzi.vercel.app/',
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="our-projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Projects</h2>
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