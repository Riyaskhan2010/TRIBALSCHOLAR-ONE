import React from 'react';
import { 
  GitFork, 
  Lock, 
  HelpCircle, 
  FileCheck,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const MetricStrip: React.FC = () => {
  const metrics = [
    {
      num: '01',
      stat: '9',
      label: 'Guided Workflow Steps',
      desc: 'From initial profile creation to verified DBT bank disbursement.',
      icon: GitFork,
      accent: 'text-brand-700',
      bg: 'bg-brand-50/70',
    },
    {
      num: '02',
      stat: 'Secure',
      label: 'Document Vault',
      desc: 'AES-256 client-side encrypted repository with OCR & auto-masking.',
      icon: Lock,
      accent: 'text-saffron-700',
      bg: 'bg-saffron-50/70',
    },
    {
      num: '03',
      stat: 'Explainable',
      label: 'Eligibility',
      desc: 'Deterministic rule evaluation with gazette clause transparency.',
      icon: HelpCircle,
      accent: 'text-forest-700',
      bg: 'bg-forest-50/70',
    },
    {
      num: '04',
      stat: 'Evidence-Based',
      label: 'Tracking',
      desc: 'Organized progress tracking tied to authentic acknowledgement slips.',
      icon: FileCheck,
      accent: 'text-govnavy-900',
      bg: 'bg-govnavy-100/70',
    },
  ];

  return (
    <div className="bg-white border-y border-govnavy-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="gov-card p-4 sm:p-5 rounded-xl border border-govnavy-200 hover:border-govnavy-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-govnavy-400">
                      {item.num}
                    </span>
                    <div className={`p-1.5 rounded-lg ${item.bg}`}>
                      <Icon className={`w-4 h-4 ${item.accent}`} />
                    </div>
                  </div>

                  <div className="text-xl sm:text-2xl font-extrabold text-govnavy-950 font-heading tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-xs font-bold text-govnavy-800 mt-0.5">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs text-govnavy-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
