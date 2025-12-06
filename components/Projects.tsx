import React, { useRef, useEffect, useState } from 'react';
import { CpuChipIcon, WebsiteIcon, BoltIcon, SunIcon, ChartBarIcon, CogIcon, BriefcaseIcon } from './icons';

interface ProjectItem {
  title: string;
  link: string;
  videoUrl?: string;
  categoryName?: string; // Added for the 'All' view
  categoryIcon?: React.ReactNode; // Added for the 'All' view
}

interface ProjectCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  items: ProjectItem[];
}

const projectData: ProjectCategory[] = [
  {
    id: 'web',
    category: 'Web Applications',
    icon: <WebsiteIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Saifee Foods',
        link: 'https://saifeefoods.store',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031468/saifeefoods.store_vjeypo.mp4'
      },
      {
        title: 'Hussain Nimco',
        link: 'https://hussainnimco.vercel.app',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031443/hussainnimco_dfmisj.mp4'
      },
      {
        title: 'Pristine Solar Cleaning',
        link: 'https://pristine-solar-cleaning.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031447/pristine_solar_care_u0ohqu.mp4'
      },
      {
        title: 'Banana Bites',
        link: 'https://bananabites.vercel.app',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031309/bananabites_tvwzgp.mp4'
      },
      {
        title: 'Ezzi Home Gadgets',
        link: 'https://ezzi-home-gadgets.vercel.app/',
      },
      {
        title: 'Fruit Pop Boba',
        link: 'https://fruitypopboba.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031450/fruitypopbobba_wvry5z.mp4'
      },
      {
        title: 'Hifz Goal Tracker',
        link: 'https://hifz-goal-tracker.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031492/quran_majeed_hifz_tracker_u1jobp.mp4'
      },
      {
        title: 'AI WITH EZZI',
        link: 'https://ai-with-ezzi.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031276/ai_with_ezzi_lgxvat.mp4'
      },
      {
        title: 'Ezzi Home Automation',
        link: 'https://ezzi-home-automation.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031200/ezzihomeautomation_ksvkdl.mp4'
      },
    ],
  },
  {
    id: 'enterprise',
    category: 'Enterprise Apps',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    items: [
      {
        title: 'MSB Result Portal',
        link: 'https://script.google.com/macros/s/AKfycbw2Ky77yKcFASI80B0ARvyTYQWi_ydTbInhJThUUGfsKSRVayfe3RZkytJFlM1-SEOy/exec',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031318/MSB_Result_Portal_zcekvq.mp4'
      },
      {
        title: 'Fatemi Tailors Portal',
        link: 'https://script.google.com/macros/s/AKfycbw4V06vbG0ai7trJz2FzVD-bP7PY6qyi1xpWDS2HW82C2TlL18xIDwP1oWqKwGAkNGQvg/exec',
      },
    ],
  },
  {
    id: 'genai',
    category: 'Gen AI Magics',
    icon: <BoltIcon className="h-5 w-5" />,
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
        title: 'Real Estate AI',
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
      {
        title: 'Kindergarten Gen',
        link: 'https://kindergarten-worksheet-generator.vercel.app/',
      },
      {
        title: 'Virtual Try-on',
        link: 'https://fatemi-tailors.vercel.app/',
      },
    ],
  },
  {
    id: 'solar',
    category: 'Solar AI',
    icon: <SunIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Solar Sales PWA',
        link: 'https://solar-genius-pwa.vercel.app/',
      },
      {
        title: 'Proposal Presenter',
        link: 'https://solar-genius-presenter.vercel.app/',
      },
      {
        title: 'Install Checklist',
        link: 'https://solar-pre-installation-checklist-ai.vercel.app/',
      },
      {
        title: 'Success AI Toolkit',
        link: 'https://solar-success-ai.vercel.app/',
      },
    ],
  },
  {
    id: 'n8n',
    category: 'n8n Automation',
    icon: <CogIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Gmail Auto Labeling',
        link: 'https://n8n.srv1069133.hstgr.cloud/workflow/okI529F7dooyLAje',
      },
      {
        title: 'Task Manager Bot',
        link: 'https://n8n.srv1069133.hstgr.cloud/webhook/df8223bf-119c-44d5-9bbf-f74ae26828e8/chat',
      },
      {
        title: 'Scholarship Chatbot',
        link: 'https://n8n.aiwithezzi.cfd/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
      },
      {
        title: 'Map Scraper Agent',
        link: 'https://n8n.aiwithezzi.cfd/webhook/1368b305-38cc-4d34-be78-fd57edcbc755/chat',
      },
    ],
  },
  {
    id: 'ml',
    category: 'Machine Learning',
    icon: <CpuChipIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Health Cost AI',
        link: 'https://healthcare-premium-predictor-msme-1514.streamlit.app/',
      },
      {
        title: 'Risk Modelling',
        link: 'https://credit-score-predictor-msme-1514.streamlit.app/',
      },
      {
        title: 'Car Damage AI',
        link: 'https://car-damage-detection-msme-1065.streamlit.app/',
      },
      {
        title: 'Spam Classifier',
        link: 'https://sms-spam-detector-msme-1514.streamlit.app/',
      },
      {
        title: 'Image Captions',
        link: 'https://image-caption-generator-msme1514.streamlit.app/',
      },
    ],
  },
  {
    id: 'analytics',
    category: 'Power BI',
    icon: <ChartBarIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Business Insights',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZTMzMjBiYWYtYjdlNS00Y2I2LWJhYjItMzE3MWE5MWYyYjI4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'IPL Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZjAyYjBlNTctYzc4Yy00YWRiLTg4YmEtNDFjYmVjMTE1ODRmIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'Revenue Insights',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZDdiOWVkZjAtYzMzMC00YjFmLWEyMzgtMzU5MjVkZGUxZDkzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
      {
        title: 'Accident Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMDg1OTBiOWItY2Q0ZC00OTJiLWJmODktZTFhMmYxMzM4Mjk0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      },
    ],
  },
];

