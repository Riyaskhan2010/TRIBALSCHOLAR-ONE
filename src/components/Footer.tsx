import React from 'react';
import { 
  ShieldCheck, 
  Info,
  ArrowUp
} from 'lucide-react';
import { TeamKyroLogo } from './TeamKyroLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Technology', href: '#technology' },
    { label: 'Team', href: '#team' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-govnavy-950 text-white border-t border-govnavy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-govnavy-800">
          <div className="max-w-lg space-y-3">
            <TeamKyroLogo size="lg" light />

            <div>
              <h3 className="text-base font-bold text-white font-heading">
                TribalScholar One
              </h3>
              <p className="text-xs text-govnavy-300 font-medium">
                AI-Enabled Scholarship and Fellowship Management System for Scheduled Tribes
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="bg-govnavy-900 text-govnavy-200 px-2.5 py-0.5 rounded border border-govnavy-800 font-mono">
                Smart India Hackathon 2026
              </span>
              <span className="bg-saffron-500/20 text-saffron-300 px-2.5 py-0.5 rounded border border-saffron-500/30 font-mono font-bold">
                PS 26239
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-govnavy-300 font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="hover:text-white hover:underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="bg-govnavy-900 hover:bg-govnavy-800 text-govnavy-300 hover:text-white p-2.5 rounded-lg border border-govnavy-800 transition-colors flex items-center gap-2 text-xs font-semibold"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Official Statutory Disclaimer */}
        <div className="pt-8 pb-6 text-xs text-govnavy-400 leading-relaxed border-b border-govnavy-900">
          <div className="flex items-start gap-2.5 bg-govnavy-900/70 p-4 rounded-xl border border-govnavy-800">
            <Info className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-[11px]">
              <p className="font-bold text-govnavy-200">
                Official Submission & Prototype Disclaimer:
              </p>
              <p>
                Prototype / Demonstration System. Government portal submissions are performed by students through official portals.
              </p>
              <p>
                Eligibility and status information shown in the prototype must not be treated as an official government determination.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-govnavy-400">
          <div className="font-medium">
            Presented by <strong className="text-white">TEAM KYRO</strong> • Smart India Hackathon 2026
          </div>
          <div className="font-mono text-[11px] text-govnavy-400">
            PS ID: 26239 • Category: Software • Theme: Smart Education
          </div>
        </div>
      </div>
    </footer>
  );
};
