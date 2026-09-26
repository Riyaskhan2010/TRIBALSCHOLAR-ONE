import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  ArrowUpRight, 
  FileText,
  BadgeCheck
} from 'lucide-react';
import { mockApplicationStages } from '../../data/mockData';

export const ApplicationStatusScreen: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Tracker Header */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
              Evidence-Backed Application Tracker
            </span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
              Sanction Approved
            </span>
          </div>
          <h2 className="text-base font-bold text-govnavy-900 mt-1">
            Top Class Education Scheme (NSP Ref: OR2024250098412)
          </h2>
          <p className="text-xs text-govnavy-500 mt-0.5">
            Application managed directly by student on official portal. Progress logged via uploaded receipts and public tracking tokens.
          </p>
        </div>

        <div className="bg-govnavy-50 p-3 rounded-lg border border-govnavy-200 text-xs">
          <span className="text-govnavy-500 block text-[11px]">Next Milestone</span>
          <span className="font-bold text-forest-700 flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> DBT Disbursement Credited
          </span>
        </div>
      </div>

      {/* Vertical Status Timeline with Evidence Tags */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle">
        <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-500 mb-5">
          Lifecycle Progression & Verifiable Evidence Slips
        </h3>

        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-200">
          {mockApplicationStages.map((stage, index) => (
            <div key={index} className="relative group">
              {/* Circle Marker */}
              <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-brand-700 text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-white">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>

              <div className="bg-govnavy-50/60 hover:bg-govnavy-50 p-3.5 rounded-lg border border-govnavy-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                      {stage.stage}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-govnavy-900">
                      {stage.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-govnavy-500 font-mono">
                    {stage.date}
                  </span>
                </div>

                <p className="text-xs text-govnavy-600 mt-2 leading-relaxed">
                  {stage.note}
                </p>

                <div className="mt-2.5 pt-2 border-t border-govnavy-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-govnavy-500 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-brand-600" />
                    <span>Evidence Source: <strong className="text-govnavy-700">{stage.source}</strong></span>
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Step
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
