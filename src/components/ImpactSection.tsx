import React from 'react';
import { 
  TrendingUp, 
  HelpCircle, 
  FileCheck, 
  ShieldCheck, 
  FolderCheck,
  CheckCircle2
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      title: 'Reduce Confusion',
      tagline: 'Help students understand relevant schemes and requirements.',
      desc: 'Replaces scattered manual searches across disparate state and central web pages with a unified matching engine configured for Scheduled Tribe guidelines.',
      icon: HelpCircle,
      accent: 'text-brand-700',
      bg: 'bg-brand-50',
    },
    {
      title: 'Improve Preparation',
      tagline: 'Identify missing documents and information before application.',
      desc: 'The pre-flight Readiness Check proactively flags expired certificates, size limits, and formatting errors before the student enters the official government portal.',
      icon: FileCheck,
      accent: 'text-saffron-700',
      bg: 'bg-saffron-50',
    },
    {
      title: 'Increase Transparency',
      tagline: 'Show why an eligibility condition is satisfied or requires review.',
      desc: 'Provides explainable, clause-by-clause evaluation of economic ceilings, sub-tribe status, and institutional accreditations rather than opaque responses.',
      icon: ShieldCheck,
      accent: 'text-emerald-700',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Organise the Journey',
      tagline: 'Keep documents, readiness, application evidence and payment information together.',
      desc: 'Consolidates master profile, encrypted certificates, application acknowledgement receipts, and DBT disbursement milestones in one transparent student workspace.',
      icon: FolderCheck,
      accent: 'text-purple-700',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-govnavy-50/60 border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Civic & Educational Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            EXPECTED IMPACT
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Measuring the tangible benefits of unified scholarship preparation, pre-flight error reduction, and transparent decision-support for ST beneficiaries.
          </p>
        </div>

        {/* 4 Clean Impact Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="gov-card p-6 rounded-2xl border border-govnavy-200 hover:border-brand-300 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${item.bg}`}>
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <span className="text-xs font-mono font-bold text-govnavy-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-govnavy-900 mb-1 font-heading">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-brand-700 mb-2">
                    {item.tagline}
                  </div>

                  <p className="text-xs text-govnavy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-govnavy-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Measurable Outcome</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
