import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, MessageSquareQuote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-[#FF5A79] font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Testimonials
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
            Words From Clients &amp; Mentors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Endorsements highlighting my problem-solving speed, Figma design systems rigor, and ground-up research discipline.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 dark:bg-slate-800/40 rounded-[32px] border border-slate-200/80 dark:border-slate-800 p-8 shadow-lg hover:shadow-2xl hover:border-[#FF5A79]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Rating & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                    Verified Feedback
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl ${t.avatarBg} flex items-center justify-center font-heading font-bold text-sm shrink-0 shadow-xs`}>
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} • <strong className="text-slate-700 dark:text-slate-300 font-semibold">{t.organization}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note Banner for Unesh to edit reviews */}
        <div className="p-4 rounded-2xl bg-pink-50/80 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/40 text-center max-w-2xl mx-auto text-xs text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF5A79]" />
          <span>
            <strong className="text-slate-900 dark:text-white">Note for Unesh:</strong> The testimonials above contain marked placeholder quotes. You can easily edit them in <code className="font-mono text-[#FF5A79]">portfolioData.ts</code> with real feedback!
          </span>
        </div>

      </div>
    </section>
  );
};
