import React from 'react';
import { 
  IndianRupee, 
  CheckCircle2, 
  CreditCard, 
  Building, 
  ArrowRight, 
  Info,
  ShieldCheck,
  Receipt
} from 'lucide-react';

export const DbtPaymentScreen: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Financial Summary Card */}
      <div className="bg-gradient-to-br from-govnavy-900 to-brand-950 text-white rounded-xl p-5 shadow-elevated border border-govnavy-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 100% Disbursed
              </span>
              <span className="text-xs text-govnavy-300 font-mono">
                Sanction No: MoTA/EDU/2024/774
              </span>
            </div>
            <div className="mt-2">
              <span className="text-xs text-govnavy-300 block">Total Sanctioned Direct Benefit</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1 mt-0.5">
                <span>₹1,85,000</span>
                <span className="text-xs text-emerald-400 font-medium ml-2">Direct DBT to Bank Account</span>
              </div>
            </div>
          </div>

          <div className="bg-govnavy-800/80 p-3 rounded-lg border border-govnavy-700 text-xs text-govnavy-200 space-y-1">
            <div className="flex items-center gap-1 text-govnavy-300">
              <CreditCard className="w-3.5 h-3.5 text-brand-400" />
              <span>Receiving Account: <strong>SBI (A/C ..6641)</strong></span>
            </div>
            <div className="text-[11px] text-govnavy-400 font-mono">
              PFMS Ref: SBIN225091823901
            </div>
          </div>
        </div>
      </div>

      {/* 4 DBT Milestones */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle">
        <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-500 mb-4">
          Direct Benefit Transfer (DBT) Milestone Audit
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Milestone 1: Sanctioned */}
          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Milestone 1</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-xs font-bold text-govnavy-900">Sanctioned</h4>
            <p className="text-[11px] text-govnavy-600 leading-snug">
              Ministry of Tribal Affairs sanction order issued for ₹1,85,000.
            </p>
            <div className="text-[10px] text-govnavy-400 pt-1 border-t border-emerald-100 font-mono">
              18 Sep 2025
            </div>
          </div>

          {/* Milestone 2: FTO Generated */}
          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Milestone 2</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-xs font-bold text-govnavy-900">FTO Generated</h4>
            <p className="text-[11px] text-govnavy-600 leading-snug">
              Fund Transfer Order FTO-MOTA-2025-0982 generated on PFMS portal.
            </p>
            <div className="text-[10px] text-govnavy-400 pt-1 border-t border-emerald-100 font-mono">
              22 Sep 2025
            </div>
          </div>

          {/* Milestone 3: Payment Initiated */}
          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Milestone 3</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="text-xs font-bold text-govnavy-900">Payment Initiated</h4>
            <p className="text-[11px] text-govnavy-600 leading-snug">
              Batched on RBI e-Kuber Aadhaar Bridge Payment System (ABPS).
            </p>
            <div className="text-[10px] text-govnavy-400 pt-1 border-t border-emerald-100 font-mono">
              24 Sep 2025
            </div>
          </div>

          {/* Milestone 4: Credited */}
          <div className="p-3.5 rounded-xl border border-emerald-400 bg-emerald-100/50 space-y-2 ring-1 ring-emerald-500/20">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider">Milestone 4</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
            <h4 className="text-xs font-bold text-govnavy-900">Credited (Zero Delay)</h4>
            <p className="text-[11px] text-emerald-900 font-medium leading-snug">
              ₹1,85,000 received in student account with zero intermediate cuts.
            </p>
            <div className="text-[10px] text-emerald-800 pt-1 border-t border-emerald-200 font-mono">
              25 Sep 2025 (Completed)
            </div>
          </div>
        </div>

        {/* Evidence Verification Disclaimer */}
        <div className="mt-4 p-3 bg-govnavy-50 rounded-lg border border-govnavy-200 flex items-start gap-2 text-xs text-govnavy-600">
          <Info className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Data Source Integrity:</strong> Displayed status is computed from student-uploaded official acknowledgement tokens, bank transaction alerts, and authorized PFMS public ledger records.
          </span>
        </div>
      </div>
    </div>
  );
};
