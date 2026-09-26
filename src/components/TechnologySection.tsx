import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Layers,
  CheckCircle2,
  Terminal,
  FileCheck2,
  GitBranch
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techStack = [
    {
      category: 'Frontend',
      tech: 'React + TypeScript + Tailwind CSS',
      desc: 'Type-safe reactive client architecture with modular components, WCAG 2.1 accessible forms, and responsive civic-tech interface design.',
      icon: Code2,
      accent: 'text-brand-700',
      badge: 'Client Layer',
    },
    {
      category: 'Backend',
      tech: 'FastAPI + Python',
      desc: 'High-performance asynchronous REST API handling encryption routines, deterministic rule validation pipelines, and data transformations.',
      icon: Server,
      accent: 'text-emerald-700',
      badge: 'Async Core',
    },
    {
      category: 'Database',
      tech: 'MongoDB',
      desc: 'MongoDB stores student profiles, scholarship data, application records, document metadata and verification information.',
      icon: Database,
      accent: 'text-emerald-700',
      badge: 'Data Storage',
    },
    {
      category: 'Document Intelligence',
      tech: 'OCR + Document Comparison',
      desc: 'Dual-pass OCR for certificate field extraction, Levenshtein fuzzy string matching, and document comparison for mismatch detection.',
      icon: Cpu,
      accent: 'text-purple-700',
      badge: 'Processing',
    },
    {
      category: 'Eligibility',
      tech: 'Deterministic Rule Engine',
      desc: 'Rule evaluation auditing criteria against official Ministry of Tribal Affairs (MoTA) guidelines and state gazette notifications.',
      icon: FileCheck2,
      accent: 'text-brand-700',
      badge: 'Rule Engine',
    },
    {
      category: 'AI Assistant',
      tech: 'JAGO Grounded Assistant',
      desc: 'Retrieval-Augmented Generation strictly constrained to official Ministry of Tribal Affairs (MoTA) and state welfare guideline manuals.',
      icon: Bot,
      accent: 'text-saffron-700',
      badge: 'Grounded RAG',
    },
    {
      category: 'Security',
      tech: 'JWT + Secure Sessions + Encryption + RBAC + Audit Logs',
      desc: 'Client-side derived key encryption, cryptographically signed ephemeral tokens, role-based boundaries, and immutable audit logs.',
      icon: ShieldCheck,
      accent: 'text-rose-700',
      badge: 'Cryptographic',
    },
    {
      category: 'Integrations',
      tech: 'DigiLocker / Official Source Adapters',
      desc: 'Standardized adapters for DigiLocker token verification and public portal tracking where applicable.',
      icon: Layers,
      accent: 'text-blue-700',
      badge: 'Adapters',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-white border-y border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-govnavy-100 border border-govnavy-200 text-govnavy-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-brand-700" />
            <span>Practical Engineering Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight uppercase">
            TECHNOLOGY STACK
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Engineered for reliability, document sovereignty, and deterministic rule execution with MongoDB data persistence.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="gov-card p-5 rounded-2xl border border-govnavy-200 hover:border-brand-300 transition-all shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-govnavy-100">
                        <Icon className={`w-4 h-4 ${item.accent}`} />
                      </div>
                      <span className="text-[11px] font-bold text-govnavy-500 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-govnavy-50 text-govnavy-600 border border-govnavy-200 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-govnavy-900 font-heading mb-1.5">
                    {item.tech}
                  </h3>

                  <p className="text-xs text-govnavy-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-govnavy-100 flex items-center justify-between text-[11px] text-govnavy-400">
                  <span>Stack Module</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Configured
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
