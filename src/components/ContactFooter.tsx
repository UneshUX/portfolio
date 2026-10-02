import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Heart, ArrowUpRight, ExternalLink } from 'lucide-react';

const SOCIALS = [
  {
    name: 'Behance',
    url: 'https://behance.net',
    description: 'Case Studies',
    color: '#1769FF',
    bg: '#EEF3FF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 2.143 1.492 2.43 2.59 2.43.928 0 1.606-.49 1.897-1.4H23.726zm-7.375-3.757h4.348c-.029-1.63-.977-2.44-2.096-2.44-1.194 0-2.08.83-2.252 2.44zM6.908 8.56H3V16h4.002c2.547 0 3.83-1.147 3.83-3.072 0-1.232-.596-2.02-1.526-2.38.613-.372.978-.979.978-1.836C10.284 6.96 8.86 8.56 6.908 8.56zm-.43 2.875H5v1.875h1.54c.813 0 1.274-.367 1.274-1.016 0-.584-.384-.86-1.336-.86zm.235-2.75H5v1.7h1.662c.715 0 1.082-.324 1.082-.882 0-.538-.361-.818-1.03-.818z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    description: 'Professional Profile',
    color: '#0A66C2',
    bg: '#EAF3FB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com',
    description: 'Design Shots',
    color: '#EA4C89',
    bg: '#FEF0F5',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.004-.814zm-9.62-2.228c.24-.4 3.107-5.157 8.37-6.883.085-.025.17-.05.25-.07-.16-.38-.33-.76-.507-1.14-5.27 1.57-10.376 1.51-10.87 1.5-.004.14-.004.28-.004.42 0 2.42.87 4.63 2.305 6.365zm-2.166-8.61c.5.005 4.81.05 9.73-1.28-1.75-3.11-3.63-5.72-3.92-6.12-2.97 1.4-5.19 4.06-5.81 6.996zm7.48-7.77c.3.41 2.21 3.02 3.94 6.22 3.75-1.41 5.34-3.53 5.53-3.79C19.18 3.77 15.77 2 12 2c-.7 0-1.384.077-2.048.22zm7.23 8.21c-.23.304-2.023 2.636-5.96 4.246.255.52.49 1.05.72 1.59.08.19.155.375.234.57 3.43-.43 6.81.26 7.15.33-.06-2.655-.944-5.1-2.14-6.74z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    description: 'Code & Projects',
    color: '#181717',
    bg: '#F4F4F4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: 'Featured Work', href: '#work' },
  { label: 'UX Framework', href: '#process' },
  { label: 'About & Timeline', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const EMAIL = 'unesh0606@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-white border-t border-[#E8E6E1] pt-24 pb-12 relative overflow-hidden">

      {/* Subtle top-center grid glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF4D6D]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* ── Headline ── */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FF4D6D] font-semibold mb-4">
            Let's Connect
          </p>
          <h2 className="font-serif italic text-[#111] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Open to new projects &amp;<br className="hidden sm:inline" />
            <span className="text-[#888]"> collaborations.</span>
          </h2>
          <p className="text-[#666] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Have a project in mind or want to chat about design? Reach out directly — I typically respond within 24 hours.
          </p>
        </div>

        {/* ── Email CTA ── */}
        <div className="flex flex-col items-center mb-16">
          <div className="group flex items-center gap-3 bg-[#F8F7F4] border border-[#E8E6E1] rounded-2xl px-6 py-4 w-full max-w-md hover:border-[#FF4D6D]/40 hover:bg-[#FFF5F7] transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#FF4D6D]/10 text-[#FF4D6D] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#AAA] font-bold mb-0.5">Email Address</p>
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-[#111] text-sm hover:text-[#FF4D6D] transition-colors truncate block"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={`mailto:${EMAIL}`}
                title="Send email"
                className="p-2 text-[#AAA] hover:text-[#FF4D6D] rounded-lg hover:bg-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopy}
                title="Copy email"
                className="p-2 text-[#AAA] hover:text-[#FF4D6D] rounded-lg hover:bg-white transition-colors"
              >
                {copied
                  ? <Check className="w-4 h-4 text-emerald-500" />
                  : <Copy className="w-4 h-4" />
                }
              </button>
            </div>
          </div>

          {copied && (
            <p className="mt-2 text-xs text-emerald-500 font-medium animate-fade-in">
              ✓ Copied to clipboard
            </p>
          )}
        </div>

        {/* ── Social Links ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-4 rounded-2xl border border-[#E8E6E1] bg-white hover:border-[#E8E6E1] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-[#111] group-hover:text-[#FF4D6D] transition-colors flex items-center gap-1">
                  {s.name}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-[11px] text-[#AAA] mt-0.5">{s.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Footer bottom bar ── */}
        <div className="pt-8 border-t border-[#E8E6E1] flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Unesh G — back to top" className="font-serif italic text-[#111] text-lg tracking-tight hover:text-[#FF4D6D] transition-colors">
              Unesh G
            </a>
            <span className="text-[#DDD]">·</span>
            <div className="flex items-center gap-1.5 text-xs text-[#AAA]">
              <MapPin className="w-3.5 h-3.5" />
              Chennai, India
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1" aria-label="Footer navigation">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-[#888] hover:text-[#FF4D6D] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-[#AAA] font-mono flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-[#FF4D6D] fill-[#FF4D6D]" /> © 2026
          </p>
        </div>

      </div>
    </footer>
  );
};
