import React, { useState } from 'react';
import { STAT_COUNTERS } from '../data/portfolioData';
import { Clock, MapPin, CheckCircle, Sparkles, ChevronRight, Activity, Award } from 'lucide-react';


export const FeaturedMockup: React.FC = () => {
  // Interactive Live Mockup State
  const [selectedTest, setSelectedTest] = useState<'hba1c' | 'thyroid' | 'cbc'>('hba1c');
  const [selectedSlot, setSelectedSlot] = useState<'morning' | 'afternoon'>('morning');
  const [booked, setBooked] = useState(false);

  const testOptions = {
    hba1c: { name: 'HbA1c Blood Sugar Test', price: '₹499', fasting: '8 Hrs Fasting Required', color: 'border-pink-500 bg-pink-50 dark:bg-pink-950/40 text-[#FF5A79]' },
    thyroid: { name: 'Thyroid Profile (T3, T4, TSH)', price: '₹699', fasting: 'No Fasting Needed', color: 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300' },
    cbc: { name: 'Complete Blood Count (CBC)', price: '₹399', fasting: 'Fasting Optional', color: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300' },
  };

  return (
    <section className="py-24 bg-[#FAF9F6] dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-[#FF5A79] font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
            <Activity className="w-3.5 h-3.5" /> Featured Interactive Prototype
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-4">
            Live Interactive Screen — Dr. Lab Booking
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Try out the interactive 3-step diagnostic booking flow designed by Unesh. Test slot selection and instant confirmation.
          </p>
        </div>

        {/* Main Large Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-[36px] border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: LIVE INTERACTIVE MOCKUP WIDGET (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-pink-50 via-purple-50/50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-pink-950/30 p-6 sm:p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-inner">
                
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FF5A79] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      🩺
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                        Dr. Lab Diagnostics
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF5A79]" /> Chennai • Home Sample Pickup
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 font-mono text-xs font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Flow
                  </span>
                </div>

                {/* Step 1: Select Diagnostic Test */}
                <div className="space-y-4 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    1. Select Diagnostic Package
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(Object.keys(testOptions) as Array<keyof typeof testOptions>).map((key) => {
                      const item = testOptions[key];
                      const isSelected = selectedTest === key;
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            setSelectedTest(key);
                            setBooked(false);
                          }}
                          className={`p-3.5 rounded-2xl border text-left transition-all ${
                            isSelected
                              ? `${item.color} shadow-md`
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <div className="font-heading font-bold text-xs mb-1 line-clamp-1">{item.name}</div>
                          <div className="flex items-center justify-between text-[11px] font-semibold">
                            <span>{item.price}</span>
                            <span className="text-[10px] opacity-80">{item.fasting}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Time Slot Picker */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF5A79]" /> 2. Pick Phlebotomist Arrival Slot
                  </span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setSelectedSlot('morning');
                        setBooked(false);
                      }}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                        selectedSlot === 'morning'
                          ? 'border-[#FF5A79] bg-white dark:bg-slate-800 text-[#FF5A79] shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>🌅 Tomorrow 07:00 AM - 08:00 AM</span>
                      {selectedSlot === 'morning' && <CheckCircle className="w-4 h-4 text-[#FF5A79]" />}
                    </button>

                    <button
                      onClick={() => {
                        setSelectedSlot('afternoon');
                        setBooked(false);
                      }}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                        selectedSlot === 'afternoon'
                          ? 'border-[#FF5A79] bg-white dark:bg-slate-800 text-[#FF5A79] shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>☀️ Tomorrow 11:00 AM - 12:00 PM</span>
                      {selectedSlot === 'afternoon' && <CheckCircle className="w-4 h-4 text-[#FF5A79]" />}
                    </button>
                  </div>
                </div>

                {/* CTA Action Bar */}
                {!booked ? (
                  <button
                    onClick={() => setBooked(true)}
                    className="w-full py-4 rounded-2xl font-heading font-bold text-sm text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-lg shadow-[#FF5A79]/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm 3-Tap Booking ({testOptions[selectedTest].price})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-1 animate-in zoom-in-95 duration-200">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white mb-1">
                      ✓
                    </div>
                    <h5 className="font-heading font-bold text-sm text-emerald-900 dark:text-emerald-200">
                      Sample Pickup Booked!
                    </h5>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      Phlebotomist assigned. Live GPS tracking link sent to registered mobile.
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: 3 ANIMATED STAT COUNTERS (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF5A79]">
                <Award className="w-4 h-4" /> UX Performance Metrics
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                Designing for Measurable UX Impact
              </h3>

              {/* 3 Stat Cards */}
              <div className="space-y-4">
                {STAT_COUNTERS.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#FF5A79] transition-colors"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-heading font-black text-4xl text-[#FF5A79]">
                        {stat.prefix}{stat.value}{stat.suffix}
                      </span>
                      <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* EDITABLE PLACEHOLDER BENCHMARK BANNER NOTE */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-pink-50/60 dark:bg-pink-950/20 p-4 rounded-2xl text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF5A79] shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-white">Designer Note:</strong> Metrics shown above are design benchmark target placeholders open for client customization.
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#FF5A79] font-bold shrink-0">
              [Editable Benchmark Placeholder]
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
