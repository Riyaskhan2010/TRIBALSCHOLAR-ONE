import React from 'react';

interface TeamKyroLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  light?: boolean;
}

export const TeamKyroLogo: React.FC<TeamKyroLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  light = false,
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-xs', sub: 'text-[9px]' },
    md: { img: 'w-10 h-10', text: 'text-sm', sub: 'text-[10px]' },
    lg: { img: 'w-14 h-14', text: 'text-base', sub: 'text-xs' },
    xl: { img: 'w-20 h-20', text: 'text-xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Team Kyro Logo Image */}
      <div
        className={`${currentSize.img} rounded-xl bg-white p-0.5 shadow-sm border ${
          light ? 'border-govnavy-700 ring-1 ring-white/20' : 'border-govnavy-200'
        } flex-shrink-0 flex items-center justify-center overflow-hidden transition-transform hover:scale-105`}
      >
        <img
          src="/team-kyro-logo.png"
          alt="Team Kyro Official Logo"
          className="w-full h-full object-contain rounded-lg"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="leading-tight">
          <div
            className={`font-black tracking-wider uppercase font-heading ${currentSize.text} ${
              light ? 'text-white' : 'text-govnavy-950'
            }`}
          >
            TEAM <span className="text-brand-600">KYRO</span>
          </div>
          <div
            className={`font-mono uppercase font-bold tracking-widest ${currentSize.sub} ${
              light ? 'text-govnavy-300' : 'text-govnavy-500'
            }`}
          >
            SIH 2026 • PS 26239
          </div>
        </div>
      )}
    </div>
  );
};
