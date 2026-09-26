import React, { useState } from 'react';
import { 
  KeyRound,
  User, 
  Award, 
  Lock, 
  FileSearch, 
  CheckSquare, 
  ClipboardList, 
  CreditCard, 
  Bot, 
  ShieldCheck
} from 'lucide-react';
import { LoginScreen } from './showcase/LoginScreen';
import { ProfileScreen } from './showcase/ProfileScreen';
import { VaultScreen } from './showcase/VaultScreen';
import { FinderScreen } from './showcase/FinderScreen';
import { EligibilityScreen } from './showcase/EligibilityScreen';
import { ReadinessScreen } from './showcase/ReadinessScreen';
import { ApplicationStatusScreen } from './showcase/ApplicationStatusScreen';
import { DbtPaymentScreen } from './showcase/DbtPaymentScreen';
import { JagoChatScreen } from './showcase/JagoChatScreen';

export type TabKey = 
  | 'login'
  | 'profile'
  | 'vault'
  | 'finder'
  | 'eligibility'
  | 'readiness'
  | 'status'
  | 'dbt'
  | 'jago';

interface ProductShowcaseProps {
  currentTab?: TabKey;
  onTabChange?: (tab: TabKey) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  currentTab,
  onTabChange 
}) => {
  const [internalTab, setInternalTab] = useState<TabKey>('profile');

  const activeTab = currentTab || internalTab;

  const handleSelectTab = (tab: TabKey) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    setInternalTab(tab);
  };

  const navItems = [
    { 
      id: 'login' as TabKey, 
      label: '1. Login', 
      icon: KeyRound, 
      desc: 'Secure PIN-derived authentication' 
    },
    { 
      id: 'profile' as TabKey, 
      label: '2. Student Master Profile', 
      icon: User, 
      desc: 'Central demographic & academic baseline' 
    },
    { 
      id: 'vault' as TabKey, 
      label: '3. Secure Document Vault', 
      icon: Lock, 
      desc: 'AES-256 encrypted certificates with OCR' 
    },
    { 
      id: 'finder' as TabKey, 
      label: '4. Scholarship Finder', 
      icon: Award, 
      desc: 'Deterministic matching against MoTA schemes' 
    },
    { 
      id: 'eligibility' as TabKey, 
      label: '5. Eligibility & Verification', 
      icon: FileSearch, 
      desc: 'Clause-by-clause condition evaluation & OCR audit' 
    },
    { 
      id: 'readiness' as TabKey, 
      label: '6. Application Readiness', 
      icon: CheckSquare, 
      badge: 'Core Focus',
      desc: 'Pre-flight diagnostic & attachment packaging' 
    },
    { 
      id: 'status' as TabKey, 
      label: '7. Application Status', 
      icon: ClipboardList, 
      desc: 'Evidence-backed multi-stage timeline' 
    },
    { 
      id: 'dbt' as TabKey, 
      label: '8. DBT Payment Tracking', 
      icon: CreditCard, 
      desc: 'PFMS milestone audit from Sanction to Credit' 
    },
    { 
      id: 'jago' as TabKey, 
      label: '9. JAGO AI Assistant', 
      icon: Bot, 
      badge: 'Grounded RAG',
      desc: 'Factual guidance referencing MoTA guidelines' 
    },
  ];

  const currentItem = navItems.find(item => item.id === activeTab) || navItems[1];

  return (
    <section id="showcase" className="py-20 bg-white border-y border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
            <span>Product Screen Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-govnavy-900 font-heading tracking-tight">
            See the platform in action.
          </h2>
          <p className="mt-4 text-base text-govnavy-600 leading-relaxed">
            Explore all 9 working modules of TribalScholar One. Each screen is built to guide Scheduled Tribe students through verified preparation, eligibility evaluation, and evidence tracking.
          </p>
        </div>

        {/* Current Active Screen Summary Pill */}
        <div className="mb-6 bg-govnavy-50 rounded-xl p-3.5 border border-govnavy-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-govnavy-900 font-heading">
              {currentItem.label}:
            </span>
            <span className="text-xs text-govnavy-600">
              {currentItem.desc}
            </span>
          </div>
          <span className="text-[11px] font-mono text-govnavy-500">
            Screen {navItems.findIndex(i => i.id === activeTab) + 1} of 9
          </span>
        </div>

        {/* Browser Mockup Wrapper */}
        <div className="rounded-2xl border border-govnavy-300 shadow-elevated bg-govnavy-900 overflow-hidden">
          {/* Top Browser Bar */}
          <div className="bg-govnavy-950 px-4 py-3 border-b border-govnavy-800 flex items-center justify-between">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-govnavy-400 ml-2 hidden sm:inline-block">
                TribalScholar One • Student Workspace (SIH 2026)
              </span>
            </div>

            {/* URL Address Bar */}
            <div className="bg-govnavy-900/90 text-govnavy-300 px-4 py-1 rounded-md border border-govnavy-800 text-xs font-mono flex items-center gap-2 w-full max-w-md mx-4 justify-center">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>tribalscholar.local/workspace/{activeTab}</span>
            </div>

            {/* Right Status */}
            <div className="flex items-center gap-2 text-xs text-govnavy-400">
              <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px] hidden md:inline-block">
                TLS 1.3 • AES-256
              </span>
            </div>
          </div>

          {/* Browser Workspace Layout (Sidebar + Main Content) */}
          <div className="flex flex-col lg:flex-row min-h-[640px] bg-govnavy-50">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 bg-govnavy-900 text-govnavy-200 border-r border-govnavy-800 p-3 lg:p-4 flex-shrink-0">
              <div className="mb-4 px-2 hidden lg:block">
                <div className="text-xs uppercase tracking-wider text-govnavy-400 font-bold">
                  9 Core Modules
                </div>
                <div className="text-[11px] text-govnavy-500">
                  TribalScholar Engine v2.6
                </div>
              </div>

              {/* Nav Items (scrollable on mobile) */}
              <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all text-left flex-shrink-0 lg:w-full ${
                        isActive
                          ? 'bg-brand-600 text-white font-semibold shadow-sm'
                          : 'text-govnavy-300 hover:bg-govnavy-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-govnavy-400'}`} />
                        <span className="whitespace-nowrap">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[9px] bg-saffron-500/20 text-saffron-300 px-1.5 py-0.2 rounded border border-saffron-500/30 hidden lg:inline-block">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Student quick pill */}
              <div className="mt-6 pt-4 border-t border-govnavy-800 hidden lg:block">
                <div className="bg-govnavy-800/80 p-3 rounded-lg border border-govnavy-700">
                  <div className="text-[10px] text-govnavy-400 uppercase tracking-wider">Demo Beneficiary</div>
                  <div className="font-bold text-xs text-white">Ramesh Hembram</div>
                  <div className="text-[10px] text-govnavy-400 truncate">ST Santal • NIT Rourkela</div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[720px]">
              {activeTab === 'login' && <LoginScreen onLoginSuccess={() => handleSelectTab('profile')} />}
              {activeTab === 'profile' && <ProfileScreen />}
              {activeTab === 'vault' && <VaultScreen />}
              {activeTab === 'finder' && <FinderScreen />}
              {activeTab === 'eligibility' && <EligibilityScreen />}
              {activeTab === 'readiness' && <ReadinessScreen />}
              {activeTab === 'status' && <ApplicationStatusScreen />}
              {activeTab === 'dbt' && <DbtPaymentScreen />}
              {activeTab === 'jago' && <JagoChatScreen />}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};
