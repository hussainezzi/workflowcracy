/**
 * Every word and link on the site lives here.
 *
 * Copy used to be scattered across the section components, which made it hard
 * to see the site's voice in one place — and easy for the same claim to drift
 * between pages. Components render; this file decides what they say.
 */

export interface NavLink {
  name: string;
  to: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', to: '/services' },
  { name: 'How It Works', to: '/how-it-works' },
  { name: 'Projects', to: '/projects' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Contact', to: '/contact' },
];

export const CONTACT_EMAIL = 'contact@aiwithezzi.com';

export const SITE = {
  name: 'AI with Ezzi',
  tagline: 'Be irreplaceable with AI',
  /* One sentence. A visitor should know what you do before they scroll. */
  promise: 'We build AI that does your busywork.',
  subPromise:
    'Automations, dashboards and custom tools for small businesses — built quickly, explained plainly, and handed over working.',
};

/* ---------------------------------------------------------------- services */

export interface Service {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detail: string;
  examples: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'automation',
    icon: 'cog',
    title: 'Workflow Automation',
    summary: 'The repetitive part of your week, done without you.',
    detail:
      'We map the tasks your team repeats by hand, then build the automation that runs them — on a schedule, or the moment something happens.',
    examples: ['Order and enquiry routing', 'Approval chains', 'Scheduled reports'],
  },
  {
    id: 'data',
    icon: 'document',
    title: 'Documents & Data Entry',
    summary: 'Stop retyping what a machine can read.',
    detail:
      'Invoices, forms, receipts and spreadsheets get read, checked and filed automatically, so the numbers land where you need them.',
    examples: ['Invoice extraction', 'Form processing', 'Sheet-to-system sync'],
  },
  {
    id: 'chatbots',
    icon: 'chat',
    title: 'Chatbots & Assistants',
    summary: 'Answers your customers get at 2am.',
    detail:
      'An assistant that knows your products and policies, answers on your website or WhatsApp, and passes real leads to a human.',
    examples: ['Website chat', 'WhatsApp bots', 'Internal help desks'],
  },
  {
    id: 'dashboards',
    icon: 'chart',
    title: 'Dashboards & Reporting',
    summary: 'One screen that tells you how the business is doing.',
    detail:
      'We pull your scattered data into a single live dashboard, so you stop assembling the same report every month.',
    examples: ['Sales dashboards', 'Inventory views', 'Power BI reports'],
  },
  {
    id: 'custom',
    icon: 'bolt',
    title: 'Custom Tools & Apps',
    summary: 'Software shaped to how you actually work.',
    detail:
      'When nothing off the shelf fits, we build the small, focused tool that does — a portal, a tracker, a calculator, an internal app.',
    examples: ['Booking portals', 'Staff tools', 'Customer portals'],
  },
  {
    id: 'websites',
    icon: 'website',
    title: 'Websites That Convert',
    summary: 'A site that brings work in, not just one that exists.',
    detail:
      'Fast, mobile-first sites with the enquiry path designed in — built to be found, and built to be handed over.',
    examples: ['Business sites', 'Online stores', 'Landing pages'],
  },
];

/* ------------------------------------------------------------ how it works */

export interface Step {
  id: number;
  title: string;
  summary: string;
  detail: string;
  duration: string;
}

/* Plain language on purpose: the buyer is a business owner, not an engineer. */
export const STEPS: Step[] = [
  {
    id: 1,
    title: 'We learn how you work today',
    summary: 'A conversation, not an audit.',
    detail:
      'We sit with you and your team and walk through a normal week. We are looking for the jobs done by hand over and over — the ones that eat time and invite mistakes.',
    duration: 'Week 1',
  },
  {
    id: 2,
    title: 'We show you the plan first',
    summary: 'You see it before we build it.',
    detail:
      'You get a clear plan: what will be automated, what it will cost, how long it takes, and what stays human. Nothing gets built until you are happy with it.',
    duration: 'Week 1–2',
  },
  {
    id: 3,
    title: 'We build and connect it',
    summary: 'Working software, wired into your tools.',
    detail:
      'We build the automation and connect it to what you already use — your sheets, your inbox, your WhatsApp, your existing systems. You see progress as it happens.',
    duration: 'Week 2–4',
  },
  {
    id: 4,
    title: 'We hand it over and stay reachable',
    summary: 'Yours to run, ours to support.',
    detail:
      'We train your team, document how it works, and stay available when something needs changing. You own what we build.',
    duration: 'Ongoing',
  },
];

