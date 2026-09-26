import React from 'react';
import { 
  Linkedin, 
  ExternalLink, 
  Crown, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TeamKyroLogo } from './TeamKyroLogo';
import { mockTeamMembers } from '../data/mockData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white border-y border-govnavy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Official Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-mono font-bold uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></span>
            <span>SMART INDIA HACKATHON 2026 • TEAM KYRO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-govnavy-950 font-heading tracking-tight uppercase">
            MEET TEAM KYRO
          </h2>

          <p className="text-base sm:text-lg font-semibold text-brand-700">
            Six minds. One solution. One mission.
          </p>

          <p className="text-xs sm:text-sm text-govnavy-600 max-w-2xl mx-auto leading-relaxed">
            The multi-disciplinary engineering and research team behind TribalScholar One — built for Scheduled Tribe student empowerment and verified scholarship access.
          </p>
        </div>

        {/* 6-Member Grid: 3 cards per row on Desktop (3x2), 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mockTeamMembers.map((member, index) => {
            return (
              <div
                key={index}
                className={`gov-card rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-elevated ${
                  member.isLeader
                    ? 'border-brand-400 bg-gradient-to-b from-brand-50/30 via-white to-white ring-1 ring-brand-300/50 hover:border-brand-600'
                    : 'border-govnavy-200 bg-white hover:border-brand-300'
                }`}
              >
                <div>
                  {/* Photo Area */}
                  <div className="relative mb-5 flex flex-col items-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-govnavy-100 border-2 border-govnavy-200 shadow-sm flex items-center justify-center relative group-hover:border-brand-500 transition-colors">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-govnavy-900 to-brand-950 text-white flex flex-col items-center justify-center font-bold text-2xl font-heading shadow-inner">
                          <span>{member.initials}</span>
                          <span className="text-[10px] font-mono text-saffron-400 mt-1 uppercase tracking-wider">
                            Team Kyro
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Team Lead Badge */}
                    {member.isLeader && (
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-brand-700 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        <Crown className="w-3.5 h-3.5 text-saffron-300" />
                        <span>TEAM LEAD</span>
                      </div>
                    )}
                  </div>

                  {/* Member Name & Role */}
                  <div className="text-center space-y-1">
                    <h3 className="text-base sm:text-lg font-extrabold text-govnavy-950 font-heading group-hover:text-brand-700 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-brand-700">
                      {member.role}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-4 pt-3 border-t border-govnavy-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-govnavy-400 mb-2">
                      Key Responsibilities
                    </div>
                    <ul className="space-y-1.5 text-xs text-govnavy-600">
                      {member.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0 mt-1.5"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom: LinkedIn Profile Link */}
                <div className="mt-6 pt-3.5 border-t border-govnavy-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-govnavy-400 font-medium">
                    SIH 2026 Contributor
                  </span>

                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-lg transition-all group-hover:translate-x-0.5"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-brand-600" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-govnavy-400 bg-govnavy-50 border border-govnavy-200 px-2.5 py-1 rounded-lg">
                      <Linkedin className="w-3.5 h-3.5 text-govnavy-400" />
                      <span className="text-[10px]">Verified Profile</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
