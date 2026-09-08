import React, { useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft,
  Bot,
  Zap,
  Smartphone,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-brand hover:text-cyan-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            INTERNAL OPERATIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            AI with Ezzi: <span className="text-brand">The Hybrid Operations Policy</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            At AI with Ezzi, our mission is to empower the "One-Person Business" through automation. 
            We cannot sell ruthless efficiency to our clients if our own internal operations are bloated and bureaucratic.
          </p>
        </header>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          <div className="p-8 md:p-12 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">1. Hybrid Location: Output Over Attendance</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We do not track hours; we track execution. Our work model is <strong>Asynchronous-First, Synchronized by Necessity.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Remote Work (The Default)</h3>
                  <p className="text-sm text-slate-600">
                    Deep, rigorous work—building swarms, coding Google Apps Script, and creating content—requires uninterrupted focus. 
                    You are encouraged to work remotely whenever you need deep focus.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">In-Person Work (The Exception)</h3>
                  <p className="text-sm text-slate-600">
                    We use the physical office strictly for high-leverage activities: collaborative strategy sessions, client onboarding, pitch rehearsals, and complex problem-solving.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-amber-600 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>The Rule of Availability:</strong> You are not required to sit at a desk from 9 to 5. 
                  However, you are required to be highly responsive on our internal WhatsApp command center during core operating hours (10:00 AM – 4:00 PM KHI time).
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-200">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">2. Hybrid Workforce: Humans + AI Agents</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We do not hire humans to do robot work. At AI with Ezzi, every human employee acts as an <strong>"Orchestrator."</strong>
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand mt-1 shrink-0" />
                  <p className="text-slate-700"><strong>You are a Manager of Agents:</strong> Before you do a repetitive task, you must ask: "Can an OpenClaw Swarm do this?"</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand mt-1 shrink-0" />
                  <p className="text-slate-700"><strong>Mandatory AI Delegation:</strong> First drafts, data entry, basic research, code boilerplate, and initial QA are to be handled by AI. Human energy is reserved for strategy and high-level architecture.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand mt-1 shrink-0" />
                  <p className="text-slate-700"><strong>Internal Automation First:</strong> We eat our own dog food. All internal HR requests, expense tracking, and meeting notes must be routed through our own internal WhatsApp Agent Swarms.</p>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">3. Communication: The WhatsApp Command Center</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We do not use bloated email threads for internal operations. All internal communication happens via our dedicated WhatsApp Swarms.
              </p>
              <div className="bg-slate-900 rounded-2xl p-6 text-slate-300">
                <div className="flex items-center gap-2 mb-4 text-white font-bold">
                  <Bot className="w-5 h-5 text-brand" />
                  COMMAND PROTOCOLS
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-brand">•</span>
                    Voice notes are highly encouraged for complex thoughts (AI agents will transcribe and summarize them).
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand">•</span>
                    If a conversation takes more than 5 back-and-forth messages, escalate it to a 10-minute voice call or an in-person sync.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-200">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">4. The Ultimate Metric: Leverage</h2>
              </div>
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-rose-200 pl-6 py-2">
                "Your value at this company is not measured by how hard you work, but by how much leverage you create. 
                If you write a piece of code or build a swarm template that automates 100 hours of future work, you have succeeded."
              </p>
              <p className="mt-6 text-slate-900 font-bold text-center text-xl">
                Work where you are most effective. Automate everything else. Build systems that scale.
              </p>
            </section>
          </div>
        </div>

        {/* Consultant's Note */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Briefcase className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
                <span className="text-xl">💼</span>
              </div>
              <h4 className="text-lg font-bold text-brand">Consultant’s Note to Hussain</h4>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              This positions you perfectly for scaling. If you start hiring "AI Orchestrators" (Phase 2 of our roadmap), 
              you attract top-tier, autonomous talent who hate micromanagement. 
            </p>
            <p className="text-slate-300 leading-relaxed font-medium">
              It also acts as a subtle marketing tool—when clients ask how you operate, showing them this policy 
              proves you actually live the automation lifestyle you are selling them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPolicy;
