import React from 'react';
import { 
  Search, 
  Files, 
  HelpCircle, 
  CopyCheck, 
  AlertTriangle, 
  EyeOff, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Search,
      num: '01',
      title: 'Scholarship Discovery',
      desc: 'Information is spread across multiple ministry portals, state welfare sites, and institutional notices with no unified search for ST students.',
      warning: 'Scattered Portals',
    },
    {
      icon: Files,
      num: '02',
      title: 'Document Confusion',
      desc: 'Students may not know which specific documents are required, acceptable formats, or if income/caste certificates have expired.',
      warning: 'Expiry Blindness',
    },
    {
      icon: HelpCircle,
      num: '03',
      title: 'Eligibility Uncertainty',
      desc: 'Scheme conditions, income caps, and quota limits can be difficult to interpret without expert guidance, leading to false applications.',
      warning: 'Complex Guidelines',
    },
    {
      icon: CopyCheck,
      num: '04',
      title: 'Repeated Data Entry',
      desc: 'Similar personal, academic, and banking details are manually re-entered across different portal forms with high risk of spelling errors.',
      warning: 'Redundant Effort',
    },
    {
      icon: AlertTriangle,
      num: '05',
      title: 'Verification Gaps',
      desc: 'Students rarely know in advance what certificate discrepancies (e.g. name differences or unseeded bank accounts) will trigger nodal rejections.',
      warning: 'Silent Rejections',
    },
    {
      icon: EyeOff,
      num: '06',
      title: 'Status Blindspots',
      desc: 'Application verification and DBT payment disbursement progress are not visible in one place once submitted, causing prolonged anxiety.',
      warning: 'Zero Visibility',
    },
  ];

  const currentJourneySteps = [
    { name: 'Search', friction: '10+ Websites' },
    { name: 'Collect', friction: 'Unverified Docs' },
    { name: 'Understand', friction: 'Complex Rules' },
    { name: 'Apply', friction: 'Repeated Data' },
    { name: 'Verify', friction: 'Silent Delays' },
    { name: 'Track', friction: 'Lost Status' },
  ];

  return (
    <section id="problem" className="py-20 bg-govnavy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Ground Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            The scholarship journey is fragmented.
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Students often need to search across different sources, collect repeated documents, understand complex eligibility conditions and manually follow application progress.
          </p>
        </div>

        {/* Current Broken Journey Strip */}
        <div className="mb-14 bg-white rounded-2xl border border-govnavy-200 p-6 shadow-subtle">
          <div className="text-xs font-bold uppercase tracking-wider text-govnavy-500 mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Current Traditional Journey (High Friction)
            </span>
            <span className="text-[11px] text-rose-600 font-semibold lowercase">
              • multiple drop-off points
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3">
            {currentJourneySteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-rose-50/50 border border-rose-200/80 rounded-xl p-3 text-center">
                  <div className="text-xs font-bold text-govnavy-900">{step.name}</div>
                  <div className="text-[10px] text-rose-700 font-semibold mt-1 bg-rose-100/70 py-0.5 px-1.5 rounded">
                    ⚠️ {step.friction}
                  </div>
                </div>
                {idx < currentJourneySteps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-govnavy-300">
                    <ArrowRight className="w-3.5 h-3.5 text-rose-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div 
                key={idx}
                className="gov-card p-6 rounded-xl border border-govnavy-200 hover:border-rose-300 transition-all shadow-subtle group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-govnavy-400">
                      {prob.num}
                    </span>
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                      {prob.warning}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-govnavy-100 group-hover:bg-rose-50 text-govnavy-700 group-hover:text-rose-700 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-govnavy-900 group-hover:text-rose-950 transition-colors">
                      {prob.title}
                    </h3>
                  </div>

                  <p className="text-xs text-govnavy-600 mt-2.5 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
