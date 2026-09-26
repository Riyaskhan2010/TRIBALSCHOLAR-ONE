import React from 'react';
import { 
  GraduationCap, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { mockMentors } from '../data/mockData';

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-20 bg-govnavy-50/60 border-b border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100 border border-saffron-300 text-saffron-900 text-xs font-mono font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-saffron-700" />
            <span>GUIDANCE & MENTORSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-govnavy-950 font-heading tracking-tight uppercase">
            OUR MENTORS
          </h2>

          <p className="text-base sm:text-lg font-semibold text-brand-700">
            Guided by experience. Built by Team Kyro.
          </p>

          <p className="text-xs sm:text-sm text-govnavy-600 max-w-2xl mx-auto leading-relaxed">
            Distinguished institutional mentors providing strategic competition direction, technical architecture review, and user experience frameworks.
          </p>
        </div>

        {/* 2 Mentor Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {mockMentors.map((mentor, index) => {
            return (
              <div
                key={index}
                className="gov-card rounded-2xl border border-govnavy-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-brand-400 hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Photo & Mentor Badge */}
                  <div className="relative mb-5 flex flex-col items-center">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-govnavy-100 border-2 border-govnavy-200 shadow-sm flex items-center justify-center relative group-hover:border-brand-500 transition-colors">
                      <img
                        src={mentor.photo}
                        alt={mentor.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>

                    {/* Mentor Badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-saffron-500 text-govnavy-950 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm border border-saffron-400">
                      <Award className="w-3.5 h-3.5 text-govnavy-950" />
                      <span>MENTOR</span>
                    </div>
                  </div>

                  {/* Mentor Name & Designation */}
                  <div className="text-center space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-govnavy-950 font-heading group-hover:text-brand-700 transition-colors">
                      {mentor.name}
                    </h3>
                    <div className="text-xs font-bold text-brand-700 uppercase tracking-wide">
                      {mentor.designation}
                    </div>
                  </div>

                  {/* Mentorship Contribution */}
                  <div className="mt-5 pt-3.5 border-t border-govnavy-100 bg-govnavy-50/70 p-3.5 rounded-xl border border-govnavy-200/60">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-govnavy-500 mb-1 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
                      <span>Mentorship Contribution</span>
                    </div>
                    <p className="text-xs text-govnavy-700 leading-relaxed">
                      {mentor.contribution}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: LinkedIn Profile Link */}
                <div className="mt-6 pt-3.5 border-t border-govnavy-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-govnavy-400 font-medium">
                    SIH 2026 Mentor
                  </span>

                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3.5 py-1.5 rounded-lg transition-all group-hover:translate-x-0.5 shadow-sm"
                    aria-label={`${mentor.name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-brand-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
