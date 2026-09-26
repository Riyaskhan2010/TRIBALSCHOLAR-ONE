import React from 'react';
import { 
  User, 
  Monitor, 
  Server, 
  Cpu, 
  Database, 
  Bot, 
  ArrowDown, 
  ShieldCheck, 
  GitBranch
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 bg-govnavy-50/70 border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>System Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight uppercase">
            System Architecture
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            A modular, privacy-preserving pipeline connecting the student client, deterministic rule evaluation, MongoDB persistence, and grounded AI guidance.
          </p>
        </div>

        {/* Architecture Visual Canvas */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-govnavy-200 p-6 sm:p-10 shadow-elevated">
          {/* Layer 1: Client Actor */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-brand-50 border-2 border-brand-300 rounded-xl p-4 text-center shadow-subtle">
              <div className="flex items-center justify-center gap-2 text-brand-900 font-bold text-sm">
                <User className="w-4 h-4 text-brand-700" />
                <span>Student / Beneficiary (Scheduled Tribe)</span>
              </div>
              <p className="text-[11px] text-brand-700 mt-1">
                Authenticates via Client PIN • Submits Master Details • Retains Document Sovereignty
              </p>
            </div>

            {/* Direction Arrow */}
            <div className="my-3 text-brand-600 flex flex-col items-center">
              <ArrowDown className="w-5 h-5 animate-bounce" />
              <span className="text-[10px] font-mono text-govnavy-400">HTTPS / TLS 1.3</span>
            </div>

            {/* Layer 2: Frontend Client */}
            <div className="w-full max-w-lg bg-govnavy-900 text-white rounded-xl p-4 shadow-card border border-govnavy-800 text-center">
              <div className="flex items-center justify-center gap-2 font-bold text-sm">
                <Monitor className="w-4 h-4 text-saffron-400" />
                <span>React + TypeScript + Tailwind Frontend Client</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2 text-[11px] text-govnavy-300">
                <span className="bg-govnavy-800 px-2 py-0.5 rounded border border-govnavy-700">Client Encryptor</span>
                <span className="bg-govnavy-800 px-2 py-0.5 rounded border border-govnavy-700">Pre-Flight Readiness UI</span>
                <span className="bg-govnavy-800 px-2 py-0.5 rounded border border-govnavy-700">JAGO Chat Terminal</span>
              </div>
            </div>

            {/* Direction Arrow */}
            <div className="my-3 text-brand-600 flex flex-col items-center">
              <ArrowDown className="w-5 h-5" />
              <span className="text-[10px] font-mono text-govnavy-400">RESTful JSON API / JWT Bearer</span>
            </div>

            {/* Layer 3: FastAPI Backend */}
            <div className="w-full max-w-xl bg-govnavy-50 border-2 border-govnavy-300 rounded-xl p-4 shadow-subtle text-center">
              <div className="flex items-center justify-center gap-2 text-govnavy-900 font-bold text-sm">
                <Server className="w-4 h-4 text-brand-700" />
                <span>FastAPI Python Backend Microservices</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                <div className="bg-white p-2 rounded-lg border border-govnavy-200">
                  <span className="font-bold text-govnavy-800 block text-[11px]">Profile Manager</span>
                  <span className="text-[10px] text-govnavy-500">Demographic baseline</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-govnavy-200">
                  <span className="font-bold text-govnavy-800 block text-[11px]">Document Vault</span>
                  <span className="text-[10px] text-govnavy-500">AES-256 Vault crypto</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-govnavy-200">
                  <span className="font-bold text-govnavy-800 block text-[11px]">Scheme Catalog</span>
                  <span className="text-[10px] text-govnavy-500">Official MoTA rules</span>
                </div>
              </div>
            </div>

            {/* Split Flow Arrows */}
            <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {/* Left Branch: Intelligence Core */}
              <div className="flex flex-col items-center">
                <div className="text-brand-600 flex flex-col items-center mb-2">
                  <ArrowDown className="w-5 h-5" />
                  <span className="text-[10px] font-mono text-govnavy-400">Analysis & Verification</span>
                </div>
                <div className="w-full bg-white border-2 border-purple-200 rounded-xl p-4 shadow-subtle text-left">
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-xs mb-2">
                    <Cpu className="w-4 h-4 text-purple-700" />
                    <span>OCR & Deterministic Rule Engine</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-govnavy-600">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                      <span>Certificate OCR & Table Parsing</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                      <span>Deterministic Clause Satisfaction Checks</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                      <span>Document Comparison & Mismatch Detection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Branch: JAGO AI Assistant */}
              <div className="flex flex-col items-center">
                <div className="text-saffron-600 flex flex-col items-center mb-2">
                  <ArrowDown className="w-5 h-5" />
                  <span className="text-[10px] font-mono text-govnavy-400">Grounded RAG Pipeline</span>
                </div>
                <div className="w-full bg-white border-2 border-amber-200 rounded-xl p-4 shadow-subtle text-left">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs mb-2">
                    <Bot className="w-4 h-4 text-amber-700" />
                    <span>JAGO Grounded AI Assistant</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-govnavy-600">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>MoTA Official Gazette Guideline Index</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>Strict Grounding (Zero Hallucinations)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      <span>Connected to Verified Scheme Rules</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direction Arrow */}
            <div className="my-2 text-govnavy-400 flex flex-col items-center">
              <ArrowDown className="w-5 h-5" />
              <span className="text-[10px] font-mono text-govnavy-400">Persistence Layer</span>
            </div>

            {/* Layer 5: MongoDB Persistence */}
            <div className="w-full max-w-xl bg-govnavy-900 text-white rounded-xl p-4 shadow-card border border-govnavy-800">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-govnavy-800">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>MongoDB • Database & Data Storage</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                  Document Store
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-govnavy-300">
                <div className="bg-govnavy-800/80 p-2 rounded border border-govnavy-700">
                  <span className="text-white font-semibold block">Student Profiles</span>
                  <span className="text-[10px] text-govnavy-400">Master Data</span>
                </div>
                <div className="bg-govnavy-800/80 p-2 rounded border border-govnavy-700">
                  <span className="text-white font-semibold block">Document Metadata</span>
                  <span className="text-[10px] text-govnavy-400">Encrypted Proofs</span>
                </div>
                <div className="bg-govnavy-800/80 p-2 rounded border border-govnavy-700">
                  <span className="text-white font-semibold block">Evidence & DBT</span>
                  <span className="text-[10px] text-govnavy-400">Audit Trails</span>
                </div>
              </div>
            </div>

            {/* Final Transition Out to Official Portals */}
            <div className="mt-4 pt-4 border-t border-govnavy-200 w-full text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pre-Flight Dossier Ready → Official Portal Submission (NSP / State Welfare)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
