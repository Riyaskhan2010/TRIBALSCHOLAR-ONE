import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  FileSearch, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { mockSchemes, mockVerificationChecks } from '../../data/mockData';

export const EligibilityScreen: React.FC = () => {
  const topScheme = mockSchemes[0];

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
            Deterministic Rule Engine Diagnostic
          </span>
          <h2 className="text-lg font-bold text-govnavy-900 mt-1">
            {topScheme.name}
          </h2>
          <p className="text-xs text-govnavy-500 mt-0.5">
            Evaluated against official Ministry of Tribal Affairs (MoTA) scheme guidelines 2024–25.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-right">
            <span className="text-xs text-emerald-800 font-medium block">Rule Evaluation</span>
            <span className="text-lg font-bold text-emerald-700">5 / 6 Satisfied</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-right">
            <span className="text-xs text-amber-800 font-medium block">Attention Item</span>
            <span className="text-lg font-bold text-amber-700">1 Warning</span>
          </div>
        </div>
      </div>

      {/* Conditions Breakdown */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle">
        <h3 className="text-sm font-bold text-govnavy-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-700" />
          <span>Condition-by-Condition Audit Checklist</span>
        </h3>

        <div className="space-y-3">
          {topScheme.conditions.map((cond, index) => (
            <div 
              key={index}
              className={`p-3.5 rounded-lg border text-xs transition-all ${
                cond.satisfied 
                  ? 'bg-emerald-50/40 border-emerald-200' 
                  : 'bg-amber-50/60 border-amber-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <div className={`mt-0.5 p-0.5 rounded-full ${cond.satisfied ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'}`}>
                    {cond.satisfied ? <Check className="w-3 h-3 stroke-[3]" /> : <AlertTriangle className="w-3 h-3" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-govnavy-900 text-xs">
                      {cond.title}
                    </h4>
                    <p className="text-govnavy-600 mt-1 text-[11px] leading-relaxed">
                      {cond.reason}
                    </p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  cond.satisfied ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-200 text-amber-900'
                }`}>
                  {cond.satisfied ? 'Satisfied' : 'Action Needed'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Brain OCR Cross-Check Preview */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle">
        <div className="flex items-center justify-between pb-3 border-b border-govnavy-100 mb-4">
          <div className="flex items-center gap-2">
            <FileSearch className="w-4 h-4 text-brand-700" />
            <div>
              <h3 className="text-sm font-bold text-govnavy-900">Verification Brain: OCR Cross-Comparison</h3>
              <p className="text-[11px] text-govnavy-500">Dual-engine verification against uploaded government identity artifacts.</p>
            </div>
          </div>
          <span className="text-[11px] bg-brand-50 text-brand-700 font-semibold px-2 py-1 rounded border border-brand-200">
            Fuzzy Matching 98.8%
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-govnavy-50 text-govnavy-600 text-[11px] uppercase tracking-wider">
                <th className="p-2.5 font-semibold rounded-l">Verified Field</th>
                <th className="p-2.5 font-semibold">Student Profile Value</th>
                <th className="p-2.5 font-semibold">Extracted OCR Value</th>
                <th className="p-2.5 font-semibold">Confidence</th>
                <th className="p-2.5 font-semibold rounded-r">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-govnavy-100">
              {mockVerificationChecks.map((check) => (
                <tr key={check.id} className="hover:bg-govnavy-50/50">
                  <td className="p-2.5 font-semibold text-govnavy-900">{check.field}</td>
                  <td className="p-2.5 text-govnavy-700 font-mono-code text-[11px]">{check.profileValue}</td>
                  <td className="p-2.5 text-govnavy-600 font-mono-code text-[11px]">{check.extractedOcrValue}</td>
                  <td className="p-2.5 font-semibold text-brand-700">{check.similarity}%</td>
                  <td className="p-2.5">
                    {check.matchStatus === 'Matched' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Matched
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <AlertTriangle className="w-3 h-3" /> Advisory
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