const getOptimizedVideoUrl = (url: string) => {
  if (url.includes('cloudinary.com') && url.includes('/upload/')) {
    // Optimized for quality but keeps full length
    return url.replace('/upload/', '/upload/w_500,q_auto,f_auto,ac_none/');
  }
  return url;
};

// Generates a consistent gradient based on string characters
const generateGradient = (str: string) => {
  const colors = [
    'from-blue-400 to-indigo-500',
    'from-emerald-400 to-cyan-500',
    'from-orange-400 to-pink-500',
    'from-purple-400 to-fuchsia-500',
    'from-teal-400 to-green-500',
    'from-rose-400 to-red-500',
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const optimizedVideoUrl = item.videoUrl ? getOptimizedVideoUrl(item.videoUrl) : undefined;
  const gradientClass = !optimizedVideoUrl ? generateGradient(item.title) : '';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia('(hover: none)').matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(error => console.log('Autoplay prevented:', error));
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches && videoRef.current) {
      videoRef.current.play().catch(error => console.log('Hover play prevented:', error));
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 overflow-hidden h-full ring-1 ring-slate-900/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Section (Video or Gradient) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        {optimizedVideoUrl ? (
          <video
            ref={videoRef}
            src={optimizedVideoUrl}
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradientClass} flex items-center justify-center p-6`}>
             <div className="text-white opacity-80 transform scale-150">
               {item.categoryIcon ? item.categoryIcon : <BoltIcon className="h-12 w-12" />}
             </div>
          </div>
        )}
        
        {/* Category Badge overlay */}
        {item.categoryName && (
           <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
             {item.categoryName}
           </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {item.title}
        </h4>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-secondary hover:text-orange-600 transition-colors"
          >
            Visit Live Site
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <div className="bg-slate-50 p-2 rounded-full text-slate-400 group-hover:text-primary transition-colors">
             {item.categoryIcon || <BoltIcon className="h-4 w-4"/>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('web');

  // Flatten items for 'All' view if we wanted that, but for now we stick to categories
  // Let's create a special 'all' view
  const allProjects = projectData.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      categoryName: cat.category,
      categoryIcon: cat.icon
    }))
  );

  const displayedProjects = activeTab === 'all' 
    ? allProjects 
    : projectData.find(cat => cat.id === activeTab)?.items || [];

  const currentCategoryIcon = activeTab === 'all' 
    ? <BoltIcon /> 
    : projectData.find(cat => cat.id === activeTab)?.icon;

  return (
    <section id="our-projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">Product Showcase</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our suite of intelligent applications and automation solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm py-4 rounded-xl">
           <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === 'all'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 transform scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>All</span>
            </button>
          {projectData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === category.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 transform scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>{category.category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} item={project} />
          ))}
        </div>

        {displayedProjects.length === 0 && (
           <div className="text-center py-20">
             <p className="text-slate-500">No projects found in this category yet.</p>
           </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;