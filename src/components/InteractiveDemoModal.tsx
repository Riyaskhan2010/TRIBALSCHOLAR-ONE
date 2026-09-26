import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Bot, 
  Award,
  Layers
} from 'lucide-react';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToTab: (tabId: string) => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  isOpen,
  onClose,
  onJumpToTab,
}) => {
  if (!isOpen) return null;

  const tourPoints = [
    {
      title: '1. Student Master Profile',
      desc: 'Centralized demographic, tribal sub-group, and academic baseline eliminating repetitive data entry.',
      tab: 'profile',
      tag: 'Step 01',
    },
    {
      title: '2. AES-256 Document Vault',
      desc: 'Client-side encrypted certificates with automated OCR parsing, validity alerts & PIN simulation.',
      tab: 'vault',
      tag: 'Step 02',
    },
    {
      title: '3. Explainable Eligibility Diagnostic',
      desc: 'Deterministic rule evaluation auditing 6+ MoTA criteria with clause-by-clause transparency.',
      tab: 'eligibility',
      tag: 'Step 04',
    },
    {
      title: '4. JAGO AI Grounded Assistant',
      desc: 'Zero-hallucination assistant referencing official Ministry of Tribal Affairs gazette manuals.',
      tab: 'jago',
      tag: 'Step 08',
    },
    {
      title: '5. DBT Payment Milestones',
      desc: 'Evidence-backed milestone tracker from MoTA Sanction Order to direct bank credit.',
      tab: 'dbt',
      tag: 'Step 09',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-govnavy-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl border border-govnavy-200 shadow-modal max-w-xl w-full p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-govnavy-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-50 text-brand-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-govnavy-900 font-heading">
                Interactive Judge & Evaluator Guide
              </h3>
              <span className="text-[11px] text-govnavy-500">
                Explore the key innovations of TribalScholar One
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-govnavy-400 hover:text-govnavy-700 hover:bg-govnavy-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guided Cards */}
        <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
          {tourPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-govnavy-200 hover:border-brand-400 hover:bg-brand-50/30 transition-all flex items-start justify-between gap-3 group cursor-pointer"
              onClick={() => {
                onJumpToTab(point.tab);
                onClose();
              }}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-govnavy-100 text-govnavy-700 px-1.5 py-0.2 rounded">
                    {point.tag}
                  </span>
                  <h4 className="text-xs font-bold text-govnavy-900 group-hover:text-brand-700 transition-colors">
                    {point.title}
                  </h4>
                </div>
                <p className="text-[11px] text-govnavy-600 leading-snug">
                  {point.desc}
                </p>
              </div>

              <ArrowRight className="w-4 h-4 text-govnavy-400 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>

        {/* Footer info & CTA */}
        <div className="pt-3 border-t border-govnavy-100 flex items-center justify-between text-xs">
          <span className="text-govnavy-500 text-[11px]">
            Designed for SIH 2024–25 Showcase
          </span>
          <button
            onClick={() => {
              onJumpToTab('dashboard');
              onClose();
            }}
            className="bg-brand-700 hover:bg-brand-800 text-white font-bold px-4 py-2 rounded-lg transition-colors text-xs flex items-center gap-1.5"
          >
            <span>Open Showcase</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
