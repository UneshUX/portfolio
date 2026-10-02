import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ExternalLink, ArrowRight, Eye, FolderKanban } from 'lucide-react';


interface SelectedWorkProps {
  onOpenHireModal: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenHireModal }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-[#FAF9F6] dark:bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-[#FF5A79] font-mono text-xs font-extrabold uppercase tracking-widest mb-3">
              <FolderKanban className="w-3.5 h-3.5" /> Selected Work
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies &amp; Product UX
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Ground-up UX case studies across healthcare, cloud SaaS, mobile concepts, and wearable tech. 
            Click any project to inspect problem statements, user flows, and interactive prototypes.
          </p>
        </div>

        {/* Product Cards Grid (2x2 on large desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/80 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:border-[#FF5A79]/40 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Cover Image Header */}
              <div className={`w-full h-64 sm:h-72 bg-gradient-to-br ${project.coverBg} dark:${project.darkCoverBg} p-6 relative flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800`}>
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full font-mono text-xs font-extrabold bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/60 dark:border-slate-700 shadow-sm">
                    {project.badge}
                  </span>
                </div>

                {/* SVG Cover Artwork Mockups */}
                {project.id === 'dr-lab' && (
                  <div className="w-full max-w-sm h-48 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-4 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#FF5A79] flex items-center justify-center text-white font-bold text-xs">
                          🩺
                        </div>
                        <div>
                          <div className="w-20 h-3 rounded-full bg-slate-900 dark:bg-white font-bold text-xs">Dr. Lab</div>
                          <div className="w-14 h-2 rounded-full bg-slate-300 dark:bg-slate-700 mt-1" />
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-pink-100 text-[#FF5A79] font-mono text-[10px] font-bold">
                        3-Step Booking
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-slate-800 border border-pink-100 dark:border-slate-700">
                        <div className="text-[10px] text-slate-400 font-mono">Blood Sugar</div>
                        <div className="text-xs font-bold text-[#FF5A79]">98 mg/dL (Normal)</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700">
                        <div className="text-[10px] text-slate-400 font-mono">Home Collector</div>
                        <div className="text-xs font-bold text-emerald-600">En Route (8 mins)</div>
                      </div>
                    </div>

                    <div className="w-full py-2 bg-[#FF5A79] text-white rounded-xl font-heading font-bold text-xs text-center shadow-xs">
                      Schedule Sample Pickup
                    </div>
                  </div>
                )}

                {project.id === 'sky-vault' && (
                  <div className="w-full max-w-sm h-48 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-4 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                          ☁️
                        </div>
                        <span className="font-heading font-bold text-xs text-slate-900 dark:text-white">Sky Vault Workspaces</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-100 text-sky-600 font-bold">
                        250 GB Free
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Design_V2.fig', 'Client_Brief.pdf', 'Demo.mp4'].map((file, i) => (
                        <div key={i} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-center">
                          <div className="w-6 h-6 mx-auto rounded-lg bg-sky-100 dark:bg-slate-700 text-sky-600 text-xs flex items-center justify-center font-bold mb-1">
                            📄
                          </div>
                          <div className="text-[10px] font-mono truncate text-slate-700 dark:text-slate-300">{file}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-semibold text-slate-500">
                      + Drag &amp; Drop files here to auto-tag
                    </div>
                  </div>
                )}

                {project.id === 'whatsapp-email' && (
                  <div className="w-full max-w-sm h-48 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-4 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between bg-emerald-600 text-white p-2.5 rounded-xl">
                      <span className="font-heading font-bold text-xs flex items-center gap-1">
                        💬 WhatsApp Business + Workmail
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 text-white">
                        Dual Mode
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-700 dark:text-slate-300">
                        📧 <strong>Invoice #104.pdf</strong> received from client@healthtech.com
                      </div>
                      <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-800 dark:text-emerald-300">
                        ✅ Approved on WhatsApp &amp; synced to Email Thread
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'bus-snap' && (
                  <div className="w-full max-w-sm h-48 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="w-36 h-36 rounded-full bg-amber-500 p-1.5 shadow-xl flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-slate-900 text-white p-3 flex flex-col items-center justify-between text-center">
                        <span className="text-[9px] font-mono text-amber-400 font-bold uppercase">Bus Snap Smartwatch</span>
                        <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center">
                          {/* Mini QR code mock */}
                          <div className="w-full h-full bg-slate-900 rounded-sm" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400">Tap to Ride • Guindy</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Content Footer */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2 group-hover:text-[#FF5A79] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-heading font-bold text-sm text-[#FF5A79] hover:text-[#E64564] group-hover:translate-x-1 transition-transform"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View on Behance"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All on Behance Button */}
        <div className="text-center">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-base text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Projects on Behance</span>
            <ExternalLink className="w-5 h-5 text-[#FF5A79]" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHireModal={onOpenHireModal}
      />
    </section>
  );
};
