import { useState, useEffect, useRef } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Sun, Moon } from 'lucide-react';
import profileImg from './assets/Profile image.png';
import drLabCover from './assets/Cover Image/Dr Lab Cover.png';
import skyvaultCover from './assets/Cover Image/Skyvault Cover.png';
import whatsappEmailCover from './assets/Cover Image/Whatsapp + Email cover.png';
import busSnapCover from './assets/Cover Image/Bus Snap Cover.png';
import './index.css';

/* ─── DATA ─────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'dr-lab',
    index: '01',
    title: 'Dr. Lab',
    tags: ['Healthcare', 'Mobile App'],
    desc: 'A healthcare experience that brings doctor appointments, lab tests, diagnostics, and medicine access into one simple, connected platform.',
    year: '2025',
    accent: '#FF4D6D',
    cover: drLabCover,
    link: 'https://www.behance.net/gallery/188507041/DrLab-UIUX-Case-Study-Medical-Appointments-App?platform=direct',
  },
  {
    id: 'sky-vault',
    index: '02',
    title: 'Sky Vault',
    tags: ['SaaS', 'Cloud Storage'],
    desc: 'Reimagining everyday file management with a clean, organized cloud experience built around effortless storage and sharing.',
    year: '2025',
    accent: '#4F6EF7',
    cover: skyvaultCover,
    link: 'https://www.behance.net/gallery/186306577/Sky-Vault-Cloud-Storage-Dashboard-Web-Application?platform=direct',
  },
  {
    id: 'whatsapp-email',
    index: '03',
    title: 'WhatsApp + Email',
    tags: ['Concept', 'Productivity'],
    desc: 'A UX concept that brings email threads directly into WhatsApp\'s familiar chat UI — built for India\'s millions of micro-entrepreneurs.',
    year: '2024',
    accent: '#25A244',
    cover: whatsappEmailCover,
    link: 'https://www.behance.net/gallery/191065245/WhatsApp-with-Email-Functionality-Adding-Feature',
  },
  {
    id: 'bus-snap',
    index: '04',
    title: 'Bus Snap',
    tags: ['Wearable', 'Smart Transit'],
    desc: 'A smartwatch-based bus ticketing experience designed to make Chennai\'s city transit faster, simpler, and completely hands-free.',
    year: '2024',
    accent: '#F59E0B',
    cover: busSnapCover,
    link: 'https://www.behance.net/gallery/189370901/Bus-Snap-Bus-Ticket-Booking-App-Watch-App?platform=direct',
  },
];

const SKILLS = [
  'User Research', 'Information Architecture', 'Wireframing',
  'Prototyping', 'Usability Testing', 'Design Systems',
  'Figma', 'FigJam', 'Framer', 'Adobe XD', 'Miro',
  'AI Prompt Engineering', 'WCAG 2.1 Accessibility',
];

const PROCESS = [
  { step: '01', title: 'Understand', desc: 'Understand the users, business goals, and product requirements.' },
  { step: '02', title: 'Define', desc: 'Identify the key problems, user needs, and opportunities.' },
  { step: '03', title: 'Explore', desc: 'Create information architecture, wireframes, and possible solutions.' },
  { step: '04', title: 'Design', desc: 'Turn validated ideas into polished UI and interactive prototypes.' },
  { step: '05', title: 'Improve', desc: 'Test, refine, and improve the experience based on feedback.' },
];

/* ─── HELPERS ────────────────────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── THEME TOGGLE ───────────────────────────────────── */

