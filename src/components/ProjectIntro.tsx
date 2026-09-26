import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Award, 
  FileText, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';
import { mockStudent } from '../data/mockData';

export const ProjectIntro: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Project Introduction</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-govnavy-900 font-heading tracking-tight leading-snug">
              Simplifying the Scholarship Journey for ST Students
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-govnavy-600 leading-relaxed">
              <p>
                Students often need to search across different scholarship sources, understand complicated eligibility rules, repeatedly arrange documents, apply through official portals and manually keep track of application updates.
              </p>
              <p>
                TribalScholar One brings these preparation and guidance activities into one structured platform while keeping the actual government application under the student's control.
              </p>
            </div>

            <div className="p-4 bg-govnavy-50 rounded-xl border border-govnavy-200 text-xs text-govnavy-700 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Statutory Boundary Notice:</strong> We prepare and guide. The student personally applies and authenticates on authoritative government portals (such as the National Scholarship Portal).
              </span>
            </div>
          </div>

          {/* Right Product Workspace Mockup Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-govnavy-300 shadow-elevated bg-govnavy-900 p-1 overflow-hidden">
              <div className="bg-govnavy-950 px-4 py-2.5 rounded-t-xl flex items-center justify-between text-xs text-govnavy-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-[11px] text-govnavy-300 ml-1">tribalscholar.local/dashboard</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Active Demo
                </span>
              </div>

              <div className="bg-govnavy-50 p-4 rounded-b-xl space-y-3">
                <div className="bg-white p-3 rounded-lg border border-govnavy-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-govnavy-900">{mockStudent.name}</div>
                    <div className="text-[10px] text-govnavy-500">{mockStudent.course} • {mockStudent.institution}</div>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                    94% Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-govnavy-200">
                    <span className="text-[10px] text-govnavy-400 block font-bold">MATCHED SCHEME</span>
                    <span className="font-bold text-govnavy-900 text-[11px] truncate block">Top Class ST Higher Ed</span>
                    <span className="text-emerald-700 text-[10px] font-semibold">96% Rule Match</span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-govnavy-200">
                    <span className="text-[10px] text-govnavy-400 block font-bold">DOCUMENT VAULT</span>
                    <span className="font-bold text-govnavy-900 text-[11px] truncate block">5 Stored Certificates</span>
                    <span className="text-brand-700 text-[10px] font-semibold">AES-256 Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
