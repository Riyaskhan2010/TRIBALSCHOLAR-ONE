import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { TeamKyroLogo } from './TeamKyroLogo';

interface NavbarProps {
  onOpenDemoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'problem', 'solution', 'features', 'workflow', 'showcase', 'boundary', 'technology', 'team'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Problem', href: '#problem', id: 'problem' },
    { label: 'Solution', href: '#solution', id: 'solution' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Workflow', href: '#workflow', id: 'workflow' },
    { label: 'Showcase', href: '#showcase', id: 'showcase' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Team', href: '#team', id: 'team' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-govnavy-200 py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-govnavy-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand with Team Kyro Emblem */}
          <a 
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <TeamKyroLogo size="sm" showText={false} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight text-govnavy-900 font-heading">
                  TribalScholar <span className="text-brand-700 font-black">One</span>
                </span>
                <span className="bg-saffron-100 text-saffron-800 text-[10px] font-bold px-1.5 py-0.2 rounded border border-saffron-200">
                  SIH 2026
                </span>
              </div>
              <span className="text-[10px] font-semibold text-govnavy-500 uppercase tracking-wider block">
                TEAM KYRO • PS 26239
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 text-xs font-semibold text-govnavy-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? 'text-brand-700 bg-brand-50 font-bold'
                      : 'text-govnavy-600 hover:text-govnavy-900 hover:bg-govnavy-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenDemoModal && (
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-semibold text-govnavy-700 hover:text-brand-700 px-3 py-2 rounded-lg border border-govnavy-200 hover:border-brand-300 hover:bg-brand-50 transition-all flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
                <span>Guide</span>
              </button>
            )}
            <button
              onClick={() => scrollToSection('#showcase')}
              className="bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Explore Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('#showcase')}
              className="bg-brand-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg sm:hidden"
            >
              Explore
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-govnavy-600 hover:text-govnavy-900 hover:bg-govnavy-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-govnavy-200 px-4 pt-3 pb-5 shadow-elevated space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-govnavy-700 hover:bg-govnavy-100 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-govnavy-100 flex flex-col gap-2">
            <button
              onClick={() => {
                if (onOpenDemoModal) onOpenDemoModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center text-xs font-semibold py-2 rounded-lg border border-govnavy-200 text-govnavy-800 bg-govnavy-50"
            >
              Evaluator Quick Guide
            </button>
            <button
              onClick={() => scrollToSection('#showcase')}
              className="w-full text-center text-xs font-bold py-2.5 rounded-lg bg-brand-700 text-white shadow-sm"
            >
              Explore Product Showcase
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
