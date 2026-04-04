import React, { useRef, useEffect, useState } from 'react';
import { CpuChipIcon, WebsiteIcon, BoltIcon, SunIcon, ChartBarIcon, CogIcon, BriefcaseIcon, WhatsAppIcon } from './icons';

interface ProjectItem {
  title: string;
  link: string;
  videoUrl?: string;
  categoryName?: string;
  categoryIcon?: React.ReactNode;
  isFeatured?: boolean;
  techStack?: string[];
  description?: string;
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
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031468/saifeefoods.store_vjeypo.mp4',
        techStack: ['React', 'Node.js', 'Cloudinary'],
        description: 'E-commerce platform for premium food products.'
      },
      {
        title: 'Hussain Nimco',
        link: 'https://hussainnimco.vercel.app',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031443/hussainnimco_dfmisj.mp4',
        techStack: ['Next.js', 'Tailwind CSS'],
        description: 'Online store for traditional snacks and nimco.'
      },
      {
        title: 'Pristine Solar Cleaning',
        link: 'https://pristine-solar-cleaning.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031447/pristine_solar_care_u0ohqu.mp4',
        techStack: ['React', 'Framer Motion'],
        description: 'Service booking platform for solar panel maintenance.'
      },
      {
        title: 'Banana Bites',
        link: 'https://bananabites.vercel.app',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031309/bananabites_tvwzgp.mp4',
        techStack: ['React', 'Firebase'],
        description: 'Food delivery and ordering application.'
      },
      {
        title: 'Fruit Pop Boba',
        link: 'https://fruitypopboba.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031450/fruitypopbobba_wvry5z.mp4',
        techStack: ['React', 'Vite'],
        description: 'Interactive menu for a boba tea shop.'
      },
      {
        title: 'Hifz Goal Tracker',
        link: 'https://hifz-goal-tracker.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031492/quran_majeed_hifz_tracker_u1jobp.mp4',
        techStack: ['React', 'LocalStorage'],
        description: 'Progress tracking tool for Quran memorization.'
      },
      {
        title: 'AI WITH EZZI',
        link: 'https://ai-with-ezzi.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031276/ai_with_ezzi_lgxvat.mp4',
        techStack: ['React', 'Three.js'],
        description: 'Personal portfolio and AI services showcase.'
      },
      {
        title: 'Ezzi Home Automation',
        link: 'https://ezzi-home-automation.vercel.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031200/ezzihomeautomation_ksvkdl.mp4',
        techStack: ['React', 'IoT Integration'],
        description: 'Control panel for smart home automation systems.'
      },
      {
        title: 'MSB Nairobi Website',
        link: 'https://msbnairobi.com/#/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773706054/msbnairobi_site_zxavmn.mp4',
        techStack: ['Web Design', 'Responsive'],
        description: 'Official website for MSB Nairobi, featuring a modern and responsive design.'
      },
      {
        title: 'Hakimi Herbals',
        link: 'https://hakimiherbals.com/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773708096/hakimi_herbals_website_etyhmc.mp4',
        techStack: ['E-commerce', 'Herbal Products'],
        description: 'Online store for natural herbal remedies and wellness products.'
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
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1765031318/MSB_Result_Portal_zcekvq.mp4',
        techStack: ['Google Apps Script', 'HTML/CSS'],
        description: 'Automated result management and distribution portal.'
      },
      {
        title: 'School Discipline App',
        link: 'https://msbnairobi.com/#/hasanat',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773706373/hasnaat_app_2_cvo36b.mp4',
        techStack: ['Google Apps Script', 'Dashboard'],
        description: 'Behaviour marks entry, record management, and analytics dashboard.'
      },
      {
        title: 'Event Registration App',
        link: 'https://script.google.com/macros/s/AKfycbyBxThU5phVk2VR7NfYESzw1QSqlPfHVgTlLL8AjVN9BfB6iZGnDzH1502CYVkKqSad/exec',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773706014/event_registration_app_uj7kts.mp4',
        techStack: ['Google Apps Script', 'Sheets API'],
        description: 'School event registration system with real-time dashboard.'
      },
      {
        title: 'School Management System',
        link: 'https://script.google.com/a/macros/jameasaifiyah.edu/s/AKfycbx7tu4Ar_D0Hw3A5bBxXcngfxyYLO2_qVDzCObk1SEh6jDyOILMmpaiRVWJ42gsoH1KGg/exec',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773708714/School_Managment_System_oqcuyr.mp4',
        techStack: ['Google Apps Script', 'Enterprise'],
        description: 'Comprehensive management system for educational institutions.'
      },
    ],
  },
  {
    id: 'genai',
    category: 'Gen AI Magics',
    icon: <BoltIcon className="h-5 w-5" />,
    items: [
      {
        title: 'AI Voice Assistant',
        link: '#',
        techStack: ['Whisper', 'GPT-4', 'ElevenLabs'],
        description: 'Real-time multilingual voice assistant.',
        isFeatured: true
      },
      {
        title: 'Lesson Architect AI',
        link: 'https://lesson-architect-ai-732641501460.us-west1.run.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773930179/lesson_architect_nq7bj2.mp4',
        techStack: ['OpenAI', 'React'],
        description: 'AI-powered lesson planning for educators.'
      },
      {
        title: 'AI Recipe Inventor',
        link: 'https://ai-recipe-inventor-732641501460.us-west1.run.app',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773932692/ai_recipe_generator_pyld4r.mp4',
        techStack: ['Gemini API', 'React'],
        description: 'Generates unique recipes based on available ingredients.'
      },
      {
        title: 'Real Estate AI',
        link: 'https://real-estate-collateral-ai.vercel.app/',
        techStack: ['OpenAI Vision', 'React'],
        description: 'Automated property description and analysis.'
      },
      {
        title: 'AI Apparel Studio',
        link: 'https://apparel-ai-studio.vercel.app/',
        techStack: ['Stable Diffusion', 'React'],
        description: 'AI-driven fashion design and visualization.'
      },
      {
        title: 'Game Concept Maker',
        link: 'https://indie-game-concept-prototyper-732641501460.us-west1.run.app/',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773924244/Game_concept_creator_2_z5eaub.mp4',
        techStack: ['GPT-4', 'React'],
        description: 'Prototyping tool for indie game mechanics.'
      },
      {
        title: 'Kindergarten Gen',
        link: 'https://kindergarten-worksheet-generator.vercel.app/',
        techStack: ['DALL-E', 'React'],
        description: 'Automated worksheet generation for kids.'
      },
      {
        title: 'Virtual Try-on',
        link: 'https://fatemi-tailors.vercel.app/',
        techStack: ['Computer Vision', 'React'],
        description: 'Virtual fitting room for custom apparel.'
      },
    ],
  },
  {
    id: 'solar',
    category: 'Solar AI',
    icon: <SunIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Solar Yield Predictor',
        link: '#',
        techStack: ['TensorFlow', 'Weather API'],
        description: 'Predicts solar energy output based on weather data.',
        isFeatured: true
      },
      {
        title: 'Solar Sales PWA',
        link: 'https://solar-genius-pwa.vercel.app/',
        techStack: ['React', 'PWA'],
        description: 'Mobile-first sales tool for solar consultants.'
      },
      {
        title: 'Proposal Presenter',
        link: 'https://solar-genius-presenter.vercel.app/',
        techStack: ['React', 'PDFGen'],
        description: 'Interactive proposal presentation tool.'
      },
      {
        title: 'Install Checklist',
        link: 'https://solar-pre-installation-checklist-ai.vercel.app/',
        techStack: ['React', 'OpenAI'],
        description: 'AI-guided pre-installation verification.'
      },
      {
        title: 'Success AI Toolkit',
        link: 'https://solar-success-ai.vercel.app/',
        techStack: ['React', 'Analytics'],
        description: 'Performance monitoring for solar installations.'
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
        techStack: ['n8n', 'OpenAI', 'Gmail API'],
        description: 'Intelligent email categorization and labeling.'
      },
      {
        title: 'Task Manager Bot',
        link: 'https://n8n.srv1069133.hstgr.cloud/webhook/df8223bf-119c-44d5-9bbf-f74ae26828e8/chat',
        techStack: ['n8n', 'Telegram API'],
        description: 'Telegram bot for managing tasks and reminders.'
      },
      {
        title: 'Scholarship Chatbot',
        link: 'https://n8n.aiwithezzi.cfd/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
        techStack: ['n8n', 'LangChain'],
        description: 'AI assistant for scholarship information.'
      },
      {
        title: 'Map Scraper Agent',
        link: 'https://n8n.aiwithezzi.cfd/webhook/1368b305-38cc-4d34-be78-fd57edcbc755/chat',
        techStack: ['n8n', 'Puppeteer'],
        description: 'Automated data extraction from Google Maps.'
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
        techStack: ['Scikit-learn', 'Streamlit'],
        description: 'Predicts healthcare premiums based on user data.'
      },
      {
        title: 'Risk Modelling',
        link: 'https://credit-score-predictor-msme-1514.streamlit.app/',
        techStack: ['XGBoost', 'Streamlit'],
        description: 'Credit risk assessment and score prediction.'
      },
      {
        title: 'Car Damage AI',
        link: 'https://car-damage-detection-msme-1065.streamlit.app/',
        techStack: ['PyTorch', 'Streamlit'],
        description: 'Computer vision for car damage assessment.'
      },
      {
        title: 'Spam Classifier',
        link: 'https://sms-spam-detector-msme-1514.streamlit.app/',
        techStack: ['NLP', 'Streamlit'],
        description: 'Real-time SMS spam detection system.'
      },
      {
        title: 'Image Captions',
        link: 'https://image-caption-generator-msme1514.streamlit.app/',
        techStack: ['CNN-RNN', 'Streamlit'],
        description: 'Automated caption generation for images.'
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
        techStack: ['Power BI', 'SQL'],
        description: 'Comprehensive business performance dashboard.'
      },
      {
        title: 'IPL Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZjAyYjBlNTctYzc4Yy00YWRiLTg4YmEtNDFjYmVjMTE1ODRmIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        techStack: ['Power BI', 'Data Modeling'],
        description: 'Deep dive into IPL match statistics and trends.'
      },
      {
        title: 'Revenue Insights',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZDdiOWVkZjAtYzMzMC00YjFmLWEyMzgtMzU5MjVkZGUxZDkzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        techStack: ['Power BI', 'DAX'],
        description: 'Financial analysis and revenue forecasting.'
      },
      {
        title: 'Accident Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMDg1OTBiOWItY2Q0ZC00OTJiLWJmODktZTFhMmYxMzM4Mjk0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        techStack: ['Power BI', 'Geospatial'],
        description: 'Visualizing road accident data for safety analysis.'
      },
    ],
  },
  {
    id: 'whatsapp',
    category: 'WhatsApp Automations',
    icon: <WhatsAppIcon className="h-5 w-5" />,
    items: [
      {
        title: 'Leave Management App',
        link: '#',
        videoUrl: 'https://res.cloudinary.com/de0cllasz/video/upload/v1773713398/leave_approval_whatsapp_bot_m83xt1.mp4',
        techStack: ['OpenClaw', 'WhatsApp API'],
        description: 'Automated leave approval and management via WhatsApp bot.'
      },
    ],
  },
];

