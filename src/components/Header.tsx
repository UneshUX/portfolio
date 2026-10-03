import React, { useState, useEffect } from 'react';
import { Sun, Moon, PhoneCall, Mail, Menu, X, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenHireModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onOpenHireModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [directLineOpen, setDirectLineOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A79] rounded-2xl p-1"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5A79] via-pink-500 to-amber-400 p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center font-heading font-extrabold text-[#FF5A79] text-xl">
                U
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-[#FF5A79] transition-colors">
                Unesh G
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase flex items-center gap-1">
                Chennai
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/60 backdrop-blur-md p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#FF5A79] dark:hover:text-[#FF5A79] rounded-full hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Items */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Line Popover Button */}
            <div className="relative">
              <button
                onClick={() => setDirectLineOpen(!directLineOpen)}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition-all"
                title="Direct contact information"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FF5A79]" />
                <span>Direct Line</span>
              </button>

              {/* Popover */}
              {directLineOpen && (
                <div className="absolute right-0 mt-2 w-72 p-4 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Contact</span>
                    <button
                      onClick={() => setDirectLineOpen(false)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Mail className="w-4 h-4 text-[#FF5A79] shrink-0" />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
                          unesh.ux@gmail.com
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy('unesh.ux@gmail.com', 'email')}
                        className="p-1.5 text-slate-400 hover:text-[#FF5A79] rounded-lg hover:bg-white dark:hover:bg-slate-700"
                        title="Copy Email"
                      >
                        {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
                          +91 98765 43210
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy('+91 98765 43210', 'phone')}
                        className="p-1.5 text-slate-400 hover:text-[#FF5A79] rounded-lg hover:bg-white dark:hover:bg-slate-700"
                        title="Copy Phone"
                      >
                        {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-[#FF5A79] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Hire me Pill Button */}
            <button
              onClick={onOpenHireModal}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-md shadow-[#FF5A79]/20 hover:shadow-lg hover:shadow-[#FF5A79]/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Tools */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-2xl"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] p-4 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-40">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 font-heading font-semibold text-base text-slate-800 dark:text-slate-200 hover:text-[#FF5A79] dark:hover:text-[#FF5A79] rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-500">
                <span>Direct Line: +91 98765 43210</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full py-3 rounded-2xl font-heading font-bold text-center text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-lg shadow-[#FF5A79]/20"
              >
                Hire Me
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
