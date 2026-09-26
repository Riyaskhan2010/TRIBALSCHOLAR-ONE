import React from 'react';
import { 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  CreditCard, 
  Lock,
  FileCheck
} from 'lucide-react';
import { mockStudent } from '../../data/mockData';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-govnavy-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            RH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-govnavy-900">{mockStudent.name}</h2>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Master Record Verified
              </span>
            </div>
            <p className="text-xs text-govnavy-500">
              Student ID: {mockStudent.studentId} • Domicile: {mockStudent.domicileState}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-govnavy-500">Security State:</span>
          <span className="inline-flex items-center gap-1 text-xs bg-govnavy-100 text-govnavy-800 px-2.5 py-1 rounded-md font-medium border border-govnavy-200">
            <Lock className="w-3 h-3 text-brand-600" /> AES-256 Vault Encrypted
          </span>
        </div>
      </div>

      {/* Grid of Profile Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Personal & Tribal Community Details */}
        <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-govnavy-100">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-800">
                1. Personal & Tribal Identity
              </h3>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">
              DigiLocker Matched
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-govnavy-400 block text-[11px]">Constitutional Category</span>
              <span className="font-semibold text-govnavy-900">{mockStudent.category}</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Sub-Tribe / Community</span>
              <span className="font-semibold text-govnavy-900">{mockStudent.subTribe}</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Domicile District & State</span>
              <span className="font-medium text-govnavy-800">{mockStudent.domicileState}</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Aadhaar Verification</span>
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Masked UID Verified (XXXX-XXXX-7412)
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Academic & Institutional Record */}
        <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-govnavy-100">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-800">
                2. Academic & Institution
              </h3>
            </div>
            <span className="text-[10px] bg-brand-50 text-brand-700 font-semibold px-2 py-0.5 rounded">
              AISHE Notified
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-govnavy-400 block text-[11px]">Institute Name</span>
              <span className="font-semibold text-govnavy-900">{mockStudent.institution}</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Program & Discipline</span>
              <span className="font-medium text-govnavy-800">{mockStudent.course}</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Academic Standing / CGPA</span>
              <span className="font-semibold text-brand-700">{mockStudent.cgpa} (Regular Full-Time)</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Admission Channel</span>
              <span className="font-medium text-govnavy-800">Central JoSAA Quota Allotment</span>
            </div>
          </div>
        </div>

        {/* Card 3: Economic & Family Baseline */}
        <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-govnavy-100">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-800">
                3. Family & Income Ceiling
              </h3>
            </div>
            <span className="text-[10px] bg-saffron-100 text-saffron-800 font-semibold px-2 py-0.5 rounded">
              Valid FY 24-25
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-govnavy-400 block text-[11px]">Father / Guardian Name</span>
              <span className="font-semibold text-govnavy-900">Sunil Hembram</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Family Annual Income</span>
              <span className="font-bold text-emerald-700 text-sm">₹2,10,000 / year</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Post-Matric Ceiling Check</span>
              <span className="text-emerald-700 font-medium">✓ Below ₹2.50 Lakh threshold</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Top Class Scheme Ceiling Check</span>
              <span className="text-emerald-700 font-medium">✓ Well below ₹6.00 Lakh threshold</span>
            </div>
          </div>
        </div>

        {/* Card 4: Bank & DBT Direct Benefit Routing */}
        <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-govnavy-100">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-brand-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-800">
                4. Bank DBT / PFMS Seeding
              </h3>
            </div>
            <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">
              NPCI Active
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-govnavy-400 block text-[11px]">Designated Bank</span>
              <span className="font-semibold text-govnavy-900">State Bank of India</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Account & IFSC</span>
              <span className="font-mono-code font-medium text-govnavy-800">XXXXXX6641 • SBIN0002112</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">NPCI Aadhaar Bridge</span>
              <span className="text-emerald-700 font-semibold">Active & Mapped (DBT Eligible)</span>
            </div>
            <div>
              <span className="text-govnavy-400 block text-[11px]">Minor Account Cap / Freeze</span>
              <span className="text-emerald-700 font-medium">None (Regular Savings Account)</span>
            </div>
          </div>
        </div>

        {/* Card 5: Pre-verified Eligibility Summary */}
        <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle lg:col-span-2">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-govnavy-100">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-brand-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-800">
                5. Configured Scheme Eligibility Map
              </h3>
            </div>
            <span className="text-xs text-govnavy-500">Auto-Evaluated</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-govnavy-50 rounded-lg border border-govnavy-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-govnavy-900">MoTA Top Class ST Scheme</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  Eligible (96%)
                </span>
              </div>
              <p className="text-govnavy-600 text-[11px] mt-1">
                Premier Institute quota + family income under ₹6L verified.
              </p>
            </div>

            <div className="p-3 bg-govnavy-50 rounded-lg border border-govnavy-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-govnavy-900">Post-Matric ST Scholarship</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  Eligible (94%)
                </span>
              </div>
              <p className="text-govnavy-600 text-[11px] mt-1">
                State Domicile + Tribe certificate + Income &lt; ₹2.5L verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
