import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { mockWorkflowSteps } from '../data/mockData';
import { WorkflowStep } from '../types';

export const SolutionWorkflow: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('readiness');

  const activeStep = mockWorkflowSteps.find(s => s.id === activeStepId) || mockWorkflowSteps[4];

  return (
    <section id="solution" className="py-20 bg-white border-y border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Unified Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            From discovery to payment — one guided journey.
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            TribalScholar One brings the preparation and decision-support steps into one place while keeping the actual government application under the student's control.
          </p>
        </div>

        {/* Essential Principle Callout Banner */}
        <div className="mb-12 bg-gradient-to-r from-govnavy-900 via-brand-900 to-govnavy-900 text-white rounded-2xl p-6 shadow-card border border-govnavy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-saffron-500/20 text-saffron-300 flex items-center justify-center font-bold text-xl border border-saffron-400/30 flex-shrink-0">
              ⚖️
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-saffron-400">
                Core System Philosophy
              </div>
              <div className="text-lg sm:text-xl font-bold font-heading text-white mt-0.5">
                "We prepare and guide. The student submits through the official portal."
              </div>
            </div>
          </div>

          <div className="text-xs text-govnavy-300 bg-govnavy-800/80 px-4 py-2 rounded-lg border border-govnavy-700 text-center md:text-right flex-shrink-0">
            <span>Authoritative Government Execution</span>
            <span className="block font-semibold text-emerald-400 mt-0.5">Zero Third-Party Impersonation</span>
          </div>
        </div>

        {/* 9 Horizontal Workflow Stepper Tabs */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex items-center justify-between min-w-[860px] gap-2">
            {mockWorkflowSteps.map((step) => {
              const isActive = activeStep.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex-1 py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 group ${
                    isActive
                      ? 'bg-brand-700 text-white border-brand-800 shadow-md ring-2 ring-brand-400/30'
                      : 'bg-govnavy-50 hover:bg-white text-govnavy-700 border-govnavy-200 hover:border-govnavy-300'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-govnavy-200 text-govnavy-600'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-bold whitespace-nowrap block mt-0.5">
                    {step.title}
                  </span>
                  <span className={`text-[9px] truncate max-w-[90px] ${
                    isActive ? 'text-brand-100' : 'text-govnavy-400'
                  }`}>
                    {step.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Preview Card */}
        <div className="bg-govnavy-50/70 rounded-2xl border border-govnavy-200 p-6 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-brand-100 text-brand-800 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                  Step {activeStep.stepNumber} of 09
                </span>
                <span className="text-xs font-semibold text-govnavy-500 bg-white px-2 py-0.5 rounded border border-govnavy-200">
                  {activeStep.category} Stage
                </span>
              </div>

              <h3 className="text-2xl font-bold text-govnavy-900 font-heading">
                {activeStep.title}
              </h3>

              <p className="text-sm text-govnavy-700 leading-relaxed">
                {activeStep.details}
              </p>

              <div className="p-3.5 bg-white rounded-xl border border-govnavy-200 text-xs text-govnavy-600 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>{activeStep.highlightNotes}</span>
              </div>
            </div>

            {/* Right Product Preview Mockup */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-govnavy-200 p-5 shadow-card">
              <div className="pb-3 border-b border-govnavy-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-govnavy-900">{activeStep.previewTitle}</div>
                  <div className="text-[11px] text-govnavy-500">{activeStep.previewSubtitle}</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                  Live State
                </span>
              </div>

              {/* Stats pill list */}
              <div className="mt-4 space-y-2.5">
                {activeStep.previewStats.map((st, i) => (
                  <div key={i} className="flex items-center justify-between bg-govnavy-50 p-2.5 rounded-lg border border-govnavy-100 text-xs">
                    <span className="text-govnavy-500">{st.label}</span>
                    <span className={`font-bold ${
                      st.status === 'success' ? 'text-emerald-700' :
                      st.status === 'warning' ? 'text-saffron-700' : 'text-brand-700'
                    }`}>
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-govnavy-100 flex items-center justify-between text-xs text-govnavy-500">
                <span>Deterministic Verification</span>
                <span className="font-semibold text-brand-700">TribalScholar Core Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