function ThemeToggle({ darkMode, toggleDarkMode, className = '' }: { darkMode: boolean; toggleDarkMode: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center h-8 w-14 rounded-full p-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#FF4D6D] cursor-pointer shrink-0 ${darkMode ? 'bg-[#181E29] border border-[#2B3548]' : 'bg-[#EFECE6] border border-[#DDD9D0]'
        } ${className}`}
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark mode"
      title={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      <span className="sr-only">Toggle theme</span>
      {/* Background track icons */}
      <div className="w-full flex items-center justify-between px-1 text-[10px] select-none pointer-events-none">
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-200 ${darkMode ? 'text-gray-500 opacity-70' : 'text-amber-500 opacity-0'}`} />
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-200 ${darkMode ? 'text-indigo-300 opacity-0' : 'text-gray-400 opacity-70'}`} />
      </div>
      {/* Sliding thumb */}
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform ${darkMode
          ? 'translate-x-6 bg-[#222B3D] text-[#818CF8] border border-[#374151]'
          : 'translate-x-0 bg-white text-[#F59E0B] border border-black/10'
          }`}
      >
        {darkMode ? (
          <Moon className="w-3.5 h-3.5 fill-current" />
        ) : (
          <Sun className="w-3.5 h-3.5 fill-current" />
        )}
      </span>
    </button>
  );
}

