/**
 * The project catalogue.
 *
 * Icons are named here rather than imported as elements, so this file stays
 * plain data and can be read by the build-time pre-render without pulling in
 * React.
 */

export interface ProjectItem {
  title: string;
  link: string;
  videoUrl?: string;
  stack: string[];
  description: string;
}

export interface ProjectCategory {
  id: string;
  category: string;
  icon: string;
  blurb: string;
  items: ProjectItem[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'web',
    category: 'Web Applications',
    icon: 'website',
    blurb: 'Storefronts, booking sites and business websites.',
    items: [
      {
        title: 'Saifee Foods',
        link: 'https://saifeefoods.store',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031468/saifeefoods.store_vjeypo.mp4',
        stack: ['React', 'Node.js', 'Cloudinary'],
        description: 'E-commerce platform for premium food products.',
      },
      {
        title: 'Hussain Nimco',
        link: 'https://hussainnimco.vercel.app',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031443/hussainnimco_dfmisj.mp4',
        stack: ['Next.js', 'Tailwind CSS'],
        description: 'Online store for traditional snacks and nimco.',
      },
      {
        title: 'Pristine Solar Cleaning',
        link: 'https://pristine-solar-cleaning.vercel.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031447/pristine_solar_care_u0ohqu.mp4',
        stack: ['React', 'Framer Motion'],
        description: 'Service booking platform for solar panel maintenance.',
      },
      {
        title: 'Banana Bites',
        link: 'https://bananabites.vercel.app',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031309/bananabites_tvwzgp.mp4',
        stack: ['React', 'Firebase'],
        description: 'Food delivery and ordering application.',
      },
      {
        title: 'Fruity Pop Boba',
        link: 'https://fruitypopboba.vercel.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031450/fruitypopbobba_wvry5z.mp4',
        stack: ['React', 'Vite'],
        description: 'Interactive menu for a boba tea shop.',
      },
      {
        title: 'Hifz Goal Tracker',
        link: 'https://hifz-goal-tracker.vercel.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031492/quran_majeed_hifz_tracker_u1jobp.mp4',
        stack: ['React', 'Local storage'],
        description: 'Progress tracking tool for Quran memorization.',
      },
      {
        title: 'Ezzi Home Automation',
        link: 'https://ezzi-home-automation.vercel.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031200/ezzihomeautomation_ksvkdl.mp4',
        stack: ['React', 'IoT integration'],
        description: 'Control panel for smart home automation systems.',
      },
      {
        title: 'MSB Nairobi',
        link: 'https://msbnairobi.com/#/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773706054/msbnairobi_site_zxavmn.mp4',
        stack: ['Web design', 'Responsive'],
        description: 'Official school website with a modern, responsive design.',
      },
      {
        title: 'Hakimi Herbals',
        link: 'https://hakimiherbals.com/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773708096/hakimi_herbals_website_etyhmc.mp4',
        stack: ['E-commerce', 'Herbal products'],
        description: 'Online store for natural herbal remedies and wellness products.',
      },
    ],
  },
  {
    id: 'enterprise',
    category: 'Enterprise Apps',
    icon: 'briefcase',
    blurb: 'Internal systems for schools and organisations.',
    items: [
      {
        title: 'MSB Result Portal',
        link: 'https://script.google.com/macros/s/AKfycbw2Ky77yKcFASI80B0ARvyTYQWi_ydTbInhJThUUGfsKSRVayfe3RZkytJFlM1-SEOy/exec',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1765031318/MSB_Result_Portal_zcekvq.mp4',
        stack: ['Google Apps Script', 'HTML/CSS'],
        description: 'Automated result management and distribution portal.',
      },
      {
        title: 'School Discipline App',
        link: 'https://msbnairobi.com/#/hasanat',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773706373/hasnaat_app_2_cvo36b.mp4',
        stack: ['Google Apps Script', 'Dashboard'],
        description: 'Behaviour marks entry, record management and analytics.',
      },
      {
        title: 'Event Registration App',
        link: 'https://script.google.com/macros/s/AKfycbyBxThU5phVk2VR7NfYESzw1QSqlPfHVgTlLL8AjVN9BfB6iZGnDzH1502CYVkKqSad/exec',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773706014/event_registration_app_uj7kts.mp4',
        stack: ['Google Apps Script', 'Sheets API'],
        description: 'Event registration system with a real-time dashboard.',
      },
      {
        title: 'School Management System',
        link: 'https://script.google.com/a/macros/jameasaifiyah.edu/s/AKfycbx7tu4Ar_D0Hw3A5bBxXcngfxyYLO2_qVDzCObk1SEh6jDyOILMmpaiRVWJ42gsoH1KGg/exec',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773708714/School_Managment_System_oqcuyr.mp4',
        stack: ['Google Apps Script', 'Enterprise'],
        description: 'Management system for educational institutions.',
      },
    ],
  },
  {
    id: 'genai',
    category: 'Generative AI',
    icon: 'bolt',
    blurb: 'Tools built on top of language and image models.',
    items: [
      {
        title: 'Lesson Architect AI',
        link: 'https://lesson-architect-ai-732641501460.us-west1.run.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773930179/lesson_architect_nq7bj2.mp4',
        stack: ['OpenAI', 'React'],
        description: 'AI-powered lesson planning for educators.',
      },
      {
        title: 'AI Recipe Inventor',
        link: 'https://ai-recipe-inventor-732641501460.us-west1.run.app',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773932692/ai_recipe_generator_pyld4r.mp4',
        stack: ['Gemini API', 'React'],
        description: 'Generates recipes from the ingredients you have.',
      },
      {
        title: 'Real Estate AI',
        link: 'https://real-estate-collateral-ai.vercel.app/',
        stack: ['Vision models', 'React'],
        description: 'Automated property description and analysis.',
      },
      {
        title: 'AI Apparel Studio',
        link: 'https://apparel-ai-studio.vercel.app/',
        stack: ['Image models', 'React'],
        description: 'AI-driven fashion design and visualisation.',
      },
      {
        title: 'Game Concept Maker',
        link: 'https://indie-game-concept-prototyper-732641501460.us-west1.run.app/',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773924244/Game_concept_creator_2_z5eaub.mp4',
        stack: ['LLM', 'React'],
        description: 'Prototyping tool for indie game mechanics.',
      },
      {
        title: 'Kindergarten Worksheets',
        link: 'https://kindergarten-worksheet-generator.vercel.app/',
        stack: ['Image models', 'React'],
        description: 'Automated worksheet generation for young children.',
      },
      {
        title: 'Virtual Try-On',
        link: 'https://fatemi-tailors.vercel.app/',
        stack: ['Computer vision', 'React'],
        description: 'Virtual fitting room for custom apparel.',
      },
    ],
  },
  {
    id: 'solar',
    category: 'Solar Industry',
    icon: 'sun',
    blurb: 'A suite built for solar sales and installation teams.',
    items: [
      {
        title: 'Solar Sales PWA',
        link: 'https://solar-genius-pwa.vercel.app/',
        stack: ['React', 'PWA'],
        description: 'Mobile-first sales tool for solar consultants.',
      },
      {
        title: 'Proposal Presenter',
        link: 'https://solar-genius-presenter.vercel.app/',
        stack: ['React', 'PDF generation'],
        description: 'Interactive proposal presentation tool.',
      },
      {
        title: 'Install Checklist',
        link: 'https://solar-pre-installation-checklist-ai.vercel.app/',
        stack: ['React', 'OpenAI'],
        description: 'AI-guided pre-installation verification.',
      },
      {
        title: 'Success AI Toolkit',
        link: 'https://solar-success-ai.vercel.app/',
        stack: ['React', 'Analytics'],
        description: 'Performance monitoring for solar installations.',
      },
    ],
  },
  {
    id: 'n8n',
    category: 'Automation Workflows',
    icon: 'cog',
    blurb: 'Live n8n workflows running real business processes.',
    items: [
      {
        title: 'Gmail Auto Labelling',
        link: 'https://n8n.srv1069133.hstgr.cloud/workflow/okI529F7dooyLAje',
        stack: ['n8n', 'OpenAI', 'Gmail API'],
        description: 'Intelligent email categorisation and labelling.',
      },
      {
        title: 'Task Manager Bot',
        link: 'https://n8n.srv1069133.hstgr.cloud/webhook/df8223bf-119c-44d5-9bbf-f74ae26828e8/chat',
        stack: ['n8n', 'Telegram API'],
        description: 'Telegram bot for managing tasks and reminders.',
      },
      {
        title: 'Scholarship Chatbot',
        link: 'https://n8n.aiwithezzi.cfd/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
        stack: ['n8n', 'LangChain'],
        description: 'AI assistant for scholarship information.',
      },
      {
        title: 'Map Scraper Agent',
        link: 'https://n8n.aiwithezzi.cfd/webhook/1368b305-38cc-4d34-be78-fd57edcbc755/chat',
        stack: ['n8n', 'Puppeteer'],
        description: 'Automated data extraction from Google Maps.',
      },
    ],
  },
  {
    id: 'ml',
    category: 'Machine Learning',
    icon: 'cpu',
    blurb: 'Predictive models deployed as usable apps.',
    items: [
      {
        title: 'Health Cost Predictor',
        link: 'https://healthcare-premium-predictor-msme-1514.streamlit.app/',
        stack: ['Scikit-learn', 'Streamlit'],
        description: 'Predicts healthcare premiums from user data.',
      },
      {
        title: 'Credit Risk Modelling',
        link: 'https://credit-score-predictor-msme-1514.streamlit.app/',
        stack: ['XGBoost', 'Streamlit'],
        description: 'Credit risk assessment and score prediction.',
      },
      {
        title: 'Car Damage Detection',
        link: 'https://car-damage-detection-msme-1065.streamlit.app/',
        stack: ['PyTorch', 'Streamlit'],
        description: 'Computer vision for car damage assessment.',
      },
      {
        title: 'Spam Classifier',
        link: 'https://sms-spam-detector-msme-1514.streamlit.app/',
        stack: ['NLP', 'Streamlit'],
        description: 'Real-time SMS spam detection.',
      },
      {
        title: 'Image Captioning',
        link: 'https://image-caption-generator-msme1514.streamlit.app/',
        stack: ['CNN-RNN', 'Streamlit'],
        description: 'Automated caption generation for images.',
      },
    ],
  },
  {
    id: 'analytics',
    category: 'Power BI Dashboards',
    icon: 'chart',
    blurb: 'Live dashboards you can open and explore.',
    items: [
      {
        title: 'Business Insights',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZTMzMjBiYWYtYjdlNS00Y2I2LWJhYjItMzE3MWE5MWYyYjI4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        stack: ['Power BI', 'SQL'],
        description: 'Business performance dashboard.',
      },
      {
        title: 'IPL Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZjAyYjBlNTctYzc4Yy00YWRiLTg4YmEtNDFjYmVjMTE1ODRmIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        stack: ['Power BI', 'Data modelling'],
        description: 'Match statistics and trends.',
      },
      {
        title: 'Revenue Insights',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZDdiOWVkZjAtYzMzMC00YjFmLWEyMzgtMzU5MjVkZGUxZDkzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        stack: ['Power BI', 'DAX'],
        description: 'Financial analysis and revenue forecasting.',
      },
      {
        title: 'Accident Analysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMDg1OTBiOWItY2Q0ZC00OTJiLWJmODktZTFhMmYxMzM4Mjk0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
        stack: ['Power BI', 'Geospatial'],
        description: 'Road accident data visualised for safety analysis.',
      },
    ],
  },
  {
    id: 'whatsapp',
    category: 'WhatsApp Automation',
    icon: 'whatsapp',
    blurb: 'Business processes that run inside WhatsApp.',
    items: [
      {
        title: 'Leave Management',
        link: '#',
        videoUrl:
          'https://res.cloudinary.com/de0cllasz/video/upload/v1773713398/leave_approval_whatsapp_bot_m83xt1.mp4',
        stack: ['WhatsApp API', 'Automation'],
        description: 'Leave requests and approvals handled over WhatsApp.',
      },
    ],
  },
];

export const PROJECT_COUNT = PROJECT_CATEGORIES.reduce(
  (total, category) => total + category.items.length,
  0
);
