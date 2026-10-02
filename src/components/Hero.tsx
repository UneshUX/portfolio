import React from 'react';
import { ArrowRight, MessageSquare, MapPin, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenHireModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#FF5A79]/15 via-purple-500/10 to-sky-400/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT FLANK ILLUSTRATION (Hidden on mobile, 3 cols on desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative group animate-float">
              {/* Card Glass Container */}
              <div className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[28px] border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-[#FF5A79]/40 transition-all duration-500">
                {/* Custom SVG Illustration: Cityscape & Diagnostic App UI */}
                <svg viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  {/* Background Soft Pastel */}
                  <rect width="240" height="260" rx="20" fill="#FFF0F3" className="dark:fill-slate-800/80" />
                  
                  {/* City Skyline Outline (Chennai landmark subtle silhouette) */}
                  <path d="M20 220 H220 V200 H190 V170 H160 V185 H130 V140 H100 V175 H70 V190 H40 V205 H20 Z" fill="#FFD6DF" className="dark:fill-slate-700/60" />
                  
                  {/* App Screen Card Floating */}
                  <rect x="35" y="30" width="130" height="170" rx="16" fill="white" className="dark:fill-slate-900" stroke="#FFE4EA" strokeWidth="2" />
                  {/* Header bar */}
                  <rect x="47" y="45" width="60" height="10" rx="5" fill="#FF5A79" />
                  <circle cx="150" cy="50" r="8" fill="#6366F1" />
                  {/* Diagnostic Test Cards */}
                  <rect x="47" y="65" width="106" height="32" rx="8" fill="#FFF5F7" className="dark:fill-slate-800" />
                  <circle cx="60" cy="81" r="7" fill="#FF5A79" />
                  <rect x="73" y="74" width="55" height="5" rx="2.5" fill="#0F172A" className="dark:fill-white" />
                  <rect x="73" y="83" width="35" height="4" rx="2" fill="#94A3B8" />
                  
                  <rect x="47" y="105" width="106" height="32" rx="8" fill="#EEF2FF" className="dark:fill-slate-800" />
                  <circle cx="60" cy="121" r="7" fill="#6366F1" />
                  <rect x="73" y="114" width="65" height="5" rx="2.5" fill="#0F172A" className="dark:fill-white" />
                  <rect x="73" y="123" width="45" height="4" rx="2" fill="#94A3B8" />

                  <rect x="47" y="145" width="106" height="38" rx="8" fill="#ECFDF5" className="dark:fill-slate-800" />
                  <rect x="57" y="157" width="86" height="14" rx="7" fill="#10B981" />

                  {/* Smart Watch Ticket Overlay Floating */}
                  <g className="animate-bounce-slow">
                    <rect x="135" y="125" width="75" height="85" rx="22" fill="#0F172A" stroke="#FF5A79" strokeWidth="2.5" />
                    <circle cx="172.5" cy="162.5" r="24" fill="#FF5A79" fillOpacity="0.2" stroke="#FF5A79" strokeDasharray="3 3" />
                    <path d="M165 162.5 L170 167.5 L180 157.5" stroke="#FF5A79" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="150" y="195" width="45" height="5" rx="2.5" fill="#94A3B8" />
                  </g>
                </svg>

                {/* Micro Badge */}
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A79]" /> Diagnostic & SaaS UI
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-[#FF5A79] font-bold">
                    Chennai Tech
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER HERO CONTENT (6 cols desktop) */}
          <div className="lg:col-span-6 text-center flex flex-col items-center">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/90 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800/60 text-[#FF5A79] dark:text-pink-300 font-medium text-xs sm:text-sm mb-6 shadow-sm hover:scale-105 transition-transform cursor-pointer">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A79] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A79]"></span>
              </span>
              <span className="font-semibold">Available for UI/UX Projects & Roles</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#FF5A79]" /> Chennai, India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6">
              Designing the Future of{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A79] via-pink-500 to-purple-600">
                Digital Experiences
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF5A79]/40" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C 50 2, 150 12, 198 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
              UI/UX Designer with <strong className="font-semibold text-slate-900 dark:text-white">2+ years of experience</strong> based in Chennai, India. 
              Crafting user-first digital products from ground-up research to hi-fi prototyping — accelerated with generative AI.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenHireModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-base text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-xl shadow-[#FF5A79]/25 hover:shadow-2xl hover:shadow-[#FF5A79]/35 hover:-translate-y-1 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Talk to me</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-base text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span>Explore Work</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A79]" /> Aspira Certified (6 Months)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> WCAG 2.1 AA Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> AI-Driven Speed
              </span>
            </div>

          </div>

          {/* RIGHT FLANK ILLUSTRATION (Hidden on mobile, 3 cols desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative group animate-float-reverse">
              {/* Card Glass Container */}
              <div className="p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[28px] border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-purple-500/40 transition-all duration-500">
                {/* Custom SVG Illustration: Friendly Designer & AI Assistant */}
                <svg viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  {/* Background Soft Pastel */}
                  <rect width="240" height="260" rx="20" fill="#F3E8FF" className="dark:fill-slate-800/80" />

                  {/* Floating Figma Design Tokens Nodes */}
                  <rect x="25" y="25" width="80" height="40" rx="10" fill="white" className="dark:fill-slate-900" stroke="#E9D5FF" strokeWidth="2" />
                  <circle cx="45" cy="45" r="8" fill="#FF5A79" />
                  <rect x="60" y="40" width="35" height="4" rx="2" fill="#0F172A" className="dark:fill-white" />
                  <rect x="60" y="48" width="25" height="3" rx="1.5" fill="#94A3B8" />

                  {/* Designer Avatar Illustration */}
                  <circle cx="120" cy="140" r="50" fill="#DDD6FE" className="dark:fill-slate-700" />
                  {/* Hair */}
                  <path d="M85 130 C85 100, 155 100, 155 130 C155 110, 85 110, 85 130 Z" fill="#1E1B4B" />
                  {/* Face */}
                  <circle cx="120" cy="135" r="30" fill="#FDE68A" />
                  {/* Glasses */}
                  <rect x="100" y="128" width="16" height="12" rx="4" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <rect x="124" y="128" width="16" height="12" rx="4" fill="none" stroke="#0F172A" strokeWidth="2.5" />
                  <line x1="116" y1="134" x2="124" y2="134" stroke="#0F172A" strokeWidth="2.5" />
                  {/* Smile */}
                  <path d="M112 150 Q120 156 128 150" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Shirt */}
                  <path d="M80 210 C80 180, 160 180, 160 210 Z" fill="#6366F1" />

                  {/* Laptop with AI Wand */}
                  <rect x="75" y="180" width="90" height="50" rx="8" fill="#0F172A" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="85" y="190" width="70" height="30" rx="4" fill="#1E1B4B" />
                  {/* Glowing Sparkle inside screen */}
                  <path d="M120 198 L123 205 L130 208 L123 211 L120 218 L117 211 L110 208 L117 205 Z" fill="#F59E0B" />

                  {/* AI Assistant Badge Floating */}
                  <g className="animate-bounce-slow">
                    <rect x="145" y="30" width="75" height="50" rx="14" fill="#8B5CF6" />
                    <text x="182.5" y="52" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="sans-serif">
                      AI UX 🪄
                    </text>
                    <text x="182.5" y="66" fontSize="8" fill="#E9D5FF" textAnchor="middle" fontFamily="sans-serif">
                      Generative Speed
                    </text>
                  </g>
                </svg>

                {/* Micro Badge */}
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" /> AI-Assisted Prototyping
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 font-bold">
                    Vibe Coding
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
