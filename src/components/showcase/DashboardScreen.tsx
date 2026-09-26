import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp,
  Clock,
  ExternalLink,
  Lock
} from 'lucide-react';
import { mockStudent, mockDocuments, mockSchemes } from '../../data/mockData';

interface DashboardScreenProps {
  onNavigateTab: (tabId: string) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-govnavy-900 via-brand-900 to-govnavy-900 text-white rounded-xl p-5 shadow-sm border border-govnavy-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-brand-500/20 text-brand-200 text-xs px-2.5 py-0.5 rounded-full font-medium border border-brand-400/30">
                Academic Year 2024–25
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-400/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Profile Verified
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-heading">
              Welcome back, {mockStudent.name}
            </h2>
            <p className="text-govnavy-300 text-xs md:text-sm mt-1">
              {mockStudent.course} • {mockStudent.institution}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-govnavy-800/80 rounded-lg p-3 border border-govnavy-700 text-right">
              <div className="text-xs text-govnavy-300">Readiness Score</div>
              <div className="text-xl font-bold text-saffron-400">{mockStudent.profileCompletion}% Ready</div>
            </div>
            <button 
              onClick={() => onNavigateTab('finder')}
              className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>View Matches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div 
          onClick={() => onNavigateTab('profile')}
          className="bg-white p-4 rounded-xl border border-govnavy-200 hover:border-brand-400 transition-all cursor-pointer shadow-subtle group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-govnavy-500">Student Profile</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-lg font-bold text-govnavy-900 group-hover:text-brand-700 transition-colors">
            Verified
          </div>
          <div className="text-xs text-govnavy-500 mt-1">
            ST (Santal) • Domicile: Odisha
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('finder')}
          className="bg-white p-4 rounded-xl border border-govnavy-200 hover:border-brand-400 transition-all cursor-pointer shadow-subtle group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-govnavy-500">Scholarship Matches</span>
            <Award className="w-4 h-4 text-brand-600" />
          </div>
          <div className="text-lg font-bold text-govnavy-900 group-hover:text-brand-700 transition-colors">
            3 Schemes
          </div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            96% Top Match (Top Class ST)
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('vault')}
          className="bg-white p-4 rounded-xl border border-govnavy-200 hover:border-brand-400 transition-all cursor-pointer shadow-subtle group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-govnavy-500">Document Vault</span>
            <Lock className="w-4 h-4 text-saffron-600" />
          </div>
          <div className="text-lg font-bold text-govnavy-900 group-hover:text-brand-700 transition-colors">
            4 / 5 Ready
          </div>
          <div className="text-xs text-saffron-600 font-medium mt-1">
            1 Expiring Soon (Income Cert)
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('eligibility')}
          className="bg-white p-4 rounded-xl border border-govnavy-200 hover:border-brand-400 transition-all cursor-pointer shadow-subtle group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-govnavy-500">Eligibility Check</span>
            <TrendingUp className="w-4 h-4 text-forest-600" />
          </div>
          <div className="text-lg font-bold text-govnavy-900 group-hover:text-brand-700 transition-colors">
            5 / 6 Cleared
          </div>
          <div className="text-xs text-govnavy-500 mt-1">
            Deterministic Rule Validated
          </div>
        </div>
      </div>

      {/* Main Content Split: Top Match & Action Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommended Scheme Card */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-govnavy-100">
            <div>
              <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                Primary Matched Scheme
              </span>
              <h3 className="text-base font-bold text-govnavy-900 mt-0.5">
                {mockSchemes[0].name}
              </h3>
            </div>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-full">
              96% Match
            </span>
          </div>

          <p className="text-xs text-govnavy-600 mt-3 leading-relaxed">
            {mockSchemes[0].financialBenefit}
          </p>

          <div className="mt-4 bg-govnavy-50 rounded-lg p-3 border border-govnavy-100 space-y-2">
            <div className="flex items-center justify-between text-xs text-govnavy-600 font-medium">
              <span>Eligibility Rule Status</span>
              <span className="text-emerald-700 font-semibold">5 of 6 Satisfied</span>
            </div>
            <div className="w-full bg-govnavy-200 rounded-full h-2 overflow-hidden">
              <div className="bg-emerald-500 h-2 rounded-full w-[83%]"></div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-saffron-700 pt-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Income certificate valid till March 2025. Pre-application checklist ready.</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-govnavy-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-govnavy-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Official Deadline: <strong>{mockSchemes[0].deadline}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onNavigateTab('eligibility')}
                className="text-xs font-semibold text-brand-700 hover:text-brand-800 px-3 py-1.5 rounded-lg border border-brand-200 hover:bg-brand-50 transition-colors"
              >
                Inspect Rules
              </button>
              <button 
                onClick={() => onNavigateTab('status')}
                className="text-xs font-semibold bg-govnavy-900 hover:bg-govnavy-800 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Track Application</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Center / Pre-flight Warnings */}
        <div className="bg-govnavy-50/70 rounded-xl border border-govnavy-200 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-govnavy-900">
                Pre-Flight Checklist
              </h3>
              <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded font-medium">
                Step 5 of 9
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs bg-white p-2.5 rounded-lg border border-govnavy-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-govnavy-800">ST Caste Certificate</div>
                  <div className="text-govnavy-500">Baripada Tahasildar • Verified</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs bg-white p-2.5 rounded-lg border border-govnavy-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-govnavy-800">NPCI Aadhaar DBT Seeding</div>
                  <div className="text-govnavy-500">SBI A/C Linked & Verified</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs bg-saffron-50/80 p-2.5 rounded-lg border border-saffron-200">
                <AlertCircle className="w-4 h-4 text-saffron-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-saffron-900">Income Certificate Expiry</div>
                  <div className="text-saffron-700">Expires 31-Mar-2025. Renewal alert active.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-govnavy-200 text-xs text-govnavy-500 flex items-center justify-between">
            <span>Official Portal Ready</span>
            <span className="font-semibold text-brand-700">scholarships.gov.in</span>
          </div>
        </div>
      </div>
    </div>
  );
};
