import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Users, 
  FileText, 
  Eye, 
  CheckCircle2, 
  AlertCircle,
  FileKey
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityCards = [
    {
      icon: Lock,
      title: 'AES-256 Storage Encryption',
      desc: 'All sensitive certificates, income proofs, and tribal caste documentation are encrypted with client-side derived keys before persistence in database records.',
      badge: 'At-Rest & In-Flight',
    },
    {
      icon: Key,
      title: 'Secure Ephemeral Sessions',
      desc: 'Zero persistent session leakage. Access tokens are time-bounded with cryptographic JWT signatures and strict automated timeout locks.',
      badge: 'Zero-Knowledge',
    },
    {
      icon: Users,
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Students, authorised institutional reviewers, and system administrators receive granular access strictly aligned with their verified operational role.',
      badge: 'Granular Scopes',
    },
    {
      icon: FileText,
      title: 'Immutable Audit Logs',
      desc: 'Every document decryption, eligibility check evaluation, and pre-flight export is cryptographically logged with tamper-evident checksums.',
      badge: 'SHA-256 Hashing',
    },
    {
      icon: Eye,
      title: 'Controlled Document Access',
      desc: 'Sensitive numbers (Aadhaar 12-digit UIDs) are masked by default. Student PIN consent is strictly required prior to exporting dossiers.',
      badge: 'Auto-Masking',
    },
    {
      icon: FileKey,
      title: 'Consent-Based Integrations',
      desc: 'Adapters for DigiLocker and public verification services function strictly through explicit student-directed authentication tokens.',
      badge: 'Student-Owned',
    },
  ];

  return (
    <section id="security" className="py-20 bg-white border-y border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-govnavy-100 border border-govnavy-200 text-govnavy-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Civic Trust & Data Sovereignty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            Security built into the workflow.
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Protecting sensitive indigenous identity records and financial disclosures through rigorous security controls, client-side encryption, and explicit student consent.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="gov-card p-6 rounded-xl border border-govnavy-200 hover:border-brand-300 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-govnavy-100 text-brand-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-govnavy-600 bg-govnavy-100 px-2 py-0.5 rounded font-mono">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-govnavy-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-govnavy-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-govnavy-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Enforced at application layer</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RBAC Visual Strip */}
        <div className="mt-10 bg-govnavy-50 rounded-2xl border border-govnavy-200 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-500 mb-4">
            Role-Based Access Control (RBAC) Architecture
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-govnavy-200">
              <div className="font-bold text-govnavy-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                <span>Student Role</span>
              </div>
              <p className="text-govnavy-600 text-[11px] leading-relaxed">
                Full custody of master demographic profile, personal PIN-locked vault, eligibility audits, and pre-flight export generation.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-govnavy-200">
              <div className="font-bold text-govnavy-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>Authorised Reviewer / Nodal</span>
              </div>
              <p className="text-govnavy-600 text-[11px] leading-relaxed">
                Time-limited, read-only inspection of student-shared verification summaries for academic bonafide endorsements.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-govnavy-200">
              <div className="font-bold text-govnavy-900 mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-govnavy-900"></span>
                <span>System Administrator</span>
              </div>
              <p className="text-govnavy-600 text-[11px] leading-relaxed">
                Infrastructure health monitoring, scheme rule configuration updates, and security audit log review with zero raw document access.
              </p>
            </div>
          </div>
        </div>

        {/* Prototype Disclaimer */}
        <div className="mt-6 p-3.5 bg-govnavy-50 rounded-xl border border-govnavy-200 flex items-center justify-center gap-2 text-xs text-govnavy-500 text-center">
          <AlertCircle className="w-4 h-4 text-govnavy-400 flex-shrink-0" />
          <span>Security features shown represent the current prototype design. No external certification is claimed.</span>
        </div>
      </div>
    </section>
  );
};
