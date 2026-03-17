import React, { useState } from 'react';
import { WebsiteIcon, CogIcon, CpuChipIcon, CheckCircleIcon, ChartBarIcon, BoltIcon } from './icons';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  roi: string;
  value: string;
  icon: React.ReactNode;
  features: string[];
  techStack: string[];
  color: 'cyan' | 'orange' | 'emerald' | 'purple' | 'blue' | 'rose';
}

const tiers: PricingTier[] = [
  {
    id: 'web',
    name: 'Web Matrix',
    price: '$149',
    description: 'High-performance websites designed to convert.',
    roi: '24/7 Global Authority',
    value: 'Automated Lead Gen',
    icon: <WebsiteIcon className="w-10 h-10" />,
    features: [
      'Responsive Matrix Design',
      'SEO Core Optimization',
      'Speed Overclocked (95+)',
      'CMS Integration',
      'Analytics Dashboard'
    ],
    techStack: ['React', 'Tailwind', 'Vite'],
    color: 'cyan'
  },
  {
    id: 'appscript',
    name: 'AppScript Logic',
    price: '$199',
    description: 'Custom Google Workspace tools that automate your admin.',
    roi: '15+ Hours Saved/Week',
    value: 'Zero Manual Entry',
    icon: <CogIcon className="w-10 h-10" />,
    features: [
      'Custom Workspace Add-ons',
      'Automated Reporting',
      'Cross-App API Sync',
      'Database Orchestration',
      'Custom Script Triggers'
    ],
    techStack: ['AppScript', 'Google Cloud', 'APIs'],
    color: 'orange'
  },
  {
    id: 'powerbi',
    name: 'Data Vision',
    price: '$249',
    description: 'Professional Power BI dashboards for data-driven decisions.',
    roi: 'Instant Clarity',
    value: 'Visual Intelligence',
    icon: <ChartBarIcon className="h-10 w-10" />,
    features: [
      'Interactive Dashboards',
      'DAX Query Optimization',
      'Multi-Source Data Sync',
      'Automated Refresh',
      'Executive Summaries'
    ],
    techStack: ['Power BI', 'SQL', 'DAX'],
    color: 'blue'
  },
  {
    id: 'marketing',
    name: 'AI Content Studio',
    price: '$349',
    description: 'AI-driven marketing content and influencer establishment.',
    roi: '3x Engagement Rate',
    value: 'Viral Potential',
    icon: <BoltIcon className="h-10 w-10" />,
    features: [
      'AI Product Photography',
      'Start/End Frame Videos',
      'AI Influencer Creation',
      'Social Media Strategy',
      'Automated Posting'
    ],
    techStack: ['Midjourney', 'Veo', 'GPT-4'],
    color: 'purple'
  },
  {
    id: 'n8n',
    name: 'n8n Orchestration',
    price: '$449',
    description: 'Complex automation workflows connecting all your apps.',
    roi: 'Zero Operational Friction',
    value: 'Seamless Sync',
    icon: <CogIcon className="h-10 w-10" />,
    features: [
      'Multi-App Workflows',
      'Webhook Integration',
      'Error Handling Logic',
      'Self-Hosted Setup',
      'Custom API Nodes'
    ],
    techStack: ['n8n', 'Docker', 'Webhooks'],
    color: 'rose'
  },
  {
    id: 'openclaw',
    name: 'Agentic Systems',
    price: '$699',
    description: 'Enterprise-grade AI agents running your core workflows.',
    roi: '10x Capacity Boost',
    value: 'Sleep-Mode Operations',
    icon: <CpuChipIcon className="w-10 h-10" />,
    features: [
      'Multi-Agent Workflows',
      'LLM Prompt Engineering',
      'Complex Logic Chains',
      'Enterprise Security',
      'Self-Healing Systems'
    ],
    techStack: ['n8n', 'OpenAI', 'Python'],
    color: 'emerald'
  }
];

