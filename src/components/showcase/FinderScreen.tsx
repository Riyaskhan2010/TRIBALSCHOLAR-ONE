import React, { useState } from 'react';
import { 
  Search, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Filter,
  FileCheck2,
  Calendar,
  IndianRupee,
  Layers
} from 'lucide-react';
import { mockSchemes } from '../../data/mockData';
import { ScholarshipScheme } from '../../types';

interface FinderScreenProps {
  onSelectScheme?: (schemeId: string) => void;
}

export const FinderScreen: React.FC<FinderScreenProps> = () => {
  const [filterType, setFilterType] = useState<'ALL' | 'ELIGIBLE' | 'FELLOWSHIP'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSchemes = mockSchemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scheme.ministry.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterType === 'ELIGIBLE') {
      return matchesSearch && (scheme.status === 'Likely Eligible' || scheme.status === 'Verified');
    }
    if (filterType === 'FELLOWSHIP') {
      return matchesSearch && scheme.tags.includes('Research Fellowship');
    }
    return matchesSearch;
  });

  const getStatusChip = (status: ScholarshipScheme['status']) => {
    switch (status) {
      case 'Likely Eligible':
        return (
          <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Likely Eligible (High Fit)
          </span>
        );
      case 'Verified':
        return (
          <span className="bg-blue-100 text-blue-800 border border-blue-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Verified Match
          </span>
        );
      case 'Needs Information':
        return (
          <span className="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> Needs Information
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-govnavy-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search configured ST schemes, fellowships, ministries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-govnavy-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-govnavy-50/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-govnavy-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          <button
            onClick={() => setFilterType('ALL')}
            className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
              filterType === 'ALL'
                ? 'bg-govnavy-900 text-white'
                : 'bg-govnavy-100 text-govnavy-700 hover:bg-govnavy-200'
            }`}
          >
            All Schemes
          </button>
          <button
            onClick={() => setFilterType('ELIGIBLE')}
            className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
              filterType === 'ELIGIBLE'
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            Likely Eligible ({mockSchemes.filter(s => s.status !== 'Needs Information').length})
          </button>
        </div>
      </div>

      {/* Scheme Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredSchemes.map((scheme) => (
          <div 
            key={scheme.id}
            className="bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle hover:border-brand-400 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                    {scheme.ministry}
                  </span>
                  <span className="text-[11px] text-govnavy-500 bg-govnavy-100 px-2 py-0.5 rounded font-mono">
                    {scheme.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-govnavy-900 leading-snug">
                  {scheme.name}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-forest-700">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>Benefit: {scheme.financialBenefit}</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                  {getStatusChip(scheme.status)}
                  <span className="text-xs font-mono font-bold bg-govnavy-900 text-white px-2 py-0.5 rounded">
                    {scheme.matchScore}% Fit
                  </span>
                </div>
                <span className="text-[11px] text-govnavy-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Portal Deadline: {scheme.deadline}
                </span>
              </div>
            </div>

            {/* Rule Satisfaction Strip */}
            <div className="mt-4 pt-3 border-t border-govnavy-100 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-govnavy-50/70 p-3 rounded-lg border border-govnavy-200">
                <div className="font-semibold text-govnavy-800 mb-1.5 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-brand-700" />
                  <span>Required Documents Checklist</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {scheme.requiredDocs.map((doc, i) => (
                    <span key={i} className="bg-white text-govnavy-700 border border-govnavy-200 px-2 py-0.5 rounded text-[10px]">
                      ✓ {doc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-govnavy-50/70 p-3 rounded-lg border border-govnavy-200">
                <div className="font-semibold text-govnavy-800 mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-700" />
                  <span>Key Eligibility Conditions</span>
                </div>
                <ul className="space-y-1 text-[11px] text-govnavy-600">
                  {scheme.conditions.slice(0, 2).map((cond, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      {cond.satisfied ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-amber-600 flex-shrink-0" />
                      )}
                      <span className="truncate">{cond.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom action: Official portal link & Guided checklist */}
            <div className="mt-4 pt-3 border-t border-govnavy-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[11px] text-govnavy-500">
                Authoritative Portal: <strong className="text-govnavy-700">National Scholarship Portal (NSP)</strong>
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={scheme.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-govnavy-100 hover:bg-govnavy-200 text-govnavy-800 font-medium px-3 py-1.5 rounded-lg border border-govnavy-300 transition-colors flex items-center gap-1 text-xs"
                >
                  <span>Official Portal Notice</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
