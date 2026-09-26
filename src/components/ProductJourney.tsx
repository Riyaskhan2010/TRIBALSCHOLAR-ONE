import React from 'react';
import { 
  KeyRound, 
  User, 
  Lock, 
  Search, 
  HelpCircle, 
  CheckSquare, 
  ExternalLink, 
  FileCheck, 
  Activity, 
  CreditCard,
  ArrowRight,
  ArrowDown,
  ShieldCheck
} from 'lucide-react';

export const ProductJourney: React.FC = () => {
  const journeyNodes = [
    { step: '01', title: 'LOGIN', desc: 'Secure student authentication using PIN-derived key architecture.', icon: KeyRound },
    { step: '02', title: 'STUDENT PROFILE', desc: 'One-time master baseline for tribal community, domicile & academics.', icon: User },
    { step: '03', title: 'DOCUMENT VAULT', desc: 'Encrypted storage with automated OCR extraction and expiry alerts.', icon: Lock },
    { step: '04', title: 'SCHOLARSHIP FINDER', desc: 'Deterministic matching against MoTA, State & Premier Institute schemes.', icon: Search },
    { step: '05', title: 'ELIGIBILITY CHECK', desc: 'Transparent rule evaluation checking income caps and gazette criteria.', icon: HelpCircle },
    { step: '06', title: 'READINESS CHECK', desc: 'Pre-flight diagnostic: spellings, NPCI bank mapping & attachment bundle.', icon: CheckSquare, highlight: true },
    { step: '07', title: 'OFFICIAL GOVERNMENT PORTAL', desc: 'Student exports pre-verified dossier and submits on official portal.', icon: ExternalLink, isBoundary: true },
    { step: '08', title: 'APPLICATION EVIDENCE', desc: 'Archival of official acknowledgement slip and tracking application ID.', icon: FileCheck },
    { step: '09', title: 'STATUS TIMELINE', desc: 'Verifiable progression timeline from institute nodals to state approvals.', icon: Activity },
    { step: '10', title: 'DBT PAYMENT INFORMATION', desc: 'Disbursement audit tracking PFMS batches directly to student bank A/C.', icon: CreditCard },
  ];

  return (
    <section className="py-20 bg-govnavy-50 border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
            <span>Product Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            HOW TRIBALSCHOLAR ONE WORKS
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            A step-by-step operational workflow demonstrating how student data flows securely from initial profile creation to verified DBT payment disbursement.
          </p>
        </div>

        {/* 10-Step Product Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {journeyNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  node.highlight
                    ? 'bg-amber-50/80 border-saffron-500 shadow-sm ring-2 ring-saffron-400/20'
                    : node.isBoundary
                    ? 'bg-govnavy-900 text-white border-govnavy-800 shadow-sm'
                    : 'bg-white border-govnavy-200 shadow-subtle hover:border-brand-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                      node.isBoundary ? 'bg-govnavy-800 text-emerald-400' : 'bg-govnavy-100 text-govnavy-600'
                    }`}>
                      STEP {node.step}
                    </span>
                    <div className={`p-1.5 rounded-lg ${
                      node.isBoundary ? 'bg-govnavy-800 text-emerald-400' : 'bg-brand-50 text-brand-700'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className={`text-xs font-bold font-heading mb-1.5 uppercase ${
                    node.isBoundary ? 'text-white' : 'text-govnavy-900'
                  }`}>
                    {node.title}
                  </h3>

                  <p className={`text-[11px] leading-relaxed ${
                    node.isBoundary ? 'text-govnavy-300' : 'text-govnavy-600'
                  }`}>
                    {node.desc}
                  </p>
                </div>

                <div className={`mt-3 pt-2 text-[10px] border-t font-mono flex items-center justify-between ${
                  node.isBoundary ? 'border-govnavy-800 text-govnavy-400' : 'border-govnavy-100 text-govnavy-400'
                }`}>
                  <span>Stage {index + 1}</span>
                  {index < journeyNodes.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-govnavy-400 hidden lg:inline" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
