import React from 'react';
import { 
  User, 
  Lock, 
  Search, 
  HelpCircle, 
  CheckSquare, 
  ExternalLink, 
  FileCheck, 
  BrainCircuit, 
  CreditCard,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Student Profile',
      desc: 'Unified master demographic, tribal community & academic baseline.',
      icon: User,
      isSpecial: false,
    },
    {
      num: '02',
      title: 'Document Vault',
      desc: 'Encrypted storage with automated OCR extraction & expiry watchdogs.',
      icon: Lock,
      isSpecial: false,
    },
    {
      num: '03',
      title: 'Scholarship Finder',
      desc: 'Deterministic matching against MoTA, State & Premier Institute schemes.',
      icon: Search,
      isSpecial: false,
    },
    {
      num: '04',
      title: 'Eligibility Checker',
      desc: 'Explainable condition validation citing official scheme gazettes.',
      icon: HelpCircle,
      isSpecial: false,
    },
    {
      num: '05',
      title: 'Readiness Check',
      desc: 'CRITICAL PRE-FLIGHT: Spelling comparison, NPCI bank mapping & attachment audit.',
      icon: CheckSquare,
      isSpecial: true, // Strong visual highlight
      highlight: 'Ready before you apply.',
    },
    {
      num: '06',
      title: 'Official Portal',
      desc: 'Student exports pre-verified dossier and submits via authoritative government portal.',
      icon: ExternalLink,
      isSpecial: false,
    },
    {
      num: '07',
      title: 'Application Evidence',
      desc: 'Archival of official acknowledgement slips and tracking identifiers.',
      icon: FileCheck,
      isSpecial: false,
    },
    {
      num: '08',
      title: 'Verification Brain',
      desc: 'Continuous monitoring of institutional nodal & state officer endorsements.',
      icon: BrainCircuit,
      isSpecial: false,
    },
    {
      num: '09',
      title: 'DBT Tracking',
      desc: 'Milestone tracking from Ministry Sanction Order to direct bank credit.',
      icon: CreditCard,
      isSpecial: false,
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-govnavy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 border border-saffron-300 text-saffron-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron-700" />
            <span>End-to-End Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            The complete 9-stage workflow.
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Every step is engineered to remove friction, prevent application rejections, and give students complete transparency until the scholarship is credited.
          </p>
        </div>

        {/* Workflow Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all flex flex-col justify-between ${
                  step.isSpecial
                    ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50/80 border-2 border-saffron-500 shadow-elevated ring-4 ring-saffron-400/20'
                    : 'bg-white border border-govnavy-200 shadow-subtle hover:border-brand-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                      step.isSpecial ? 'bg-saffron-600 text-white' : 'bg-govnavy-100 text-govnavy-700'
                    }`}>
                      STAGE {step.num}
                    </span>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      step.isSpecial ? 'bg-saffron-500 text-govnavy-950 font-bold' : 'bg-brand-50 text-brand-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {step.isSpecial && (
                    <div className="mb-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-saffron-900 bg-saffron-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      {step.highlight}
                    </div>
                  )}

                  <h3 className={`text-lg font-bold mb-2 font-heading ${
                    step.isSpecial ? 'text-saffron-950' : 'text-govnavy-900'
                  }`}>
                    {step.title}
                  </h3>

                  <p className="text-xs text-govnavy-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-govnavy-100 flex items-center justify-between text-[11px] text-govnavy-400">
                  <span>Stage {index + 1} of 9</span>
                  <span className="font-semibold text-brand-700">TribalScholar Engine</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Readiness Highlight Note */}
        <div className="mt-12 bg-white rounded-2xl border border-govnavy-200 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-subtle">
          <h4 className="text-base font-bold text-govnavy-900 mb-1">
            Why Stage 05 (Readiness Check) Changes the Outcome
          </h4>
          <p className="text-xs sm:text-sm text-govnavy-600 leading-relaxed">
            Most scholarship rejections in state and central portals occur due to minor typographical discrepancies in names, expired certificates, or unseeded bank accounts. By running deterministic sanity checks beforehand, TribalScholar One eliminates avoidable documentation errors before the student applies.
          </p>
        </div>
      </div>
    </section>
  );
};