const getOptimizedVideoUrl = (url: string) => {
  if (url.includes('cloudinary.com') && url.includes('/upload/')) {
    return url.replace('/upload/', '/upload/w_500,q_auto,f_auto,ac_none/');
  }
  return url;
};

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
      {/* Media Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        {optimizedVideoUrl ? (
          <video
            ref={videoRef}
            src={optimizedVideoUrl}
            muted
            loop
            playsInline
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-102"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradientClass} flex items-center justify-center p-6`}>
             <div className="text-white opacity-80 transform scale-150">
               {item.categoryIcon ? item.categoryIcon : <BoltIcon className="h-12 w-12" />}
             </div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.categoryName && (
             <div className="bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-sm w-fit">
               {item.categoryName}
             </div>
          )}
          {item.isFeatured && (
            <div className="bg-secondary text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-sm w-fit flex items-center gap-1">
              <BoltIcon className="h-3 w-3" />
              Featured
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2 line-clamp-1">
          {item.title}
        </h4>
        
        {item.description && (
          <p className="text-sm text-slate-500 line-clamp-2 mb-4">
            {item.description}
          </p>
        )}

        {item.techStack && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.techStack.map((tech) => (
              <span key={tech} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        )}
        
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
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = projectData.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      categoryName: cat.category,
      categoryIcon: cat.icon
    }))
  );

  const filteredProjects = (activeTab === 'all' ? allProjects : projectData.find(cat => cat.id === activeTab)?.items.map(item => ({
    ...item,
    categoryName: projectData.find(cat => cat.id === activeTab)?.category,
    categoryIcon: projectData.find(cat => cat.id === activeTab)?.icon
  })) || []).filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.techStack?.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="our-projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">Product Showcase</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our suite of intelligent applications and automation solutions.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects by name, description or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeTab === 'all'
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span>All Projects</span>
            </button>
            {projectData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  activeTab === category.id
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span className="opacity-70">{category.icon}</span>
                <span>{category.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} item={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
             <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <p className="text-slate-500 font-medium">No projects found matching your criteria.</p>
             <button 
               onClick={() => {setSearchQuery(''); setActiveTab('all');}}
               className="mt-4 text-primary font-semibold hover:underline"
             >
               Clear all filters
             </button>
           </div>
        )}
      </div>
    </section>
  );
};

export default Projects;