/* ----------------------------------------------------------------- pricing */

export interface Tier {
  id: string;
  name: string;
  price: string;
  startingAt: boolean;
  description: string;
  bestFor: string;
  features: string[];
  stack: string[];
  featured?: boolean;
}

export const TIERS: Tier[] = [
  {
    id: 'web',
    name: 'Website',
    price: '$149',
    startingAt: true,
    description: 'A fast, mobile-first site built to bring enquiries in.',
    bestFor: 'Businesses with no site, or one that no longer earns its keep',
    features: [
      'Designed for phones first',
      'Set up to be found on Google',
      'Loads fast on slow connections',
      'You can edit the content yourself',
      'Visitor analytics included',
    ],
    stack: ['React', 'Tailwind', 'Vite'],
  },
  {
    id: 'appscript',
    name: 'Google Workspace Tools',
    price: '$199',
    startingAt: true,
    description: 'Custom tools inside the Google apps your team already uses.',
    bestFor: 'Teams living in Sheets, Forms and Gmail',
    features: [
      'Custom add-ons for your workspace',
      'Reports that build themselves',
      'Your apps kept in sync',
      'Structured, reliable data storage',
      'Runs on a schedule or on demand',
    ],
    stack: ['Apps Script', 'Google Cloud', 'APIs'],
  },
  {
    id: 'powerbi',
    name: 'Dashboards & Reporting',
    price: '$249',
    startingAt: true,
    description: 'Your numbers on one live screen instead of five spreadsheets.',
    bestFor: 'Owners who want a straight answer on how the month is going',
    features: [
      'Interactive dashboards',
      'Fast queries on large data',
      'Pulls from all your sources',
      'Refreshes on its own',
      'A one-page summary for management',
    ],
    stack: ['Power BI', 'SQL', 'DAX'],
  },
  {
    id: 'marketing',
    name: 'AI Content Studio',
    price: '$349',
    startingAt: true,
    description: 'Product photography, video and social content produced with AI.',
    bestFor: 'Shops and brands that need a steady stream of content',
    features: [
      'AI product photography',
      'Short-form product video',
      'A consistent brand presenter',
      'A social plan you can follow',
      'Scheduled posting',
    ],
    stack: ['Image models', 'Video models', 'LLMs'],
  },
  {
    id: 'n8n',
    name: 'Multi-App Automation',
    price: '$449',
    startingAt: true,
    description: 'Workflows that carry information between all your apps.',
    bestFor: 'Businesses re-entering the same data in several places',
    features: [
      'Workflows across many apps',
      'Triggered by real events',
      'Handles failures without losing data',
      'Hosted on your own server if you prefer',
      'Custom connections where none exist',
    ],
    stack: ['n8n', 'Docker', 'Webhooks'],
    featured: true,
  },
  {
    id: 'agents',
    name: 'AI Agents',
    price: '$699',
    startingAt: true,
    description: 'AI that carries out multi-step work, not just answers questions.',
    bestFor: 'Operations complex enough that a single automation is not enough',
    features: [
      'Several agents working together',
      'Tuned on your own material',
      'Multi-step decisions',
      'Access controls and audit trail',
      'Recovers from errors on its own',
    ],
    stack: ['n8n', 'LLMs', 'Python'],
  },
];

/* ------------------------------------------------------------ testimonials */

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

