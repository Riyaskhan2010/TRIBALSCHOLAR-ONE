import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  FileText, 
  Award, 
  Lock, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { TeamKyroLogo } from './TeamKyroLogo';
import { mockStudent } from '../data/mockData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-govnavy-50/50 to-govnavy-50 border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Official Submission Ribbon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-govnavy-200">
          <TeamKyroLogo size="lg" />

          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-govnavy-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-govnavy-800 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-saffron-400"></span>
              SMART INDIA HACKATHON 2026
            </span>
            <span className="bg-saffron-100 text-saffron-900 border border-saffron-300 text-xs font-bold px-3 py-1.5 rounded-lg">
              PS ID: 26239
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Main Title */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-700 uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block">
              HACKATHON PROJECT SUBMISSION
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-govnavy-950 font-heading tracking-tight uppercase leading-[1.08]">
              TRIBALSCHOLAR ONE
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-brand-700 font-heading">
              One Student. One Platform. Every Scholarship.
            </p>
          </div>

          {/* Problem Statement Tagline */}
          <p className="text-sm sm:text-base font-medium text-govnavy-700 max-w-2xl mx-auto leading-relaxed">
            AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes
          </p>

          {/* Compact Official Project Information Panel */}
          <div className="bg-white rounded-2xl border border-govnavy-200 shadow-subtle p-5 sm:p-6 text-left">
            <div className="text-[11px] font-bold text-govnavy-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Official Submission Dossier</span>
              <span className="text-emerald-700 font-bold lowercase flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> verified registration
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">PS ID</span>
                <span className="font-mono-code font-bold text-govnavy-900 text-sm">26239</span>
              </div>

              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">PS Category</span>
                <span className="font-bold text-govnavy-900">Software</span>
              </div>

              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">Theme</span>
                <span className="font-bold text-govnavy-900">Smart Education</span>
              </div>

              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">Team</span>
                <span className="font-bold text-govnavy-900">Team Kyro</span>
              </div>

              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">Team ID</span>
                <span className="font-mono-code font-bold text-brand-700">148751</span>
              </div>

              <div className="p-3 bg-govnavy-50 rounded-xl border border-govnavy-100">
                <span className="text-govnavy-400 block text-[10px] uppercase font-bold">Presented By</span>
                <span className="font-bold text-saffron-800">TEAM KYRO</span>
              </div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('#showcase')}
              className="w-full sm:w-auto bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-card transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#solution')}
              className="w-full sm:w-auto bg-white hover:bg-govnavy-50 text-govnavy-800 font-semibold text-sm px-7 py-3.5 rounded-xl border border-govnavy-300 shadow-subtle transition-all flex items-center justify-center gap-2"
            >
              <span>View Solution</span>
              <ChevronRight className="w-4 h-4 text-govnavy-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
