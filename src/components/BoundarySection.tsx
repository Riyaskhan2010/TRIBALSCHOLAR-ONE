import React from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  AlertTriangle,
  FileCheck,
  Building
} from 'lucide-react';

export const BoundarySection: React.FC = () => {
  const ourCapabilities = [
    { title: 'Profile Preparation', desc: 'Unified master demographic & academic baseline creation.' },
    { title: 'Document Organisation', desc: 'Encrypted vault, OCR parsing & certificate expiry alerts.' },
    { title: 'Eligibility Guidance', desc: 'Deterministic matching against MoTA & State welfare rules.' },
    { title: 'Readiness Checking', desc: 'Pre-flight diagnostic for names, NPCI bank mapping & attachments.' },
    { title: 'Evidence Management', desc: 'Structured archival of acknowledgement slips & transaction refs.' },
    { title: 'Status Organisation', desc: 'Consolidated tracking timeline without portal login chaos.' },
    { title: 'Payment Visibility', desc: 'Clear milestone inspection from Sanction to DBT credit.' },
  ];

  const govCapabilities = [
    { title: 'Actual Application Submission', desc: 'Formal statutory filing executed directly by the student.' },
    { title: 'Government Authentication', desc: 'Aadhaar OTP, DigiLocker auth, and NSP secure login.' },
    { title: 'Official Verification', desc: 'Statutory scrutiny by Institute Nodal Officer & State Welfare Officer.' },
    { title: 'Final Scheme Approval', desc: 'Authorized sanction order generation by Ministry of Tribal Affairs.' },
    { title: 'Official Payment Processing', desc: 'Disbursement through PFMS & RBI e-Kuber banking infrastructure.' },
  ];

  return (
    <section id="boundary" className="py-20 bg-govnavy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical Governance & System Boundary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Designed to guide — not replace — official portals.
          </h2>
          <p className="mt-4 text-base text-govnavy-300 leading-relaxed">
            TribalScholar One acts as a student-side decision support and pre-application preparation cockpit. The actual statutory application is always submitted personally through authoritative government systems.
          </p>
        </div>

        {/* Two-Sided Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: TribalScholar One */}
          <div className="lg:col-span-5 bg-govnavy-800/90 rounded-2xl border border-govnavy-700 p-6 sm:p-7 shadow-elevated">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-govnavy-700">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                  TS1
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    TribalScholar One
                  </h3>
                  <span className="text-[11px] text-brand-300 font-medium">
                    Preparation & Decision Support
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-mono font-bold">
                Student-Side
              </span>
            </div>

            <div className="space-y-3">
              {ourCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{item.title}</span>
                    <span className="text-[11px] text-govnavy-300">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Transition Channel */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-3 py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-saffron-500 text-govnavy-950 flex items-center justify-center font-black shadow-card animate-pulse">
              <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
            </div>
            <div className="bg-govnavy-800 px-3.5 py-2 rounded-xl border border-govnavy-700 text-center max-w-[180px]">
              <span className="text-xs font-bold text-saffron-300 block">
                Official Continuation
              </span>
              <span className="text-[11px] text-govnavy-300 block mt-0.5 leading-snug">
                Student exports dossier & continues to official portal
              </span>
            </div>
          </div>

          {/* Right: Official Government Portal */}
          <div className="lg:col-span-5 bg-govnavy-950 rounded-2xl border border-govnavy-800 p-6 sm:p-7 shadow-elevated">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-govnavy-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                  GOV
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Official Government Portals
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    National Scholarship Portal (NSP) / MoTA
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-bold">
                Authoritative
              </span>
            </div>

            <div className="space-y-3.5">
              {govCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="p-0.5 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">{item.title}</span>
                    <span className="text-[11px] text-govnavy-300">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-govnavy-800 text-[11px] text-govnavy-400 flex items-center justify-between">
              <span>Authentication: Student Aadhaar OTP</span>
              <span className="text-emerald-400 font-mono">scholarships.gov.in</span>
            </div>
          </div>
        </div>

        {/* Clear Guarantee Box */}
        <div className="mt-10 bg-govnavy-800/60 rounded-xl border border-govnavy-700 p-4 text-xs text-govnavy-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-saffron-400 flex-shrink-0" />
            <span>
              <strong>Zero Impersonation Protocol:</strong> TribalScholar One never prompts for government passwords, never alters submitted records, and never claims live backend government database access.
            </span>
          </div>
          <span className="text-[11px] font-mono text-govnavy-400 whitespace-nowrap">
            Architecture Compliant
          </span>
        </div>
      </div>
    </section>
  );
};
