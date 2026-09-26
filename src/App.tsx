import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectIntro } from './components/ProjectIntro';
import { MetricStrip } from './components/MetricStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionWorkflow } from './components/SolutionWorkflow';
import { FeatureSection } from './components/FeatureSection';
import { ProductJourney } from './components/ProductJourney';
import { ProductShowcase, TabKey } from './components/ProductShowcase';
import { SecuritySection } from './components/SecuritySection';
import { TechnologySection } from './components/TechnologySection';
import { InnovationSection } from './components/InnovationSection';
import { ImpactSection } from './components/ImpactSection';
import { TeamSection } from './components/TeamSection';
import { MentorsSection } from './components/MentorsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [showcaseTab, setShowcaseTab] = useState<TabKey>('profile');

  const handleJumpToTab = (tabId: string) => {
    setShowcaseTab(tabId as TabKey);
    const showcaseEl = document.getElementById('showcase');
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-govnavy-50 text-govnavy-900 font-sans selection:bg-brand-100 selection:text-brand-900 flex flex-col">
      {/* Navbar with Team Kyro branding */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section 1: Hero / Official Submission Section */}
        <Hero />

        {/* Section 2: Project Introduction */}
        <ProjectIntro />

        {/* Quick Value Metrics */}
        <MetricStrip />

        {/* Section 3: The Problem (6-Step Flow) */}
        <ProblemSection />

        {/* Section 4: Our Solution (Horizontal 9-step workflow) */}
        <SolutionWorkflow />

        {/* Section 5: Core Features (9 modules with Application Readiness prominent) */}
        <FeatureSection />

        {/* Section 6: Product Journey (How TribalScholar One Works) */}
        <ProductJourney />

        {/* Section 7: Product Screen Showcase (9 Screens in exact order) */}
        <ProductShowcase 
          currentTab={showcaseTab}
          onTabChange={(tab) => setShowcaseTab(tab)}
        />

        {/* Section 8: Security by Design */}
        <SecuritySection />

        {/* Section 9: Technology Stack */}
        <TechnologySection />

        {/* Section 10: Innovation (What Makes the Approach Different?) */}
        <InnovationSection />

        {/* Section 11: Expected Impact (4 clean outcome blocks) */}
        <ImpactSection />

        {/* Section 12: Meet Team Kyro (6 Members) */}
        <TeamSection />

        {/* Guidance & Mentorship Section (2 Mentors) */}
        <MentorsSection />

        {/* Section 13: Final CTA */}
        <CTASection />
      </main>

      {/* Section 14: Footer with SIH 2026 Disclaimers */}
      <Footer />

      {/* Interactive Evaluator Tour Modal */}
      <InteractiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onJumpToTab={handleJumpToTab}
      />
    </div>
  );
};

export default App;
