import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, MessageSquare, Layers } from 'lucide-react';


interface ProcessFrameworkProps {
  onOpenHireModal: () => void;
}

export const ProcessFramework: React.FC<ProcessFrameworkProps> = ({ onOpenHireModal }) => {
  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Mascot Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" /> My UX Framework
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
              A 5-Step Ground-Up Design Process
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              From qualitative interviews to verified hi-fi design systems. Every stage is engineered to eliminate risk, maintain accessibility, and accelerate dev hand-off.
            </p>
          </div>

          {/* Cute Mascot Illustration Beside Header */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-4 bg-gradient-to-tr from-pink-100 via-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md flex items-center gap-4">
              {/* Mascot SVG */}
              <div className="w-16 h-16 rounded-2xl bg-[#FF5A79] flex items-center justify-center text-3xl shadow-inner shrink-0 animate-bounce-slow">
                🦊
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-white block">
                  &ldquo;Pixel-Perfect Mascot&rdquo;
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Guiding every sprint from research to delivery.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-slate-50 dark:bg-slate-800/40 p-6 rounded-[28px] border border-slate-200/80 dark:border-slate-800 hover:border-[#FF5A79] dark:hover:border-[#FF5A79] hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-extrabold text-3xl text-slate-300 dark:text-slate-700 group-hover:text-[#FF5A79] transition-colors">
                    {step.number}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border ${step.bgTint}`}>
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1 text-[11px] font-mono text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Stage {idx + 1} Output Ready
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-base text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-xl shadow-[#FF5A79]/20 hover:shadow-2xl hover:shadow-[#FF5A79]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start a project together using this framework</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
