import React, { useState } from 'react';
import { 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  ArrowRight, 
  UserCheck, 
  Fingerprint, 
  CheckCircle2, 
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { TeamKyroLogo } from '../TeamKyroLogo';

interface LoginScreenProps {
  onLoginSuccess?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [studentId, setStudentId] = useState('TS1-2025-ST-8849');
  const [pin, setPin] = useState('8849');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleSimulateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      if (onLoginSuccess) {
        setTimeout(onLoginSuccess, 600);
      }
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto py-4 space-y-6">
      {/* Login Card */}
      <div className="bg-white rounded-2xl border border-govnavy-200 p-6 sm:p-8 shadow-subtle space-y-6">
        <div className="text-center space-y-2 pb-4 border-b border-govnavy-100">
          <TeamKyroLogo size="md" className="justify-center mb-1" />
          <h2 className="text-xl font-bold text-govnavy-900 font-heading">
            Student Secure Access Portal
          </h2>
          <p className="text-xs text-govnavy-500">
            Sign in to access your encrypted document vault, scheme eligibility engine, and readiness checklist.
          </p>
        </div>

        {authSuccess ? (
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2 animate-in fade-in">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="text-sm font-bold text-emerald-900">
              Authentication Successful
            </h3>
            <p className="text-xs text-emerald-700">
              Decrypted session token established for <strong>Ramesh Hembram (NIT Rourkela)</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSimulateLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-govnavy-700 mb-1">
                Student ID / Registered Tribal Identifier
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-govnavy-50/50 border border-govnavy-200 rounded-lg focus:outline-none focus:border-brand-600 font-mono-code"
                  placeholder="TS1-2025-ST-XXXX"
                  required
                />
                <UserCheck className="w-4 h-4 text-govnavy-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-govnavy-700">
                  4-Digit Security Vault PIN
                </label>
                <span className="text-[10px] text-brand-700 font-medium">Demo PIN: 8849</span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength={4}
                  className="w-full px-3.5 py-2.5 text-xs bg-govnavy-50/50 border border-govnavy-200 rounded-lg focus:outline-none focus:border-brand-600 font-mono-code tracking-widest"
                  placeholder="••••"
                  required
                />
                <KeyRound className="w-4 h-4 text-govnavy-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="p-3 bg-govnavy-50 rounded-lg border border-govnavy-100 flex items-start gap-2 text-[11px] text-govnavy-600">
              <Fingerprint className="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Zero-Knowledge Security:</strong> Your 4-digit PIN derives the client-side AES-256 decryption key on device.
              </span>
            </div>

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              {isAuthenticating ? (
                <span>Decrypting Session...</span>
              ) : (
                <>
                  <span>Sign In to Student Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="pt-2 border-t border-govnavy-100 flex items-center justify-between text-[11px] text-govnavy-400">
          <span>Official SIH 2026 Prototype Showcase</span>
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> TLS 1.3
          </span>
        </div>
      </div>
    </div>
  );
};
