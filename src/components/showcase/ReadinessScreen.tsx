import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Info,
  Check
} from 'lucide-react';
import { mockStudent, mockSchemes } from '../../data/mockData';

export const ReadinessScreen: React.FC = () => {
  const scheme = mockSchemes[0];

  const readinessChecks = [
    {
      category: '1. Identity & Tribe Consistency',
      status: 'Passed',
      title: 'Full Name Consistency Check',
      detail: 'Name "RAMESH HEMBRAM" matches 100% across Aadhaar, ST Certificate, and Marksheets.',
      critical: true,
      passed: true,
    },
    {
      category: '1. Identity & Tribe Consistency',
      status: 'Passed',
      title: 'Presidential ST Order Designation',
      detail: 'Tribe "Santal" correctly indexed under State Gazette Notification Sl No. 54.',
      critical: true,
      passed: true,
    },
    {
      category: '2. Financial & Income Ceiling',
      status: 'Advisory',
      title: 'Income Certificate Financial Year Validity',
      detail: 'Income ₹2,10,000 meets ceiling (≤ ₹6,00,000). Certificate expires on 31-Mar-2025. Renewal recommended.',
      critical: false,
      passed: true,
      warning: true,
    },
    {
      category: '3. Direct Benefit Transfer (DBT) Readiness',
      status: 'Passed',
      title: 'NPCI Aadhaar Bank Seeding Confirmation',
      detail: 'Active mapping confirmed for SBI A/C (..6641) on National Payments Corporation of India mapper.',
      critical: true,
      passed: true,
    },
    {
      category: '4. Institutional Eligibility & Fee Mandate',
      status: 'Passed',
      title: 'MoTA Notified Premier Institute Accreditation',
      detail: 'NIT Rourkela is an active accredited institute under Top Class ST Scheme Schedule A.',
      critical: true,
      passed: true,
    },
    {
      category: '5. Document Formats & Attachment Bundle',
      status: 'Passed',
      title: 'Required Attachment Package Preparation',
      detail: 'All 5 mandatory certificates compressed, formatted (<2MB PDF), and pre-bundled for NSP portal.',
      critical: true,
      passed: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Prominent Readiness Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-saffron-600 to-amber-600 text-white rounded-2xl p-6 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white font-mono text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Differentiating Pre-Flight Engine
            </span>
            <span className="bg-emerald-900/40 text-emerald-100 text-xs px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 96% Application Ready
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold font-heading mt-1.5">
            Pre-Application Readiness Diagnostic
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Eliminates rejection surprises before applying on the official National Scholarship Portal (NSP). Checks data formatting, document expiry, and spelling discrepancies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-shrink-0">
          <button className="bg-govnavy-950 hover:bg-govnavy-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5">
            <Download className="w-3.5 h-3.5" />
            <span>Export Verified Dossier</span>
          </button>
        </div>
      </div>

      {/* Readiness Matrix */}
      <div className="bg-white rounded-2xl border border-govnavy-200 p-6 shadow-subtle space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-govnavy-100">
          <div>
            <h3 className="text-sm font-bold text-govnavy-900">
              6-Point Pre-Submission Audit for: {scheme.name}
            </h3>
            <p className="text-xs text-govnavy-500">
              Verified against statutory guidelines of Ministry of Tribal Affairs (MoTA).
            </p>
          </div>
          <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-lg border border-emerald-200">
            0 Blocking Errors
          </span>
        </div>

        <div className="space-y-3">
          {readinessChecks.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all text-xs ${
                item.warning
                  ? 'bg-amber-50/50 border-amber-300'
                  : 'bg-emerald-50/30 border-emerald-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 p-1 rounded-full text-white flex-shrink-0 ${
                      item.warning ? 'bg-amber-600' : 'bg-emerald-600'
                    }`}
                  >
                    {item.warning ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <Check className="w-3 h-3 stroke-[3]" />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-govnavy-400 uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h4 className="font-bold text-govnavy-900 text-xs mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-govnavy-600 text-[11px] mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>

                <span
                  className={`self-start sm:self-auto text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                    item.warning
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guided Transition to Official Portal */}
        <div className="mt-6 pt-4 border-t border-govnavy-100 bg-govnavy-50/70 p-4 rounded-xl border border-govnavy-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-brand-700 flex-shrink-0" />
            <span className="text-govnavy-700">
              <strong>Next Action:</strong> Continue to official National Scholarship Portal (NSP) with exported verified dossier.
            </span>
          </div>

          <a
            href="https://scholarships.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-700 hover:bg-brand-800 text-white font-bold px-3.5 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1 text-xs self-start sm:self-auto"
          >
            <span>scholarships.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
