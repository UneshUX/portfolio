import React from 'react';
import { BENEFIT_CARDS, TIMELINE } from '../data/portfolioData';
import { User, Cpu, Users, GraduationCap, ShieldCheck, MapPin, Calendar, Award, Sparkles } from 'lucide-react';

export const AboutJourney: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#FF5A79]" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default: return <User className="w-6 h-6 text-[#FF5A79]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-[#FF5A79] font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" /> Beyond The Screen
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            About Me &amp; My Journey
          </h2>
        </div>

        {/* Two Column Top Layout: Photo Placeholder & Bio Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* PHOTO PLACEHOLDER CARD (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200/80 dark:border-slate-800 p-6 shadow-xl relative overflow-hidden">
                
                {/* Profile Placeholder Image / SVG Graphic */}
                <div className="w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-tr from-pink-200 via-purple-100 to-amber-100 dark:from-slate-800 dark:via-pink-950/40 dark:to-slate-800 border border-slate-200/60 dark:border-slate-700 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  
                  {/* Avatar SVG Placeholder */}
                  <div className="w-32 h-32 rounded-full bg-white dark:bg-slate-900 p-2 shadow-lg mb-4 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#FF5A79] to-indigo-500 flex items-center justify-center font-heading font-black text-4xl text-white">
                      UG
                    </div>
                  </div>

                  <span className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-1">
                    Unesh G
                  </span>

                  <span className="text-xs font-semibold text-[#FF5A79] bg-pink-50 dark:bg-pink-950/60 px-3 py-1 rounded-full mb-3">
                    UI/UX & Product Designer • Chennai, India
                  </span>

                  <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    📷 [Profile Photo Placeholder — Replace with Unesh&apos;s Headshot]
                  </div>

                </div>

                {/* Status Badge */}
                <div className="mt-4 flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <span className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" /> Open for UI/UX roles
                  </span>
                  <span className="text-slate-400 font-mono">Chennai &amp; Remote</span>
                </div>

              </div>
            </div>
          </div>

          {/* BIO STORY (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
              Bridging Hardware Analytical Precision with Human-Centered UI/UX
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              My path into UI/UX design began in engineering. Graduating with a degree in <strong className="text-slate-900 dark:text-white">Electronics &amp; Instrumentation</strong> from Anna University affiliated college, 
              I started my career as an Electronics Engineer at Coromandel Electronics, designing precision SMD circuit boards.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              I realized that whether you are laying out physical component traces on a circuit board or constructing a software user interface, the fundamental goal is identical: <em className="italic text-[#FF5A79] font-medium">eliminating noise, establishing clear signal flows, and crafting intuitive interactions.</em>
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              To formalize my transition into digital product design, I completed <strong className="text-slate-900 dark:text-white">6 months of intensive training</strong> at the prestigious <strong className="text-slate-900 dark:text-white">Aspira Design Institute</strong>. Today, as a UI/UX & Product Designer at GMIndia, I specialize in healthcare diagnostics, cloud SaaS apps, smartwatch interfaces, and AI-driven prototyping workflows.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-950/60 text-[#FF5A79] font-mono text-xs font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Aspira UI/UX Certified
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-mono text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> AI Prompt Engineering
              </span>
            </div>
          </div>

        </div>

        {/* 4 Benefit-Style Cards Grid */}
        <div className="mb-20">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-8">
            Why Teams Enjoy Working With Me
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFIT_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/80 dark:border-slate-800 p-6 shadow-md hover:shadow-xl hover:border-[#FF5A79]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                    {getIcon(card.icon)}
                  </div>

                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 dark:text-slate-500 block mb-1">
                    {card.subtitle}
                  </span>

                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Timeline Section */}
        <div className="p-8 sm:p-10 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-[#FF5A79]" />
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
              Career Timeline &amp; Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-pink-50/70 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900/50'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/70 dark:border-slate-700/60'
                }`}
              >
                <span className="px-2.5 py-1 rounded-full font-mono text-[10px] font-extrabold bg-[#FF5A79] text-white inline-block mb-3">
                  {item.period}
                </span>

                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>

                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {item.organization}
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FF5A79]" /> {item.location} • {item.type}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
