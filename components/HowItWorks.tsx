import React, { useEffect, useRef, useState } from 'react';
import { ChatBubbleLeftRightIcon, CpuChipIcon, BoltIcon, ChartBarIcon, CogIcon, DocumentChartBarIcon } from './icons';

const steps = [
  {
    id: 1,
    title: 'System Audit',
    subtitle: 'Discovery & Analysis',
    description: 'We jack into your current workflow matrix. We analyze every manual touchpoint to identify bottlenecks, redundancies, and "time-vampire" tasks.',
    icon: <DocumentChartBarIcon className="w-8 h-8" />,
    stats: { efficiency: 20, automation: 5, errorRate: 80, status: 'ANALYZING...' }
  },
  {
    id: 2,
    title: 'Architectural Design',
    subtitle: 'Strategy & Blueprint',
    description: 'We engineer the perfect agentic workflow. This is the blueprint phase where we map out how AI agents will talk to your existing software.',
    icon: <CpuChipIcon className="w-8 h-8" />,
    stats: { efficiency: 45, automation: 20, errorRate: 60, status: 'BLUEPRINTING...' }
  },
  {
    id: 3,
    title: 'Core Integration',
    subtitle: 'Build & Deploy',
    description: 'Construction begins. We build the bots, connect the APIs, and deploy the "shadow workforce" that runs silently in the background.',
    icon: <CogIcon className="w-8 h-8" />,
    stats: { efficiency: 75, automation: 80, errorRate: 15, status: 'COMPILING...' }
  },
  {
    id: 4,
    title: 'Performance Overclock',
    subtitle: 'Scale & Optimize',
    description: 'System online. We monitor the outputs, refine the prompts, and scale the operation. You are now running at 10x capacity.',
    icon: <ChartBarIcon className="w-8 h-8" />,
    stats: { efficiency: 100, automation: 100, errorRate: 0, status: 'SYSTEM OPTIMAL' }
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect which step is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when the element is in the middle of the screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepId = Number(entry.target.getAttribute('data-step-id'));
          if (stepId) setActiveStep(stepId);
        }
      });
    }, observerOptions);

    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentStepData = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-slate-50 relative">
      <div className="container mx-auto px-6 py-24">
        
        {/* Mobile Header (Visible only on mobile) */}
        <div className="lg:hidden mb-12 text-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
                The Protocol
            </span>
            <h2 className="text-3xl font-bold text-dark">
                Automation Sequence
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
            
          {/* LEFT PANEL: Sticky HUD (Desktop Only) */}
          <div className="hidden lg:flex lg:w-1/2 flex-col justify-start relative">
             <div className="sticky top-32 w-full">
                <div className="bg-dark rounded-3xl p-8 shadow-2xl border border-slate-700 relative overflow-hidden h-[500px] transition-all duration-500">
                    
                    {/* HUD Background Grid & Effects */}
                    <div className="absolute inset-0 opacity-20" 
                        style={{ 
                            backgroundImage: 'linear-gradient(rgba(0, 188, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 188, 212, 0.1) 1px, transparent 1px)', 
                            backgroundSize: '30px 30px' 
                        }} 
                    />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan"></div>

                    {/* HUD Content */}
                    <div className="relative z-10 flex flex-col h-full text-cyan-400 font-mono">
                        
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-cyan-900/50 pb-4 mb-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm tracking-widest">LIVE TERMINAL // EZZI-AI</span>
                            </div>
                            <div className="text-xs text-cyan-600">v.4.0.1</div>
                        </div>

                        {/* Central Visual */}
                        <div className="flex-grow flex items-center justify-center relative mb-8">
                             {/* Rotating Ring */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-48 h-48 border-2 border-dashed border-cyan-800 rounded-full transition-all duration-[2000ms] ease-in-out ${activeStep % 2 === 0 ? 'rotate-180' : 'rotate-0'}`}></div>
                             </div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-40 h-40 border border-cyan-600 rounded-full opacity-30 animate-ping-slow`}></div>
                             </div>
                             
                             {/* Active Icon */}
                             <div key={activeStep} className="transform transition-all duration-500 scale-100 animate-fade-in-up">
                                {React.cloneElement(currentStepData.icon as React.ReactElement<any>, { className: "w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(0,188,212,0.8)]" })}
                             </div>
                        </div>

                        {/* Status Text */}
                        <div className="text-center mb-8">
                            <div className="text-xs text-cyan-600 mb-1">CURRENT PROCESS</div>
                            <div className="text-2xl font-bold tracking-widest text-white typewriter">
                                {`> ${currentStepData.stats.status}`}
                            </div>
                        </div>

                        {/* Metric Bars */}
                        <div className="space-y-4">
                            <HUDMetric label="EFFICIENCY" value={currentStepData.stats.efficiency} color="bg-primary" />
                            <HUDMetric label="AUTOMATION LEVEL" value={currentStepData.stats.automation} color="bg-secondary" />
                            <HUDMetric label="MANUAL ERROR RATE" value={currentStepData.stats.errorRate} color="bg-red-500" />
                        </div>

                    </div>
                </div>
                
                {/* Decorative glow behind the HUD */}
                <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>
             </div>
          </div>

          {/* RIGHT PANEL: Scrollable Steps */}
          <div className="w-full lg:w-1/2 lg:pl-10 space-y-24 py-12">
            <div className="hidden lg:block mb-12">
                <h2 className="text-4xl font-bold text-dark leading-tight">
                    The Automation <br /> <span className="text-primary">Protocol</span>
                </h2>
                <p className="text-slate-500 mt-4 text-lg">
                    Initialize your upgrade sequence. Four phases to complete digital transformation.
                </p>
            </div>

            {steps.map((step) => (
              <div 
                key={step.id} 
                data-step-id={step.id}
                className={`step-card group relative p-8 rounded-2xl border transition-all duration-500 ${
                    activeStep === step.id 
                    ? 'bg-white border-primary/30 shadow-2xl scale-100 lg:translate-x-0' 
                    : 'bg-white/50 border-transparent shadow-none scale-95 opacity-50 lg:opacity-30 blur-[1px] lg:blur-[2px]'
                } ${activeStep === step.id ? 'lg:opacity-100 lg:blur-0' : ''}`}
              >
                 <div className="absolute -left-4 top-8 hidden lg:block">
                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeStep === step.id ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                         {step.id}
                     </div>
                 </div>

                 <div className="flex items-center space-x-4 mb-4">
                     <div className={`p-3 rounded-xl ${activeStep === step.id ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                         {step.icon}
                     </div>
                     <div>
                         <div className="text-xs font-bold text-secondary tracking-wider uppercase mb-1">{step.subtitle}</div>
                         <h3 className={`text-2xl font-bold ${activeStep === step.id ? 'text-dark' : 'text-slate-400'}`}>{step.title}</h3>
                     </div>
                 </div>
                 
                 <p className={`text-lg leading-relaxed ${activeStep === step.id ? 'text-slate-600' : 'text-slate-400'}`}>
                     {step.description}
                 </p>

                 {/* Mobile-only Metric (simple version) */}
                 <div className="lg:hidden mt-6 pt-6 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                        <span>PROGRESS</span>
                        <span>{step.stats.efficiency}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${step.stats.efficiency}%` }}></div>
                    </div>
                 </div>
              </div>
            ))}
            
            {/* Final Spacer to allow scrolling past the last item */}
            <div className="h-[20vh] lg:h-[40vh]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-ping-slow {
            animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

const HUDMetric: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
    <div className="group">
        <div className="flex justify-between text-[10px] mb-1 opacity-70">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="h-2 bg-cyan-900/40 rounded-sm overflow-hidden border border-cyan-900/30">
            <div 
                className={`h-full ${color} shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out relative`} 
                style={{ width: `${value}%` }}
            >
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white opacity-50"></div>
            </div>
        </div>
    </div>
);

export default HowItWorks;