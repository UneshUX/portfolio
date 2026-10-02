import React, { useState } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle, Sparkles, Clock, Wrench, FileText, Layers, Award, Target } from 'lucide-react';
import type { Project } from '../types';


interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenHireModal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenHireModal }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'flow' | 'screens' | 'outcomes'>('overview');

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#0B0F17] rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.coverBg} dark:${project.darkCoverBg} border-b border-slate-200/80 dark:border-slate-800 relative shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-[#FF5A79] hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 shadow-xs">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full font-mono text-xs font-bold text-white bg-[#FF5A79]">
              {project.badge}
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white mb-2">
            {project.title} — <span className="font-semibold text-slate-700 dark:text-slate-300">{project.subtitle}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {caseStudy.overview}
          </p>

          {/* Quick Meta Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-900/10 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300">
            <div>
              <span className="block text-[10px] uppercase font-mono text-slate-400 font-bold">Role</span>
              <span className="font-semibold text-slate-900 dark:text-white">{caseStudy.role}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-mono text-slate-400 font-bold flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#FF5A79]" /> Timeline
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">{caseStudy.timeline}</span>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <span className="block text-[10px] uppercase font-mono text-slate-400 font-bold flex items-center gap-1">
                <Wrench className="w-3 h-3 text-indigo-500" /> Key Tools
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {caseStudy.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-6 py-2 gap-2 shrink-0">
          {[
            { id: 'overview', label: 'Problem & Solution', icon: Target },
            { id: 'research', label: 'Research & Personas', icon: FileText },
            { id: 'flow', label: 'User Flow', icon: Layers },
            { id: 'screens', label: 'Hi-Fi Showcase', icon: Sparkles },
            { id: 'outcomes', label: 'Impact & Results', icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-heading font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#FF5A79] text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Tab Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          
          {/* TAB 1: OVERVIEW (Problem & Solution) */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                <h3 className="font-heading font-bold text-lg text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> The Problem Statement
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                <h3 className="font-heading font-bold text-lg text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" /> The Proposed UX Solution
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Key Features Grid */}
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-4">
                  Core Solution Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                      <h5 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {feat.title}
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESEARCH & PERSONAS */}
          {activeTab === 'research' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                  Key Research Insights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.researchInsights.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-900/40">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                        Insight #0{idx + 1}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                  User Personas &amp; Pain Points
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.userPersonas.map((persona, idx) => (
                    <div key={idx} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#FF5A79]/20 text-[#FF5A79] flex items-center justify-center font-heading font-bold text-base">
                          {persona.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{persona.name}</h4>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{persona.role}</span>
                        </div>
                      </div>
                      <blockquote className="p-3 rounded-2xl bg-white dark:bg-slate-900 text-xs italic text-slate-600 dark:text-slate-300 border-l-4 border-[#FF5A79] mb-3">
                        &ldquo;{persona.quote}&rdquo;
                      </blockquote>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        <strong className="text-slate-700 dark:text-slate-300">Pain Point:</strong> {persona.painPoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: USER FLOW */}
          {activeTab === 'flow' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                Ground-Up User Journey Architecture
              </h3>
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col gap-4">
                  {caseStudy.userFlowSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#FF5A79] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="flex-1 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-heading font-medium text-sm text-slate-800 dark:text-slate-200 shadow-xs">
                        {step}
                      </div>
                      {idx < caseStudy.userFlowSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HI-FI SCREENS */}
          {activeTab === 'screens' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                Hi-Fidelity Interface Showcase
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.screens.map((screen, idx) => (
                  <div key={idx} className="p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                    {/* SVG Graphic Mockup Card */}
                    <div className="w-full h-48 rounded-2xl bg-gradient-to-tr from-pink-100/60 via-indigo-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200/60 dark:border-slate-700 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                      <div className="w-40 h-36 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-700 p-3 flex flex-col gap-2 group-hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                          <div className="w-12 h-2.5 rounded-full bg-[#FF5A79]" />
                          <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        </div>
                        <div className="w-full h-8 rounded-lg bg-pink-50 dark:bg-slate-800 p-1.5 flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-[#FF5A79]" />
                          <div className="w-16 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                        </div>
                        <div className="w-full h-12 rounded-lg bg-emerald-50 dark:bg-slate-800 p-1.5 flex items-center gap-1.5">
                          <div className="w-full h-3 rounded-full bg-emerald-500" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900/80 text-white">
                        {screen.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{screen.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{screen.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: OUTCOMES */}
          {activeTab === 'outcomes' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
                Measurable UX Impact &amp; Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {caseStudy.outcomes.map((metric, idx) => (
                  <div key={idx} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF5A79] block mb-1">
                      {metric.metric}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#FF5A79]"
          >
            <span>View full case study presentation on Behance</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-heading font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenHireModal();
              }}
              className="px-6 py-2.5 rounded-full font-heading font-bold text-xs text-white bg-[#FF5A79] hover:bg-[#E64564] shadow-md shadow-[#FF5A79]/20"
            >
              Discuss a similar project
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
