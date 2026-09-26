import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  Info
} from 'lucide-react';
import { jagoSampleConversations } from '../../data/mockData';

interface ChatMessage {
  id: string;
  sender: 'student' | 'jago';
  text: string;
  timestamp: string;
}

export const JagoChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'student',
      text: 'What documents do I need to prepare for the Top Class Education Scheme for ST Students?',
      timestamp: '11:42 AM'
    },
    {
      id: 'm2',
      sender: 'jago',
      text: 'Based on official Ministry of Tribal Affairs (MoTA) guidelines:\n\n1. Valid ST Caste Certificate issued by competent Revenue Authority (e-Gazette verified).\n2. Current Financial Year Income Certificate (family income ≤ ₹6.00 Lakh/yr).\n3. Proof of Admission in a notified institute (Bonafide certificate / JoSAA allotment).\n4. Institute Fee Structure endorsed by Registrar / Dean.\n5. Aadhaar Card linked to an active bank account (NPCI DBT enabled).\n6. Class 12 / Semester Transcripts.\n\nAll documents can be pre-checked in your TribalScholar Document Vault before applying on scholarships.gov.in.',
      timestamp: '11:42 AM'
    }
  ]);

  const [inputVal, setInputVal] = useState<string>('');

  const handleSelectSample = (conv: typeof jagoSampleConversations[0]) => {
    const studentMsg: ChatMessage = {
      id: `std-${Date.now()}`,
      sender: 'student',
      text: conv.question,
      timestamp: 'Just now'
    };
    const jagoMsg: ChatMessage = {
      id: `jg-${Date.now() + 1}`,
      sender: 'jago',
      text: conv.answer,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, studentMsg, jagoMsg]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const studentMsg: ChatMessage = {
      id: `std-${Date.now()}`,
      sender: 'student',
      text: inputVal,
      timestamp: 'Just now'
    };

    const replyText = `Based on configured Ministry of Tribal Affairs (MoTA) rules for Scheduled Tribe students:\n\nRegarding "${inputVal}": Your master profile and document vault are pre-configured to verify these criteria deterministically. Please review your Application Readiness checklist before formal submission on the National Scholarship Portal (scholarships.gov.in).`;

    const jagoMsg: ChatMessage = {
      id: `jg-${Date.now() + 1}`,
      sender: 'jago',
      text: replyText,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, studentMsg, jagoMsg]);
    setInputVal('');
  };

  return (
    <div className="space-y-4 flex flex-col h-[520px]">
      {/* Header */}
      <div className="bg-white rounded-xl border border-govnavy-200 p-3.5 shadow-subtle flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-govnavy-900">JAGO Scheme Guidance Assistant</h3>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.2 rounded">
                Grounded Scheme RAG
              </span>
            </div>
            <p className="text-[11px] text-govnavy-500">
              Retrieves strict factual answers from MoTA & State tribal gazette guidelines
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-govnavy-500 bg-govnavy-50 px-2.5 py-1 rounded-lg border border-govnavy-200">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          <span>Zero Hallucination Guardrail</span>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <span className="text-[11px] font-semibold text-govnavy-500 flex-shrink-0">
          Suggested Queries:
        </span>
        {jagoSampleConversations.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelectSample(item)}
            className="flex-shrink-0 bg-white hover:bg-brand-50 text-govnavy-700 hover:text-brand-700 border border-govnavy-200 hover:border-brand-300 text-[11px] px-2.5 py-1 rounded-full transition-colors truncate max-w-[240px]"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Message Chat Body */}
      <div className="flex-1 bg-white rounded-xl border border-govnavy-200 p-4 shadow-subtle overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'student' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.sender === 'student'
                  ? 'bg-govnavy-800 text-white'
                  : 'bg-brand-700 text-white'
              }`}
            >
              {msg.sender === 'student' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`max-w-[85%] rounded-xl p-3.5 text-xs leading-relaxed ${
                msg.sender === 'student'
                  ? 'bg-brand-700 text-white rounded-tr-none'
                  : 'bg-govnavy-50 text-govnavy-900 border border-govnavy-200 rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>
              <div
                className={`text-[10px] mt-1.5 font-mono ${
                  msg.sender === 'student' ? 'text-brand-200' : 'text-govnavy-400'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <form onSubmit={handleSendCustom} className="flex gap-2">
        <input
          type="text"
          placeholder="Ask JAGO about scholarship eligibility, documents, or DBT timelines..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 px-3.5 py-2.5 text-xs bg-white border border-govnavy-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 shadow-sm"
        />
        <button
          type="submit"
          className="bg-brand-700 hover:bg-brand-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Grounded Guidance Notice */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-govnavy-500">
        <Info className="w-3.5 h-3.5 text-brand-600" />
        <span>Grounded guidance based on official gazette rules • Not an automated government submission.</span>
      </div>
    </div>
  );
};