const Pricing: React.FC = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const getColorClasses = (color: PricingTier['color'], isHovered: boolean) => {
    switch (color) {
      case 'cyan':
        return {
          border: isHovered ? 'border-cyan-400' : 'border-slate-800',
          bg: 'bg-cyan-500/10',
          text: 'text-cyan-400',
          glow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]',
          button: 'bg-cyan-500 hover:bg-cyan-600'
        };
      case 'orange':
        return {
          border: isHovered ? 'border-orange-400' : 'border-slate-800',
          bg: 'bg-orange-500/10',
          text: 'text-orange-400',
          glow: 'shadow-[0_0_20px_rgba(251,146,60,0.2)]',
          button: 'bg-orange-500 hover:bg-orange-600'
        };
      case 'blue':
        return {
          border: isHovered ? 'border-blue-400' : 'border-slate-800',
          bg: 'bg-blue-500/10',
          text: 'text-blue-400',
          glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
          button: 'bg-blue-500 hover:bg-blue-600'
        };
      case 'purple':
        return {
          border: isHovered ? 'border-purple-400' : 'border-slate-800',
          bg: 'bg-purple-500/10',
          text: 'text-purple-400',
          glow: 'shadow-[0_0_20px_rgba(168,85,247,0.2)]',
          button: 'bg-purple-500 hover:bg-purple-600'
        };
      case 'rose':
        return {
          border: isHovered ? 'border-rose-400' : 'border-slate-800',
          bg: 'bg-rose-500/10',
          text: 'text-rose-400',
          glow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]',
          button: 'bg-rose-500 hover:bg-rose-600'
        };
      case 'emerald':
        return {
          border: isHovered ? 'border-emerald-400' : 'border-slate-800',
          bg: 'bg-emerald-500/10',
          text: 'text-emerald-400',
          glow: 'shadow-[0_0_20px_rgba(52,211,153,0.2)]',
          button: 'bg-emerald-500 hover:bg-emerald-600'
        };
    }
  };

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Investment <span className="text-cyan-400">Roadmap</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transparent pricing built for ROI. Select the system upgrade that matches your current growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const classes = getColorClasses(tier.color, hoveredTier === tier.id);
            
            return (
              <div
                key={tier.id}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                className={`relative group transition-all duration-500 rounded-2xl border-2 p-8 flex flex-col h-full bg-slate-900/50 backdrop-blur-xl ${classes.border} ${hoveredTier === tier.id ? classes.glow : ''}`}
              >
                {/* ROI Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${classes.text} ${classes.border} bg-slate-900 z-20 whitespace-nowrap`}>
                  {tier.roi}
                </div>

                <div className="mb-8">
                  <div className={`mb-4 inline-block p-3 rounded-xl ${classes.bg} ${classes.text}`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 min-h-[40px]">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-500 text-sm">/ project</span>
                  </div>
                </div>

                {/* Value Metric HUD */}
                <div className={`mb-8 p-4 rounded-xl border border-slate-800 bg-black/40 flex items-center gap-4 transition-colors ${hoveredTier === tier.id ? 'border-slate-700' : ''}`}>
                  <div className={`w-1 h-10 rounded-full ${
                    tier.color === 'cyan' ? 'bg-cyan-500' : 
                    tier.color === 'orange' ? 'bg-orange-500' : 
                    tier.color === 'blue' ? 'bg-blue-500' :
                    tier.color === 'purple' ? 'bg-purple-500' :
                    tier.color === 'rose' ? 'bg-rose-500' :
                    'bg-emerald-500'
                  }`}></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-tighter text-slate-500">Value Proposition</div>
                    <div className={`text-sm font-mono font-bold ${classes.text}`}>{tier.value}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${classes.text}`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="mb-6">
                    <div className="text-[10px] uppercase tracking-tighter text-slate-500 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {tier.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className={`w-full py-4 rounded-xl text-white font-bold transition-all transform active:scale-95 ${classes.button}`}>
                    Initiate Upgrade
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote HUD */}
        <div className="mt-16 p-8 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Need a Custom Matrix?</h4>
              <p className="text-slate-400">For enterprise-level integrations and complex agentic systems.</p>
            </div>
          </div>
          <a href="#contact" className="px-8 py-4 rounded-xl border border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all">
            Request Custom Architecture
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
