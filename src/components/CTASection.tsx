import React from 'react';
import { 
  ArrowRight, 
  GitFork, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { TeamKyroLogo } from './TeamKyroLogo';

export const CTASection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-govnavy-50 border-b border-govnavy-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-govnavy-950 via-govnavy-900 to-brand-950 rounded-3xl p-8 sm:p-12 text-white shadow-elevated border border-govnavy-800 text-center relative overflow-hidden space-y-6">
          <TeamKyroLogo size="lg" light className="justify-center" />

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading uppercase">
              TRIBALSCHOLAR ONE
            </h2>
            <p className="text-lg sm:text-xl font-bold text-saffron-400 font-heading">
              One Student. One Platform. Every Scholarship.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-govnavy-300">
            <span className="bg-govnavy-800 px-3 py-1 rounded-full border border-govnavy-700">
              Smart India Hackathon 2026
            </span>
            <span className="bg-govnavy-800 px-3 py-1 rounded-full border border-govnavy-700">
              Problem Statement 26239
            </span>
            <span className="bg-saffron-500/20 text-saffron-300 font-bold px-3 py-1 rounded-full border border-saffron-400/30">
              TEAM KYRO
            </span>
          </div>

          <p className="text-xs sm:text-sm text-govnavy-300 max-w-xl mx-auto leading-relaxed">
            AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes. Built for student data sovereignty and pre-application error prevention.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo('#showcase')}
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-card transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#workflow')}
              className="w-full sm:w-auto bg-govnavy-800 hover:bg-govnavy-700 text-govnavy-200 hover:text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl border border-govnavy-700 transition-all flex items-center justify-center gap-2"
            >
              <GitFork className="w-4 h-4 text-govnavy-400" />
              <span>View Workflow</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-govnavy-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Prototype Demonstration • Student-Controlled Submission</span>
          </div>
        </div>
      </div>
    </section>
  );
};