/* Quotes lightly corrected for spelling only — wording is the client's own. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'AI with Ezzi made a fast and simple e-commerce workflow using a web storefront to improve our online presence. The colourful fruity UI and simple checkout process were wonderful.',
    author: 'Dr Murtaza Rasheed',
    title: 'Founder, Fruity Pop Boba',
    avatar:
      'https://res.cloudinary.com/de0cllasz/image/upload/v1760028149/murtaza_bhai_ezsy8v.jpg',
  },
  {
    quote:
      'AI with Ezzi built fantastic Gen AI apps that help me convince clients, plan operations and assess feedback. It has powered me up 50% more.',
    author: 'Taher Mohammed',
    title: 'Associate Engineer, Raj Solar',
    avatar:
      'https://res.cloudinary.com/de0cllasz/image/upload/v1760028849/tahr_photo_gfxssu.png',
  },
  {
    quote:
      'AI with Ezzi developed a beautiful and functional e-commerce platform for our herbal products. The integration was smooth, and the interface is exactly what we needed to showcase our natural remedies. Their expertise in automation has saved us countless hours.',
    author: 'Hakimi Herbals',
    title: 'Wellness & Natural Remedies',
    avatar:
      'https://res.cloudinary.com/de0cllasz/image/upload/v1773713323/1e1ee325-b985-4a47-a3ca-b5475876c395.png',
  },
];

/* ---------------------------------------------------------------- founders */

export interface Founder {
  name: string;
  title: string;
  bio: string;
  website?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  streamlit?: string;
  avatar: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Muhammed Ezzi',
    title: 'Chairman',
    bio: 'Visionary and future-oriented business motivator. In the light of Syedna Mufaddal Saifuddin (TUS) and his business-minded philosophy, he encourages fellow community members to establish businesses even at the smallest scale.',
    website: 'https://jameasaifiyah.edu/',
    avatar:
      'https://ui-avatars.com/api/?name=Muhammed+Ezzi&background=0E4A82&color=fff&size=256',
  },
  {
    name: 'Mustafa Mohammed Ezzi',
    title: 'Co-Founder & CEO',
    bio: 'A CSPO and Senior SQA Analyst moving into machine learning. He brings nine years of software quality expertise, combining it with Python, deep learning and MLOps so that everything we build is robust and reliable.',
    linkedin: 'https://www.linkedin.com/in/mustafa-mohammed-ezzi/',
    streamlit: 'https://share.streamlit.io/user/msme1514',
    github: 'https://github.com/msme1514',
    avatar:
      'https://ui-avatars.com/api/?name=Mustafa+Ezzi&background=1A91DA&color=fff&size=256',
  },
  {
    name: 'Hussain Muhammed Ezzi',
    title: 'Co-Founder & COO',
    bio: 'An agentic AI developer and software engineer who builds intelligent, automated workflows. He designs tool-using AI agents and integrates them into multilingual automation pipelines, focused on making complex business processes simpler.',
    linkedin: 'https://www.linkedin.com/in/hussain-ezzi-67900226a/',
    github: 'https://github.com/hussainezzi',
    youtube: 'https://www.youtube.com/channel/UCRBo2PW1AfHl9JHWnu7ArjA',
    avatar:
      'https://ui-avatars.com/api/?name=Hussain+Ezzi&background=F06525&color=fff&size=256',
  },
];

/* ------------------------------------------------------------------ videos */

export const VIDEOS = [
  {
    id: '8tWMqsqeWlU',
    title: 'Turn your PDFs into a 24/7 employee: a RAG chatbot with n8n and Gemini',
  },
  { id: 'QkXqWy5l8Y4', title: 'Automate your Google Calendar with AI and n8n' },
  { id: 'o3sgL0JJ9dQ', title: 'Build an AI agent from scratch (memory is the key)' },
  { id: 'mysOEmE-LTY', title: 'Building our first AI agent: weather and news with n8n' },
];