/* ─── COMPONENTS ─────────────────────────────────────── */

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Nav({ darkMode, toggleDarkMode }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Track active section via IntersectionObserver + bottom-of-page check
  useEffect(() => {
    const sectionIds = ['work', 'process', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.15, rootMargin: '-10% 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const handleScrollBottom = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScrollBottom);

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScrollBottom);
    };
  }, []);

  const links = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-[#0B0D12]/90 backdrop-blur-md border-b border-[#E8E6E1] dark:border-[#232936] shadow-xs'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Unesh G — portfolio home">
          <span className="font-bold text-[#111] dark:text-white text-lg tracking-tight group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors">
            Unesh G
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`text-sm transition-colors relative py-1 cursor-pointer ${activeSection === l.id
                ? 'text-[#111] dark:text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FF4D6D] after:rounded-full'
                : 'text-[#555] dark:text-[#94A3B8] hover:text-[#111] dark:hover:text-white'
                }`}
              aria-current={activeSection === l.id ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <div className="flex items-center pl-1">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          <a
            href="https://drive.google.com/file/d/1kFJrM5EJ_nmuRAf41shE9_LqPh1v95kg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-[#111] dark:bg-white text-white dark:text-[#111] hover:bg-[#FF4D6D] dark:hover:bg-[#FF4D6D] dark:hover:text-white focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-2 transition-all duration-200 cursor-pointer shadow-xs"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile header controls (Theme toggle + Hamburger) */}
        <div className="md:hidden flex items-center gap-2.5">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[#111] dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#FF4D6D]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-5 relative flex items-center justify-center">
              <svg
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 transform ${menuOpen ? 'rotate-90 opacity-100 scale-100' : 'rotate-0 opacity-0 scale-75'
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <svg
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 transform ${!menuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth blur fade-in & fade-out */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[#E8E6E1] dark:border-[#232936] bg-white/95 dark:bg-[#0F131A]/95 backdrop-blur-md shadow-md ${menuOpen
          ? 'max-h-80 opacity-100 py-6 px-6 pointer-events-auto'
          : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none border-transparent'
          }`}
      >
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                setMenuOpen(false);
                handleNavClick(e, l.href);
              }}
              className={`text-base font-medium transition-all duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                } ${activeSection === l.id ? 'text-[#FF4D6D] font-semibold' : 'text-[#111] dark:text-gray-200 hover:text-[#FF4D6D] dark:hover:text-[#FF4D6D]'}`}
              style={{ transitionDelay: menuOpen ? `${i * 35 + 40}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <div
            className={`pt-2 transition-all duration-300 transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}
            style={{ transitionDelay: menuOpen ? `${links.length * 35 + 40}ms` : '0ms' }}
          >
            <a
              href="https://drive.google.com/file/d/1kFJrM5EJ_nmuRAf41shE9_LqPh1v95kg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full text-center text-sm font-semibold px-5 py-2.5 rounded-full bg-[#111] dark:bg-white text-white dark:text-[#111] hover:bg-[#FF4D6D] dark:hover:bg-[#FF4D6D] dark:hover:text-white transition-colors shadow-sm"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── STAT COUNTER hook ── */
function useCountUp(target: number, duration = 1400, active = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const startAnimation = () => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(eased * target));
      if (pct < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!active) {
      setCount(0);
      started.current = false;
      return;
    }

    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    // If currently visible in viewport, trigger counting animation immediately
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView && !started.current) {
      startAnimation();
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        startAnimation();
        obs.disconnect();
      }
    }, { threshold: 0.05 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, active]);

  return { ref, count };
}

function StatItem({ value, suffix, label, active = true }: { value: number; suffix: string; label: string; active?: boolean }) {
  const { ref, count } = useCountUp(value, 1400, active);
  return (
    <div className="flex flex-col items-center gap-1 min-w-0 text-center">
      <span
        ref={ref}
        className="text-2xl sm:text-3xl text-[#111] dark:text-white leading-none tabular-nums"
        style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontStyle: 'italic' }}
      >
        {count}{suffix}
      </span>
      <span className="text-[11px] text-[#888] dark:text-[#94A3B8] leading-snug text-center">{label}</span>
    </div>
  );
}

function Hero({ startCounters = false }: { startCounters?: boolean }) {
  const DOMAINS_MARQUEE = ['Healthcare', 'EdTech', 'Fintech', 'E-commerce', 'SaaS', 'Wearables', 'AI Workflows'];

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#work');
    }
  };

  return (
    <section className="grid-bg pt-16 pb-0 border-b border-[#E8E6E1] dark:border-[#232936] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-10 sm:py-12 flex flex-col items-center text-center">
        {/* 1. Availability badge */}
        <div className="hero-stagger hero-stagger-1 flex items-center justify-center gap-3 mb-6 sm:mb-7">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E8E6E1] dark:border-[#2A3447] shrink-0 shadow-lg">
            <img
              src={profileImg}
              alt="Unesh G — UI/UX & Product Designer, Chennai"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex items-center gap-2 bg-[#F8F7F4] dark:bg-[#141A24] border border-[#E8E6E1] dark:border-[#232936] px-3.5 py-1.5 rounded-full shadow-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-[#444] dark:text-[#CBD5E1] font-medium">Open to work</span>
          </div>
        </div>

        {/* 2. Unified Text Block */}
        <div className="hero-stagger hero-stagger-2 max-w-3xl flex flex-col items-center">
          {/* Level 1: Intro / Eyebrow */}
          <p className="text-sm sm:text-base text-[#555] dark:text-[#94A3B8] font-normal tracking-normal mb-2.5 sm:mb-3">
            Hi, I'm <strong className="text-[#111] dark:text-white font-bold">Unesh G</strong>, a UI/UX & Product Designer based in Chennai.
          </p>

          {/* Level 2: Primary Headline */}
          <h1
            className="leading-[1.2] tracking-tight max-w-2xl text-[#111] dark:text-white"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            }}
          >
            I design complex products to feel{' '}
            <span
              className="text-[#ea4764] dark:text-[#ea4764]"
              style={{
                fontFamily: "'Newsreader', 'Instrument Serif', 'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontStyle: 'italic',
                letterSpacing: '0.01em',
              }}
            >
              effortless
            </span>
          </h1>

          {/* Level 3: Unified Supporting Copy */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#666] dark:text-[#94A3B8] leading-relaxed max-w-2xl text-center">
            3+ years of experience designing web, mobile, SaaS, healthcare, and AI products, combining UX thinking, UI design, prototyping, and design systems.
          </p>
        </div>

        {/* 3. CTAs */}
        <div className="hero-stagger hero-stagger-4 flex flex-wrap items-center justify-center gap-3.5 mt-7 sm:mt-8">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#work');
            }}
            className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-full bg-[#111] dark:bg-white text-white dark:text-[#111] hover:bg-[#FF4D6D] dark:hover:bg-[#FF4D6D] dark:hover:text-white focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-2 transition-all duration-200 shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_20px_0_rgba(255,77,109,0.4)] cursor-pointer"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#contact');
            }}
            className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-full border border-[#E8E6E1] dark:border-[#2D3748] bg-white dark:bg-[#141A24] text-[#111] dark:text-white hover:border-[#111] dark:hover:border-[#FF4D6D] hover:text-[#111] dark:hover:text-[#FF4D6D] focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-2 transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.12)] cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* 4. Proof stats strip */}
        <div className="hero-stagger hero-stagger-5 w-full max-w-xl mt-9 sm:mt-10 pt-8 border-t border-[#E8E6E1] dark:border-[#232936]">
          <div className="grid grid-cols-3 gap-6 justify-center">
            <StatItem value={3} suffix="+" label="yrs UX experience" active={startCounters} />
            <StatItem value={6} suffix="+" label="case studies" active={startCounters} />
            <StatItem value={6} suffix="" label="domains" active={startCounters} />
          </div>
        </div>

        {/* 5. Domains marquee */}
        <div className="hero-stagger hero-stagger-5 overflow-hidden w-full max-w-2xl relative mt-7 sm:mt-8">
          {/* Subtle edge fades for smooth marquee */}
          <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white dark:from-[#0B0D12] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white dark:from-[#0B0D12] to-transparent pointer-events-none z-10" />

          <div className="hero-marquee-track flex items-center gap-6" aria-hidden="true">
            {[...DOMAINS_MARQUEE, ...DOMAINS_MARQUEE].map((d, i) => (
              <span key={i} className="text-[11px] text-[#AAA] dark:text-[#64748B] uppercase tracking-widest shrink-0 flex items-center gap-6 select-none">
                <span>{d}</span>
                <span className="text-[#DDD] dark:text-[#334155]">·</span>
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── SCROLL CUE ── */}
      <div className="flex justify-center pb-8">
        <a
          href="#work"
          onClick={handleScrollToWork}
          className="group inline-flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF4D6D] focus-visible:outline-offset-4 rounded-lg px-4 py-2"
          aria-label="Scroll to explore featured work"
        >
          <span className="text-[10px] text-[#AAA] dark:text-[#64748B] group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] uppercase tracking-widest transition-colors font-medium">
            Scroll to explore
          </span>
          <svg
            className="hero-bounce w-4 h-4 text-[#CCC] dark:text-[#475569] group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-[#E8E6E1] dark:border-[#232936] py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#ea4764] uppercase tracking-[0.2em] mb-3 block">
              Selected Work
            </span>
            <h2
              className="leading-tight tracking-tight text-[#111] dark:text-white"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 4vw, 40px)',
              }}
            >
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm text-[#777] dark:text-[#94A3B8] max-w-sm">
            Handpicked mobile, SaaS, and concept designs built with a focus on user clarity and aesthetic precision.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-[#E8E6E1] dark:border-[#232936] bg-[#FAF9F5] dark:bg-[#131720] rounded-3xl p-6 sm:p-7 hover:border-[#FF4D6D]/50 dark:hover:border-[#FF4D6D]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer block text-inherit no-underline focus-visible:outline-2 focus-visible:outline-[#FF4D6D]"
                aria-label={`View ${p.title} case study on Behance`}
              >
                {/* Cover Image */}
                <div className="rounded-2xl overflow-hidden border border-[#E8E6E1] dark:border-[#232936] bg-[#F8F7F4] dark:bg-[#1A202C] mb-6 aspect-[16/10] relative">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#0B0D12]/90 border border-black/5 dark:border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-medium text-[#111] dark:text-white shadow-xs">
                    {p.index}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#0B0D12]/90 border border-black/5 dark:border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#555] dark:text-[#CBD5E1] shadow-xs">
                    {p.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif italic text-2xl sm:text-3xl text-[#111] dark:text-white group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors leading-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#555] dark:text-[#94A3B8] leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs text-[#666] dark:text-[#94A3B8] bg-[#F0EEE8] dark:bg-[#1E2533] border border-transparent dark:border-[#2D3748] px-3 py-1 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-end pt-4 border-t border-[#E8E6E1] dark:border-[#232936]">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111] dark:text-white group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors">
                        View Case Study
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Behance Footer CTA */}
        <Reveal className="mt-16 text-center">
          <a
            href="https://www.behance.net/unesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#777] dark:text-[#94A3B8] hover:text-[#111] dark:hover:text-white transition-colors bg-[#F8F7F4] dark:bg-[#131720] px-6 py-3 rounded-full border border-[#E8E6E1] dark:border-[#232936] hover:border-[#999] dark:hover:border-[#475569]"
          >
            View all projects on Behance
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-[#E8E6E1] dark:border-[#232936] bg-[#F8F7F4] dark:bg-[#0F131A] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
        <Reveal className="mb-14 sm:mb-16">
          <span className="text-[11px] font-bold text-[#ea4764] uppercase tracking-[0.2em] mb-3 block">Process</span>
          <h2
            className="leading-tight tracking-tight text-[#111] dark:text-white"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4vw, 40px)',
            }}
          >
            My Design Process
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="border-t border-[#E8E6E1] dark:border-[#232936] pt-6 flex flex-col justify-start">
              <span className="text-xs font-mono text-[#FF4D6D] font-semibold tracking-wider block mb-3">
                {p.step}
              </span>
              <h3 className="font-serif italic text-xl text-[#111] dark:text-white mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[#666] dark:text-[#94A3B8] leading-relaxed">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const TIMELINE = [
    { year: '2024 – Now', title: 'UI/UX Designer', org: 'GMIndia, Chennai' },
    { year: '2023 – 24', title: 'UI/UX Certification', org: 'Aspira Design Institute' },
    { year: '2022 – 23', title: 'Electronics Engineer', org: 'Coromandel Electronics' },
    { year: '2018 – 22', title: 'B.E. Electronics & Instrumentation Engineering', org: 'Saveetha Engineering College' },
  ];

  const QUICK_FACTS = [
    { label: 'Location', value: 'Chennai, Tamil Nadu' },
    { label: 'Currently', value: 'UI/UX Designer @ GMIndia' },
    { label: 'Education', value: 'B.E. Electronics & Instrumentation' },
    { label: 'Training', value: 'Aspira Design Institute · 6 Months' },
  ];

  return (
    <section id="about" className="border-t border-[#E8E6E1] dark:border-[#232936] scroll-mt-16 bg-white dark:bg-[#0B0D12]">

      {/* ── HEADER BAND ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-0">
        <Reveal>
          <span className="text-[11px] font-bold text-[#ea4764] uppercase tracking-[0.2em] mb-3 block">About</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
            <h2
              className="leading-tight tracking-tight text-[#111] dark:text-white"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 4vw, 40px)',
              }}
            >
              Engineer-turned-designer.
            </h2>
          </div>
        </Reveal>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* ════ LEFT — Photo + Quick Facts ════ */}
        <Reveal className="lg:col-span-4 flex flex-col gap-6">

          {/* Profile photo card */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E6E1] dark:border-[#232936] shadow-sm"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={profileImg}
              alt="Unesh G — UI/UX & Product Designer"
              className="w-full h-full object-cover object-top"
            />
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 pt-10 pb-5">
              <p className="text-white font-bold text-base" style={{ fontFamily: "'Sora', sans-serif" }}>Unesh G</p>
              <p className="text-white/80 text-xs font-medium tracking-wide">UI/UX & Product Designer · Chennai</p>
            </div>
          </div>

          {/* Quick facts card */}
          <div className="bg-[#F8F7F4] dark:bg-[#131720] rounded-2xl border border-[#EDEBE6] dark:border-[#232936] p-5 space-y-3">
            {QUICK_FACTS.map(({ label, value }) => (
              <div key={label} className="flex items-start gap-3 text-sm pb-3 border-b border-[#EDEBE6] dark:border-[#232936] last:border-0 last:pb-0">
                <span className="text-[#888] dark:text-[#64748B] text-[11px] font-semibold uppercase tracking-wide w-20 shrink-0 pt-0.5">{label}</span>
                <span className="text-[#333] dark:text-[#E2E8F0] font-medium leading-snug">{value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ════ RIGHT — Story + Timeline + Skills ════ */}
        <div className="lg:col-span-8 flex flex-col gap-12">

          {/* Bio story */}
          <Reveal className="space-y-5">
            <p className="text-[15px] text-[#444] dark:text-[#94A3B8] leading-[1.85]">
              My path into design started in a circuit lab.
            </p>
            <p className="text-[15px] text-[#444] dark:text-[#94A3B8] leading-[1.85]">
              After graduating with a{' '}
              <strong className="font-semibold text-[#111] dark:text-white">Bachelor’s degree in Electronics &amp; Instrumentation Engineering</strong>, I spent a year at{' '}
              <strong className="font-semibold text-[#111] dark:text-white">Coromandel Electronics</strong> designing SMD circuit boards. While I enjoyed understanding how systems worked, I became more curious about{' '}
              <strong className="font-semibold text-[#111] dark:text-white">how people interact with them</strong>.
            </p>
            <p className="text-[15px] text-[#444] dark:text-[#94A3B8] leading-[1.85]">
              That curiosity led me to <strong className="font-semibold text-[#111] dark:text-white">UI/UX design</strong>. After 6 months of intensive training at{' '}
              <strong className="font-semibold text-[#111] dark:text-white">Aspira Design Institute</strong>, I joined{' '}
              <strong className="font-semibold text-[#111] dark:text-white">GMIndia</strong> as a UI/UX Designer.
            </p>
            <p className="text-[15px] text-[#444] dark:text-[#94A3B8] leading-[1.85]">
              Today, I design experiences across <strong className="font-semibold text-[#111] dark:text-white">healthcare, SaaS, and digital products</strong>, combining UX thinking, visual design, and AI-assisted workflows to create experiences that are{' '}
              <strong className="font-semibold text-[#111] dark:text-white">simple, accessible, and purposeful</strong>.
            </p>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.1}>
            <p className="text-[11px] font-bold text-[#888] dark:text-[#64748B] uppercase tracking-[0.2em] mb-6">Career Timeline</p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#EDEBE6] dark:bg-[#232936]" />
              <div className="space-y-6 pl-7">
                {TIMELINE.map((item, i) => (
                  <Reveal key={item.year} delay={i * 0.07}>
                    <div className="relative">
                      {/* Dot */}
                      <div
                        className="absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#0B0D12] shadow-sm bg-[#111] dark:bg-[#FF4D6D]"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                        <div>
                          <p className="text-sm font-bold text-[#111] dark:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {item.title}
                          </p>
                          <p className="text-xs text-[#888] dark:text-[#94A3B8] mt-0.5">{item.org}</p>
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 self-start sm:self-center bg-[#F0EEE9] dark:bg-[#1E2533] text-[#555] dark:text-[#94A3B8]">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Skills */}
          <Reveal delay={0.2}>
            <p className="text-[11px] font-bold text-[#888] dark:text-[#64748B] uppercase tracking-[0.2em] mb-4">Skills & Tools</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(s => (
                <span
                  key={s}
                  className="text-xs font-semibold text-[#555] dark:text-[#CBD5E1] border border-[#E8E6E1] dark:border-[#232936] px-3.5 py-1.5 rounded-full bg-white dark:bg-[#131720] hover:border-[#FF4D6D] dark:hover:border-[#FF4D6D] hover:text-[#FF4D6D] dark:hover:text-[#FF4D6D] hover:bg-[#FFF5F7] dark:hover:bg-[#FF4D6D]/10 transition-all duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('unesh0606@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-[#E8E6E1] dark:border-[#232936] bg-[#F8F7F4] dark:bg-[#0F131A] py-24 sm:py-28 relative overflow-hidden">
      {/* Soft gradient accent in the background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] bg-gradient-to-tr from-[#FF4D6D]/8 via-[#4F6EF7]/5 to-transparent dark:from-[#FF4D6D]/15 dark:via-[#4F6EF7]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-[#ea4764] uppercase tracking-[0.2em] mb-3 block">Contact</span>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-[#131720] border border-[#E8E6E1] dark:border-[#232936] px-4 py-1.5 rounded-full shadow-xs mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-[#444] dark:text-[#CBD5E1] tracking-wide">
              Available for full-time roles & projects
            </span>
          </div>

          <h2
            className="leading-tight tracking-tight text-[#111] dark:text-white mb-5"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontStyle: 'italic',
              fontSize: 'clamp(28px, 4vw, 40px)',
            }}
          >
            Let's build something remarkable together.
          </h2>
          <p className="text-[#666] dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Have a project in mind, a UI/UX & Product Design role to discuss, or ideas worth exploring? Let's connect via email, LinkedIn, or Behance.
          </p>
        </Reveal>

        {/* Primary Contact Card */}
        <Reveal delay={0.1} className="mb-6">
          <div className="bg-white dark:bg-[#131720] border border-[#E8E6E1] dark:border-[#232936] rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF9F5] dark:bg-[#1A202C] border border-[#E8E6E1] dark:border-[#2D3748] flex items-center justify-center shrink-0 text-[#FF4D6D]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-[#888] dark:text-[#64748B] uppercase tracking-wider block mb-1">
                  Direct Email
                </span>
                <a
                  href="mailto:unesh0606@gmail.com?subject=UI%2FUX%20%26%20Product%20Design%20Inquiry%20%E2%80%94%20Unesh%20G"
                  className="font-mono text-base sm:text-xl font-medium text-[#111] dark:text-white hover:text-[#FF4D6D] dark:hover:text-[#FF4D6D] transition-colors truncate block"
                >
                  unesh0606@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full border border-[#E8E6E1] dark:border-[#2D3748] bg-[#FAF9F5] dark:bg-[#1A202C] text-[#333] dark:text-[#E2E8F0] hover:border-[#111] dark:hover:border-white hover:text-[#111] dark:hover:text-white transition-all cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:unesh0606@gmail.com?subject=UI%2FUX%20%26%20Product%20Design%20Inquiry%20%E2%80%94%20Unesh%20G"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full bg-[#111] dark:bg-white text-white dark:text-[#111] hover:bg-[#FF4D6D] dark:hover:bg-[#FF4D6D] dark:hover:text-white transition-colors shadow-xs"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Secondary Links Grid */}
        <Reveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="https://linkedin.com/in/unesh-g"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white dark:bg-[#131720] border border-[#E8E6E1] dark:border-[#232936] rounded-2xl hover:border-[#FF4D6D] dark:hover:border-[#FF4D6D] transition-all duration-200 flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] dark:bg-[#1A202C] border border-[#E8E6E1] dark:border-[#2D3748] flex items-center justify-center font-bold text-sm text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2] transition-colors">
                in
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111] dark:text-white group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors flex items-center gap-1.5">
                  LinkedIn
                </h4>
                <p className="text-xs text-[#777] dark:text-[#64748B]">linkedin.com/in/unesh-g</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#AAA] dark:text-[#64748B] group-hover:text-[#FF4D6D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="https://www.behance.net/unesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white dark:bg-[#131720] border border-[#E8E6E1] dark:border-[#232936] rounded-2xl hover:border-[#FF4D6D] dark:hover:border-[#FF4D6D] transition-all duration-200 flex items-center justify-between shadow-2xs hover:shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] dark:bg-[#1A202C] border border-[#E8E6E1] dark:border-[#2D3748] flex items-center justify-center font-bold text-sm text-[#0057FF] group-hover:bg-[#0057FF] group-hover:text-white group-hover:border-[#0057FF] transition-colors">
                Be
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#111] dark:text-white group-hover:text-[#FF4D6D] dark:group-hover:text-[#FF4D6D] transition-colors flex items-center gap-1.5">
                  Behance
                </h4>
                <p className="text-xs text-[#777] dark:text-[#64748B]">behance.net/unesh</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#AAA] dark:text-[#64748B] group-hover:text-[#FF4D6D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </Reveal>

        {/* Info detail strip */}
        <Reveal delay={0.25} className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#888] dark:text-[#64748B] pt-6 border-t border-[#E8E6E1] dark:border-[#232936]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Typical response within 24 hours
          </span>
          <span className="inline-flex items-center gap-1.5">
            📍 Chennai, India (IST · UTC+5:30)
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E8E6E1] dark:border-[#232936] bg-white dark:bg-[#0B0D12]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAA] dark:text-[#64748B]">
        <span className="font-serif italic font-semibold text-sm text-[#333] dark:text-[#CBD5E1]">Unesh G</span>
        <span>© 2026 Unesh G. All rights reserved.</span>
      </div>
    </footer>
  );
}

/* ─── LOADER ─────────────────────────────────────────────── */

function Loader({ onDone }: { onDone: () => void }) {
  const name = 'Unesh G';

  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#0B0D12]"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* Animated name */}
      <div className="overflow-hidden px-4 py-2 -mx-4 -my-2">
        <h1
          className="text-[clamp(2.6rem,8vw,6rem)] font-black italic text-[#111] dark:text-white leading-[1.15] tracking-tight flex pr-3"
          aria-label={name}
        >
          {name.split('').map((ch, i) => (
            <span
              key={i}
              className="inline-block pr-[0.08em]"
              style={{
                animation: `loaderLetterIn 0.55s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${i * 0.045}s`,
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="text-[#888] dark:text-[#64748B] text-[13px] font-medium tracking-[0.3em] uppercase mt-5"
        style={{ animation: 'loaderFadeUp 0.5s ease both', animationDelay: '0.7s' }}
      >
        UI/UX & Product Designer
      </p>

      {/* Loading bar */}
      <div
        className="mt-10 w-32 h-px bg-[#E5E5E5] dark:bg-[#232936] overflow-hidden rounded-full"
        style={{ animation: 'loaderFadeUp 0.4s ease both', animationDelay: '0.9s' }}
      >
        <div
          className="h-full bg-[#111] dark:bg-[#FF4D6D] rounded-full"
          style={{ animation: 'loaderBar 1.6s cubic-bezier(0.4,0,0.2,1) 1s both' }}
        />
      </div>

      {/* Loading text */}
      <p
        className="text-[#888] dark:text-[#64748B] text-[11px] tracking-[0.25em] uppercase mt-3"
        style={{ animation: 'loaderFadeUp 0.4s ease both', animationDelay: '1s' }}
      >
        Loading
        <span style={{ animation: 'loaderDots 1.2s steps(3,end) 1s infinite' }}>...</span>
      </p>

      <style>{`
        @keyframes loaderLetterIn {
          from { opacity: 0; transform: translateY(60px) skewY(6deg); }
          to   { opacity: 1; transform: translateY(0)    skewY(0deg); }
        }
        @keyframes loaderFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes loaderDots {
          0%   { content: '.'; }
          33%  { content: '..'; }
          66%  { content: '...'; }
          100% { content: '.'; }
        }
      `}</style>
    </div>
  );
}

/* ─── APP ─────────────────────────────────────────────── */

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return false; // Default to light mode for all first-time visitors
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleDone = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setFadeOut(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="bg-white dark:bg-[#0B0D12] text-[#111] dark:text-[#F1F5F9] min-h-screen transition-colors duration-300">
      {/* Loader */}
      {loading && (
        <div
          style={{
            transition: 'opacity 0.5s ease',
            opacity: fadeOut ? 0 : 1,
            pointerEvents: fadeOut ? 'none' : 'auto',
          }}
        >
          <Loader onDone={handleDone} />
        </div>
      )}

      {/* Page content — fades in after loader */}
      <div
        style={{
          opacity: loading && !fadeOut ? 0 : 1,
          transition: 'opacity 0.6s ease 0.1s',
        }}
      >
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero startCounters={!loading || fadeOut} />
          <Work />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
