import React from 'react';
import { Sparkles, Compass, Lightbulb, Workflow, CheckCircle } from 'lucide-react';


export const IntroBlock: React.FC = () => {
  const hashtags = [
    { label: '#research', bg: 'bg-pink-100 dark:bg-pink-950/50 text-[#FF5A79] border-pink-200 dark:border-pink-800' },
    { label: '#ia', bg: 'bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800' },
    { label: '#prototyping', bg: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' },
    { label: '#accessibility', bg: 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800' },
    { label: '#ai-assisted', bg: 'bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800' },
    { label: '#design-systems', bg: 'bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800' },
  ];

  return (
    <section className="py-20 bg-white/60 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs font-extrabold uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5 text-[#FF5A79]" /> Ground-up thinking
            </div>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              I design with users first, and{' '}
              <span className="text-[#FF5A79]">AI to move faster.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Great digital products aren&apos;t built on guesswork. Drawing from my background in Electronics &amp; Instrumentation engineering, 
              I approach UI/UX with mathematical structure: deep qualitative user research, robust information architecture, 
              and accessibility standards — combined with cutting-edge AI prompting to rapidly prototype, iterate, and deliver production-ready Figma specs.
            </p>

            {/* Hashtag Chips Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {hashtags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold border ${tag.bg} hover:scale-105 transition-transform cursor-default shadow-xs`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Micro Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-pink-100 dark:bg-pink-950/60 text-[#FF5A79] rounded-2xl shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Empathy-Led</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Targeted user interviews &amp; usability testing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-2xl shrink-0">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Solid IA</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Clean mental models &amp; low friction flows</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 rounded-2xl shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">AI-Powered</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Prompting for 3x speed in design systems</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right SVG Illustration Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="p-6 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-sky-500/10 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                
                {/* SVG UX & AI Process Diagram */}
                <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                  {/* Background Board */}
                  <rect width="340" height="320" rx="24" fill="white" className="dark:fill-slate-900" stroke="#F1F5F9" strokeWidth="2" />
                  
                  {/* Outer Grid Lines */}
                  <line x1="20" y1="80" x2="320" y2="80" stroke="#F1F5F9" className="dark:stroke-slate-800" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="20" y1="160" x2="320" y2="160" stroke="#F1F5F9" className="dark:stroke-slate-800" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="20" y1="240" x2="320" y2="240" stroke="#F1F5F9" className="dark:stroke-slate-800" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Card Node 1: User Research */}
                  <g className="hover:translate-y-[-2px] transition-transform">
                    <rect x="30" y="30" width="130" height="70" rx="16" fill="#FFF0F3" className="dark:fill-pink-950/40" stroke="#FF5A79" strokeWidth="1.5" />
                    <circle cx="55" cy="65" r="14" fill="#FF5A79" />
                    <path d="M51 65 L54 68 L60 62" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <text x="78" y="58" fontSize="12" fontWeight="bold" fill="#0F172A" className="dark:fill-white" fontFamily="sans-serif">User Empathy</text>
                    <text x="78" y="74" fontSize="10" fill="#64748B" fontFamily="sans-serif">Interviews &amp; Audits</text>
                  </g>

                  {/* Arrow Connector 1 -> 2 */}
                  <path d="M160 65 Q185 65 185 100 T210 135" stroke="#FF5A79" strokeWidth="2" fill="none" strokeDasharray="3 3" />

                  {/* Card Node 2: Information Architecture */}
                  <g className="hover:translate-y-[-2px] transition-transform">
                    <rect x="180" y="105" width="130" height="70" rx="16" fill="#EEF2FF" className="dark:fill-indigo-950/40" stroke="#6366F1" strokeWidth="1.5" />
                    <circle cx="205" cy="140" r="14" fill="#6366F1" />
                    <path d="M200 135 H210 M205 130 V140 M200 145 H210" stroke="white" strokeWidth="2" />
                    <text x="228" y="133" fontSize="12" fontWeight="bold" fill="#0F172A" className="dark:fill-white" fontFamily="sans-serif">Struct IA</text>
                    <text x="228" y="149" fontSize="10" fill="#64748B" fontFamily="sans-serif">Frictionless Flows</text>
                  </g>

                  {/* Arrow Connector 2 -> 3 */}
                  <path d="M245 175 Q245 200 195 200 T160 220" stroke="#6366F1" strokeWidth="2" fill="none" strokeDasharray="3 3" />

                  {/* Card Node 3: AI-Accelerated Production */}
                  <g className="hover:translate-y-[-2px] transition-transform">
                    <rect x="30" y="210" width="280" height="80" rx="18" fill="#F3E8FF" className="dark:fill-purple-950/40" stroke="#8B5CF6" strokeWidth="2" />
                    <circle cx="65" cy="250" r="18" fill="#8B5CF6" />
                    <text x="65" y="255" fontSize="16" textAnchor="middle" fill="white">🪄</text>
                    <text x="95" y="244" fontSize="14" fontWeight="extrabold" fill="#0F172A" className="dark:fill-white" fontFamily="sans-serif">
                      AI-Assisted Figma Tokens &amp; Vibe Coding
                    </text>
                    <text x="95" y="262" fontSize="11" fill="#64748B" fontFamily="sans-serif">
                      3x faster iteration cycles • WCAG 2.1 AA accessible
                    </text>
                  </g>
                </svg>

                {/* Floating Stamp */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white font-mono text-[10px] font-bold shadow-md">
                  <CheckCircle className="w-3 h-3" /> Ground-Up Verified
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
