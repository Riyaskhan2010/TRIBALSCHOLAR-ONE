import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  FileCheck, 
  BrainCircuit, 
  Lock, 
  Activity,
  ExternalLink
} from 'lucide-react';

export const InnovationSection: React.FC = () => {
  const differentiators = [
    {
      title: 'One Reusable Student Profile',
      desc: 'Build once and reuse across Central MoTA, State Tribal Welfare, and Institutional Fellowship schemes without repetitive data re-entry.',
      icon: Layers,
    },
    {
      title: 'Secure Document Reuse',
      desc: 'AES-256 client-encrypted certificates with automatic OCR extraction, tamper-evident checksums, and 90-day expiry notifications.',
      icon: Lock,
    },
    {
      title: 'Explainable Eligibility',
      desc: 'Transparent, deterministic evaluation showing exactly which clauses are satisfied, borderline, or missing rather than an opaque black-box response.',
      icon: Sparkles,
    },
    {
      title: 'Verification Brain Mismatch Detection',
      desc: 'Fuzzy string matching comparing scanned certificates with profile records to catch spelling anomalies before nodal verification officers flag them.',
      icon: BrainCircuit,
    },
    {
      title: 'Strong Pre-Application Readiness Check',
      desc: 'Comprehensive pre-flight checklist auditing documents, file sizes, and NPCI bank seeding before the student opens the official portal.',
      icon: FileCheck,
      highlight: true,
    },
    {
      title: 'Evidence-Based Application Timeline',
      desc: 'Organized progress tracking backed by uploaded official acknowledgement slips and public ledger transaction IDs.',
      icon: Activity,
    },
    {
      title: 'Clear Data Boundary Separation',
      desc: 'Transparent demarcation between student-side preparation/demo data and official statutory government records.',
      icon: ShieldCheck,
    },
    {
      title: 'Student-Controlled Official Submission',
      desc: 'Students submit directly on official government portals (scholarships.gov.in) using their own personal DigiLocker / Aadhaar credentials.',
      icon: ExternalLink,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 border border-saffron-300 text-saffron-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron-700" />
            <span>Key Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            WHAT MAKES THE APPROACH DIFFERENT?
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Our architectural innovations focus on deterministic verification, explainability, document sovereignty, and pre-submission error prevention.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  diff.highlight
                    ? 'bg-amber-50/60 border-saffron-400 shadow-card ring-2 ring-saffron-400/20'
                    : 'bg-white border-govnavy-200 shadow-subtle hover:border-brand-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${
                      diff.highlight ? 'bg-saffron-500 text-govnavy-950 font-bold' : 'bg-govnavy-100 text-brand-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-govnavy-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-govnavy-900 mb-1.5 font-heading">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-govnavy-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-govnavy-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Implemented in Prototype</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
