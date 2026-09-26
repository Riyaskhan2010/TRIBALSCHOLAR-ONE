import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  KeyRound, 
  Eye, 
  FileSpreadsheet,
  DownloadCloud
} from 'lucide-react';
import { mockDocuments } from '../../data/mockData';
import { DocumentItem } from '../../types';

export const VaultScreen: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem>(mockDocuments[0]);
  const [pinInput, setPinInput] = useState<string>('••••');

  const handleToggleVault = () => {
    if (!isUnlocked) {
      // Simulate quick unlock
      setIsUnlocked(true);
      setPinInput('8849');
    } else {
      setIsUnlocked(false);
      setPinInput('••••');
    }
  };

  const getStatusBadge = (status: DocumentItem['status']) => {
    switch (status) {
      case 'Verified':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-medium">
            <CheckCircle2 className="w-3 h-3" /> Verified
          </span>
        );
      case 'Expiring Soon':
        return (
          <span className="inline-flex items-center gap-1 bg-saffron-50 text-saffron-800 border border-saffron-200 text-xs px-2.5 py-0.5 rounded-full font-medium">
            <Clock className="w-3 h-3" /> Expiring Soon
          </span>
        );
      case 'Under Review':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2.5 py-0.5 rounded-full font-medium">
            <AlertTriangle className="w-3 h-3" /> Under Review
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Vault Header & Security Status */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isUnlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-govnavy-800 text-white'}`}>
            {isUnlocked ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-govnavy-900">
                Encrypted Student Document Vault
              </h2>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isUnlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-govnavy-100 text-govnavy-700'}`}>
                {isUnlocked ? 'Vault Unlocked (Session Active)' : 'Vault Locked (Zero-Knowledge)'}
              </span>
            </div>
            <p className="text-xs text-govnavy-500">
              AES-256 client-side encryption • Zero government token exposure • 5 certificates registered
            </p>
          </div>
        </div>

        {/* PIN Security Simulation Toggle */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-govnavy-400 block font-mono-code">SECURITY PIN</span>
            <span className="text-xs font-mono font-bold text-govnavy-700">{pinInput}</span>
          </div>
          <button
            onClick={handleToggleVault}
            className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm ${
              isUnlocked 
                ? 'bg-govnavy-100 hover:bg-govnavy-200 text-govnavy-800 border border-govnavy-300' 
                : 'bg-brand-700 hover:bg-brand-600 text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>{isUnlocked ? 'Lock Vault Now' : 'Simulate Unlock (PIN 8849)'}</span>
          </button>
        </div>
      </div>

      {/* Main Split: Document List on Left, Extracted OCR Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Document List */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-govnavy-500 font-medium px-1">
            <span>Official Certificates & Identity Proofs ({mockDocuments.length})</span>
            <span>Click to Inspect OCR Evidence</span>
          </div>

          {mockDocuments.map((doc) => {
            const isSelected = selectedDoc.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-50/50 border-brand-500 shadow-sm ring-1 ring-brand-400/20' 
                    : 'bg-white border-govnavy-200 hover:border-govnavy-300 hover:shadow-subtle'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-govnavy-100 text-govnavy-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 text-brand-700" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-govnavy-900">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] text-govnavy-500 font-mono-code mt-0.5">
                        {doc.docNumber}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-govnavy-500">
                        <span>Issued: {doc.issueDate}</span>
                        {doc.expiryDate && (
                          <span className="text-saffron-700 font-medium bg-saffron-50 px-1.5 py-0.2 rounded">
                            Expires: {doc.expiryDate}
                          </span>
                        )}
                        <span className="text-govnavy-400">•</span>
                        <span className="text-emerald-700 font-medium">{doc.securityLevel}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    {getStatusBadge(doc.status)}
                    <span className="text-[11px] text-govnavy-400 font-mono-code">
                      OCR: {doc.confidenceScore}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* OCR Inspector & Tamper Check Pane */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-govnavy-200 p-5 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-govnavy-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-govnavy-900">
                  Verification & OCR Extraction
                </h3>
              </div>
              <span className="text-[10px] bg-govnavy-100 text-govnavy-700 font-mono px-2 py-0.5 rounded">
                SHA-256 Valid
              </span>
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-bold text-govnavy-900">{selectedDoc.title}</h4>
              <p className="text-xs text-govnavy-500 mt-0.5">{selectedDoc.issuedBy}</p>
            </div>

            {/* Extracted Key-Value Attributes */}
            <div className="mt-4 space-y-2.5 bg-govnavy-50/70 p-3.5 rounded-lg border border-govnavy-200">
              <span className="text-[10px] font-bold uppercase text-govnavy-500 tracking-wider block">
                Structured Extracted Fields
              </span>
              {selectedDoc.extractedFields.map((field, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs pb-1.5 border-b border-govnavy-100 last:border-0 last:pb-0">
                  <span className="text-govnavy-500 text-[11px]">{field.label}:</span>
                  <span className="font-semibold text-govnavy-900 text-right max-w-[60%]">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Integrity status */}
            <div className="mt-4 p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deterministic Integrity Match</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Document data matches master student profile without name or spelling discrepancies.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-govnavy-100 flex items-center justify-between">
            <span className="text-[11px] text-govnavy-500">Security: Non-custodial storage</span>
            <button 
              disabled={!isUnlocked}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors ${
                isUnlocked 
                  ? 'border-govnavy-300 text-govnavy-700 hover:bg-govnavy-100' 
                  : 'border-govnavy-200 text-govnavy-400 cursor-not-allowed'
              }`}
            >
              <DownloadCloud className="w-3.5 h-3.5" />
              <span>Export Dossier Slip</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
