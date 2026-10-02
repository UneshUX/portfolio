import React from 'react';
import { X, Mail, Sparkles, ArrowUpRight } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/unesh-g',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/unesh',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 2.143 1.492 2.43 2.59 2.43.928 0 1.606-.49 1.897-1.4H23.726zm-7.375-3.757h4.348c-.029-1.63-.977-2.44-2.096-2.44-1.194 0-2.08.83-2.252 2.44zM6.908 8.56H3V16h4.002c2.547 0 3.83-1.147 3.83-3.072 0-1.232-.596-2.02-1.526-2.38.613-.372.978-.979.978-1.836C10.284 6.96 8.86 8.56 6.908 8.56zm-.43 2.875H5v1.875h1.54c.813 0 1.274-.367 1.274-1.016 0-.584-.384-.86-1.336-.86zm.235-2.75H5v1.7h1.662c.715 0 1.082-.324 1.082-.882 0-.538-.361-.818-1.03-.818z" />
      </svg>
    ),
  },
];

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const EMAIL = 'unesh0606@gmail.com';
  const subject = encodeURIComponent('Hiring Inquiry — UI/UX Design');
  const body = encodeURIComponent(
    `Hi Unesh,\n\nI came across your portfolio and I'm interested in working with you.\n\n` +
    `Please feel free to reach out so we can discuss further.\n\nBest regards,`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hire-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl border border-[#E8E6E1] shadow-2xl p-8 overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F8F7F4] flex items-center justify-center text-[#888] hover:text-[#111] hover:bg-[#EEECEA] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D6D]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F3] border border-[#FFCDD5] text-[#FF4D6D] text-[10px] font-mono font-bold uppercase tracking-widest mb-5">
          <Sparkles className="w-3 h-3" />
          Available for work
        </div>

        {/* Headline */}
        <h2
          id="hire-modal-title"
          className="font-serif italic text-2xl text-[#111] leading-snug mb-2"
        >
          Let's work together.
        </h2>
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          Open to full-time UI/UX roles, freelance contracts, and design consultations — in Chennai &amp; Remote.
        </p>

        {/* Primary CTA — mailto */}
        <a
          href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#111] text-white text-sm font-semibold hover:bg-[#FF4D6D] focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-2 transition-colors mb-3"
        >
          <Mail className="w-4 h-4" />
          Send me an email
        </a>

        {/* Email display */}
        <p className="text-center text-xs text-[#AAA] mb-8">
          {EMAIL}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-[#E8E6E1]" />
          <span className="text-[10px] text-[#CCC] font-mono uppercase tracking-widest">or connect on</span>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        {/* Secondary links */}
        <div className="flex gap-2">
          {CONTACT_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#E8E6E1] text-xs font-medium text-[#555] hover:border-[#FF4D6D] hover:text-[#FF4D6D] focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-2 transition-colors"
            >
              {l.icon}
              {l.label}
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};
