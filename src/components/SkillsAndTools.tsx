import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Sparkles, Layers, Cpu, CheckCircle2, Wrench } from 'lucide-react';

export const SkillsAndTools: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" /> Skills &amp; Toolkit
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
            UX Methodology &amp; AI Stack
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A balanced synergy between rigorous human-centric research methods, industry-standard visual tools, and modern AI acceleration.
          </p>
        </div>

        {/* Two Rounded Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILLS_DATA.map((card, idx) => (
            <div
              key={card.title}
              className="bg-slate-50 dark:bg-slate-800/40 rounded-[32px] border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-lg hover:shadow-2xl hover:border-[#FF5A79]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${idx === 0 ? 'bg-pink-100 dark:bg-pink-950/80 text-[#FF5A79]' : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400'} flex items-center justify-center font-bold text-xl shadow-xs`}>
                      {idx === 0 ? <Sparkles className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full font-mono text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {card.badge}
                  </span>
                </div>

                {/* Skills Chips Grid */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {card.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-default ${
                        skill.highlight
                          ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-[#FF5A79]/50 shadow-sm hover:scale-105'
                          : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700'
                      }`}
                    >
                      {skill.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A79]" />}
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.5 rounded-md bg-pink-100 dark:bg-pink-950/60 text-[#FF5A79] uppercase">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-[#FF5A79]" /> Optimized for production hand-off
                </span>
                <span className="font-bold text-slate-700 dark:text-slate-300">Figma + AI Workflow</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
