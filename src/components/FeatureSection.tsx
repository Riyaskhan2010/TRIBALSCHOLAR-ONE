import React from 'react';
import { 
  User,
  Lock,
  Award, 
  HelpCircle, 
  BrainCircuit, 
  CheckSquare, 
  Activity, 
  CreditCard,
  Bot,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Student Master Profile',
      tagline: 'Centralised student information for scholarship preparation.',
      desc: 'Build a single master record covering demographic, tribal community, institution details, and annual income baseline once, avoiding repetitive portal entries.',
      icon: User,
      points: [
        'One-time unified registry for ST category, sub-tribe, and domicile district.',
        'Academic credentials, CGPA transcripts, and accredited institution linkage.',
        'Student-controlled custody with zero third-party leakage.'
      ],
      preview: {
        title: 'Master Profile Engine',
        badge: 'Verified Baseline',
        item1: { label: 'Beneficiary & Tribe', val: 'Ramesh Hembram • ST Santal' },
        item2: { label: 'Institutional Enrollment', val: 'NIT Rourkela • B.Tech CSE (8.74 CGPA)' },
      }
    },
    {
      num: '02',
      title: 'Secure Document Vault',
      tagline: 'Encrypted document storage with PIN protection, document status, expiry alerts, access history and controlled reuse.',
      desc: 'A secure personal repository protecting certificates with client-side derived AES-256 encryption, validity watchdogs, and auto-masking.',
      icon: Lock,
      points: [
        'Personal 4-digit PIN protection for client-side zero-knowledge decryption.',
        'Automated 90-day expiry notifications for financial year income certificates.',
        'Tamper-evident SHA-256 checksums and immutable access history logs.'
      ],
      preview: {
        title: 'Encrypted Vault Repository',
        badge: 'AES-256 Encrypted',
        item1: { label: 'Tribe / Caste Certificate', val: 'DigiLocker Verified • Lifetime Validity' },
        item2: { label: 'Income Certificate', val: 'FY 2024-25 • Expiring 31-Mar-2025' },
      }
    },
    {
      num: '03',
      title: 'Smart Scholarship Finder',
      tagline: 'Matches the student\'s profile with configured ST scholarship and fellowship schemes.',
      desc: 'Evaluates student parameters against official central and state welfare scheme databases, calculating transparent fit scores without hidden logic.',
      icon: Award,
      points: [
        'Filters by Ministry of Tribal Affairs (MoTA) and state welfare guidelines.',
        'Matches annual income ceilings, accredited tiers, and degree levels.',
        'Identifies high-benefit premier institute allowances (e.g. Top Class Scheme).'
      ],
      preview: {
        title: 'Scheme Matching Matrix',
        badge: '3 Matched Grants',
        item1: { label: 'Top Class ST Higher Education', val: '96% Fit • Full Tuition & Maintenance' },
        item2: { label: 'Post-Matric ST Scholarship', val: '94% Fit • State Disbursed' },
      }
    },
    {
      num: '04',
      title: 'Explainable Eligibility',
      tagline: 'Shows satisfied, missing and verification-required eligibility conditions.',
      desc: 'Audits every condition line-by-line citing official scheme notification clauses so students understand exactly why a scheme qualifies or requires action.',
      icon: HelpCircle,
      points: [
        'Clause-by-clause breakdown: Domicile, ST Gazette Serial, Income, and Bank NPCI.',
        'Clear explanations for satisfied vs. borderline criteria.',
        'Zero black-box decisions; cites official statutory guidelines.'
      ],
      preview: {
        title: 'Rule Diagnostic Audit',
        badge: '5 of 6 Satisfied',
        item1: { label: 'Tribe Gazette Listing', val: '✓ Scheduled Tribe (Sl No. 54 Santal)' },
        item2: { label: 'Family Income Bound (≤ ₹6.0L)', val: '✓ ₹2.10L Verified (Within Ceiling)' },
      }
    },
    {
      num: '05',
      title: 'Verification Brain',
      tagline: 'Compares profile information with OCR-extracted document information and flags discrepancies for review.',
      desc: 'An algorithmic document intelligence engine that checks typographical variances between scanned certificates and profile details before formal submission.',
      icon: BrainCircuit,
      points: [
        'Fuzzy string matching for student name and father name variations.',
        'Cross-verifies Aadhaar NPCI seeding against bank passbook mandates.',
        'Flags discrepancies early so corrections happen before institutional deadlines.'
      ],
      preview: {
        title: 'OCR Cross-Match Diagnostic',
        badge: '98.8% Similarity',
        item1: { label: 'Name Consistency Check', val: 'Exact Match: "RAMESH HEMBRAM"' },
        item2: { label: 'NPCI Aadhaar Seeding', val: 'Active on Mapper (SBIN0002112)' },
      }
    },
    {
      num: '06',
      title: 'Application Readiness',
      tagline: 'Checks required documents, profile information and conditions before the student proceeds to the official portal.',
      desc: 'A critical pre-flight inspection checklist that ensures zero missing attachments, valid file formats, and complete demographic consistency before the student visits the official portal.',
      icon: CheckSquare,
      isProminent: true, // Visually prominent
      points: [
        'Comprehensive 6-point pre-flight audit for documents, income validity & NPCI bank status.',
        'Generates an organized, ready-to-upload application dossier bundle.',
        'Guarantees pre-submission readiness to eliminate avoidable portal rejections.'
      ],
      preview: {
        title: 'Pre-Flight Readiness Check',
        badge: '96% Ready for Portal',
        item1: { label: 'Mandatory Certificate Bundle', val: '5/5 Formats Verified (<2MB PDF)' },
        item2: { label: 'Blocking Rejection Errors', val: '0 Issues Found (Ready for NSP)' },
      }
    },
    {
      num: '07',
      title: 'Evidence-Based Application Tracking',
      tagline: 'Students can record application reference numbers and upload official screenshots/PDF evidence to maintain a timeline.',
      desc: 'Maintains an organized timeline of submission acknowledgement slips, application IDs, and institutional approvals without hunting across fragmented email threads.',
      icon: Activity,
      points: [
        'Records official NSP application references (e.g. OR2024250098412).',
        'Archives verified nodal officer endorsements and ministry sanction orders.',
        'Maintains immutable proof receipts for student grievances or inquiries.'
      ],
      preview: {
        title: 'Evidence Timeline Record',
        badge: 'Institute Endorsed',
        item1: { label: 'NSP Application Slip', val: 'Uploaded & Archived (OR2024250098412)' },
        item2: { label: 'Nodal Officer Verification', val: 'Approved by NIT Rourkela Nodal Desk' },
      }
    },
    {
      num: '08',
      title: 'DBT Payment Tracking',
      tagline: 'Displays available payment stages with clear evidence/source labels.',
      desc: 'Provides end-to-end visibility from Ministry Sanction Order to the final direct credit in the student’s Aadhaar-linked bank account.',
      icon: CreditCard,
      points: [
        'Audits all 4 payment stages: Sanctioned → FTO Generated → Payment Initiated → Credited.',
        'Displays public PFMS transaction references and Bank UTR numbers.',
        'Ensures complete transparency with zero intermediary deductions.'
      ],
      preview: {
        title: 'DBT Payment Audit',
        badge: 'Credited (₹1,85,000)',
        item1: { label: 'MoTA Sanction Order Ref', val: 'MoTA/EDU/2024/774 (Approved)' },
        item2: { label: 'Direct Bank Credit Status', val: 'SBI A/C ..6641 (UTR: SBIN225091823901)' },
      }
    },
    {
      num: '09',
      title: 'JAGO AI Assistant',
      tagline: 'Provides grounded guidance about scholarships, documents, eligibility and application preparation.',
      desc: 'A grounded AI assistant that answers student questions referencing official Ministry of Tribal Affairs and state welfare notification manuals with zero hallucinations.',
      icon: Bot,
      points: [
        'Trained on official MoTA scheme guidelines and statutory gazette notifications.',
        'Provides step-by-step document preparation instructions with clause citations.',
        'Maintains strict boundaries: provides preparation guidance, not automated filing.'
      ],
      preview: {
        title: 'JAGO Grounded Guidance',
        badge: 'Grounded RAG',
        item1: { label: 'Knowledge Source', val: 'Official MoTA Scheme Guidelines 2024-25' },
        item2: { label: 'Query Response', val: 'Document checklist & income limit guidance' },
      }
    }
  ];

  return (
    <section id="features" className="py-20 bg-govnavy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-brand-700" />
            <span>Core Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight uppercase">
            9 CORE PLATFORM MODULES
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Purpose-built civic-tech modules designed to resolve document confusion, clarify eligibility rules, detect certificate mismatches, and track verified DBT payments.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="space-y-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  feat.isProminent
                    ? 'bg-gradient-to-br from-amber-50/80 via-white to-amber-50/50 border-2 border-saffron-500 shadow-elevated ring-4 ring-saffron-400/20'
                    : 'gov-card border-govnavy-200 shadow-subtle hover:border-brand-300'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Details */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                        feat.isProminent ? 'bg-saffron-500 text-govnavy-950' : 'bg-brand-50 text-brand-700'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        feat.isProminent ? 'text-saffron-900' : 'text-brand-700'
                      }`}>
                        MODULE {feat.num}
                      </span>
                      {feat.isProminent && (
                        <span className="text-[10px] bg-saffron-500 text-govnavy-950 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Key Differentiator
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-govnavy-900 font-heading">
                      {feat.title}
                    </h3>

                    <p className={`text-xs sm:text-sm font-semibold ${
                      feat.isProminent ? 'text-saffron-950' : 'text-brand-900'
                    }`}>
                      {feat.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-govnavy-600 leading-relaxed">
                      {feat.desc}
                    </p>

                    <ul className="space-y-2 pt-2 text-xs text-govnavy-700">
                      {feat.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            feat.isProminent ? 'text-saffron-700' : 'text-emerald-600'
                          }`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* UI Preview Card */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-card space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-govnavy-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                          <span className="text-xs font-bold text-govnavy-900 font-heading">
                            {feat.preview.title}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold border px-2 py-0.5 rounded-full ${
                          feat.isProminent 
                            ? 'bg-amber-100 text-amber-900 border-amber-300' 
                            : 'bg-brand-50 text-brand-700 border-brand-200'
                        }`}>
                          {feat.preview.badge}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-govnavy-50 p-3 rounded-lg border border-govnavy-100">
                          <div className="text-[11px] text-govnavy-500 font-medium">
                            {feat.preview.item1.label}
                          </div>
                          <div className="font-bold text-govnavy-900 mt-0.5">
                            {feat.preview.item1.val}
                          </div>
                        </div>

                        <div className="bg-govnavy-50 p-3 rounded-lg border border-govnavy-100">
                          <div className="text-[11px] text-govnavy-500 font-medium">
                            {feat.preview.item2.label}
                          </div>
                          <div className="font-bold text-govnavy-900 mt-0.5">
                            {feat.preview.item2.val}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 text-[10px] text-govnavy-400 flex items-center justify-between">
                        <span>TribalScholar Verification Architecture</span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Validated Module
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
