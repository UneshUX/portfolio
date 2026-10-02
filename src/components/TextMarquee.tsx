import React from 'react';
import { MARQUEE_TAGLINES } from '../data/portfolioData';

export const TextMarquee: React.FC = () => {
  const marqueeItems = [...MARQUEE_TAGLINES, ...MARQUEE_TAGLINES, ...MARQUEE_TAGLINES];

  return (
    <div className="py-6 bg-[#FF5A79] text-white overflow-hidden select-none relative shadow-lg">
      <div className="flex overflow-hidden">
        <div className="animate-marquee-fast flex items-center gap-8">
          {marqueeItems.map((text, idx) => (
            <div key={`${text}-${idx}`} className="flex items-center gap-8 shrink-0">
              <span className="font-heading font-black text-lg sm:text-xl tracking-tight uppercase">
                {text}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
