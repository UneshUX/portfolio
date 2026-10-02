import React from 'react';
import { DOMAINS } from '../data/portfolioData';

export const DomainMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...DOMAINS, ...DOMAINS, ...DOMAINS];

  return (
    <section className="py-8 bg-slate-100/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold text-slate-400 dark:text-slate-500">
          Domains I&apos;ve Designed For
        </span>
      </div>

      {/* Gradient Fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-100 dark:from-[#0B0F17] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 dark:from-[#0B0F17] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeItems.map((domain, index) => (
            <div
              key={`${domain.name}-${index}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-[#FF5A79] dark:hover:border-[#FF5A79] hover:-translate-y-0.5 transition-all duration-300 shrink-0 group cursor-default"
            >
              <span className="text-xl group-hover:scale-125 transition-transform duration-300">{domain.icon}</span>
              <span className="font-heading font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#FF5A79] dark:hover:text-[#FF5A79] transition-colors">
                {domain.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-pink-100 group-hover:text-[#FF5A79] transition-colors">
                {domain.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
