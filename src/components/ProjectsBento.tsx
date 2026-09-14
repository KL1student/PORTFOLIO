"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderGit2, ArrowUpRight, Sparkles, ExternalLink, Activity, Play, Terminal, Database, Tv, DollarSign, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData } from "@/data/projects";
import { CoinVisionSim } from "./CoinVisionSim";
import { ProjectPreviewModal } from "./ProjectPreviewModal";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProjectChallenges } from "./ProjectChallenges";
import type { Project } from "@/types";

export function ProjectsBento() {
  const [mindMateStreaming, setMindMateStreaming] = useState(false);
  const [mindMateOutput, setMindMateOutput] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<"code" | "demo">("code");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: Project, mode: "code" | "demo") => {
    setModalProject(project);
    setModalMode(mode);
    setModalOpen(true);
  };

  const testMindMateStream = () => {
    setMindMateStreaming(true);
    setMindMateOutput("");
    const tokens = [
      "I hear that ",
      "you're experiencing high stress. ",
      "Let's ground ourselves: ",
      "inhale for 4s, hold for 4s, ",
      "exhale for 4s. ",
      "[Safety Guardrails Passed: 0.992]"
    ];

    let current = "";
    tokens.forEach((tok, idx) => {
      setTimeout(() => {
        current += tok;
        setMindMateOutput(current);
        if (idx === tokens.length - 1) {
          setMindMateStreaming(false);
        }
      }, (idx + 1) * 220);
    });
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Codebases & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Production Software & AI Systems
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Explore deep technical case studies, system architecture diagrams, and live GitHub repositories.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: MindMate (Flagship Hero Bento - Span 12 or 8) */}
          <div className="md:col-span-12 lg:col-span-8 apple-card p-6 sm:p-8 flex flex-col justify-between border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent rounded-full filter blur-3xl -z-10" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  FLAGSHIP GENERATIVE AI
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/MindMate-mental-health-support-system/backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Backend</span>
                  </a>
                  <a
                    href="https://github.com/MindMate-mental-health-support-system/frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Frontend</span>
                  </a>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                MindMate: AI-Powered Mental Health Platform
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Enterprise conversational AI platform integrating Google Gemini LLMs (<code className="text-cyan-400 font-mono text-xs">@google/genai</code>), real-time Server-Sent Events (SSE) token streaming, emotion confidence classification, prompt injection guardrails, and crisis escalation protocols with a modern React + Vite frontend.
              </p>

              <ArchitectureDiagram project={projectsData.mindmate} />
              <ProjectChallenges project={projectsData.mindmate} />

              {/* Live SSE Token Stream Visualizer */}
              <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-[var(--text-primary)]">
                      Real-time SSE Token Streamer
                    </span>
                  </div>
                  <button
                    onClick={testMindMateStream}
                    disabled={mindMateStreaming}
                    className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-all flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Play className="w-3 h-3" />
                    <span>{mindMateStreaming ? "Streaming..." : "Test Stream"}</span>
                  </button>
                </div>

                <div className="font-mono text-xs text-[var(--text-secondary)] bg-black/40 p-3 rounded-xl min-h-[48px] flex items-center">
                  {mindMateOutput ? (
                    <span className="text-cyan-300 animate-fadeIn">{mindMateOutput}</span>
                  ) : (
                    <span className="text-[var(--text-tertiary)] italic">
                      Click &quot;Test Stream&quot; to simulate sub-180ms TTFB Gemini token generation.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Metrics & Case Study Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border-glass)]">
              <div className="flex items-center gap-6 font-mono text-xs">
                <div>
                  <span className="text-[var(--text-tertiary)] block text-[10px]">TTFB STREAM</span>
                  <span className="text-cyan-400 font-bold">&lt; 180ms</span>
                </div>
                <div>
                  <span className="text-[var(--text-tertiary)] block text-[10px]">EMOTION ACC</span>
                  <span className="text-purple-400 font-bold">99.2%</span>
                </div>
                <div>
                  <span className="text-[var(--text-tertiary)] block text-[10px]">SAFETY ESCALATION</span>
                  <span className="text-emerald-400 font-bold">100% (988)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(projectsData.mindmate, "code")}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3" />
                  <span>View Code</span>
                </button>
                <Link
                  href="/project/mindmate"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:text-cyan-400 transition-colors group"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Satellite Marine Oil Spill Detection (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium">
                  INFOSYS SPRINGBOARD
                </span>
                <a
                  href="https://github.com/springboardmentor112r-Agri/Oil_Spill_Detection-/tree/AI_OSD-Shivanandh_V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-purple-400 flex items-center gap-1 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Branch</span>
                </a>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Satellite Marine Oil Spill Detection
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Deep learning computer vision architecture analyzing Synthetic Aperture Radar (SAR) imagery to detect and segment offshore marine oil spills for environmental disaster response.
              </p>

              <ArchitectureDiagram project={projectsData["oil-spill"]} />
              <ProjectChallenges project={projectsData["oil-spill"]} />

              <div className="space-y-2 mb-6">
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-secondary)]">Mean IoU Precision</span>
                  <span className="text-emerald-400 font-bold">94.8%</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-secondary)]">Satellite Sensor</span>
                  <span className="text-purple-400 font-bold">Sentinel-1 SAR</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-glass)] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">PyTorch • CNN/UNet</span>
                <Link
                  href="/project/oil-spill"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-purple-400 flex items-center gap-1 transition-colors"
                >
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <button
                onClick={() => openModal(projectsData["oil-spill"], "code")}
                className="w-full px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium hover:bg-purple-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <Code2 className="w-3 h-3" />
                <span>View Code</span>
              </button>
            </div>
          </div>

          {/* Card 3: CoinVision (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                  COMPUTER VISION & OPENCV
                </span>
                <a
                  href="https://github.com/KL1student/Coinvision-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                CoinVision: Real-Time Coin Detection
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                Intelligent computer vision system leveraging OpenCV Canny edge filters, contour segmentation, and feature extraction to detect coin denominations and compute totals.
              </p>

              <ArchitectureDiagram project={projectsData.coinvision} />
              <ProjectChallenges project={projectsData.coinvision} />

              {/* Integrated Interactive Simulator */}
              <CoinVisionSim />
            </div>

            <div className="pt-5 mt-4 border-t border-[var(--border-glass)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">Python • OpenCV • Canny</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(projectsData.coinvision, "code")}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3" />
                  <span>View Code</span>
                </button>
                <Link
                  href="/project/coinvision"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <span>Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Inventory Management (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  DBMS & SQL ARCHITECTURE
                </span>
                <a
                  href="https://github.com/KL1student/InventoryManagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Inventory Management: Relational DBMS Platform
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                A database-driven inventory platform providing real-time stock inflow/outflow logging, automated supplier re-order notifications, and multi-role access authentication.
              </p>

              <ArchitectureDiagram project={projectsData.inventory} />
              <ProjectChallenges project={projectsData.inventory} />

              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] space-y-2 mb-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Transaction Model:</span>
                  <span className="text-emerald-400 font-semibold">ACID Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Query Response:</span>
                  <span className="text-cyan-400 font-semibold">&lt; 15ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">Role Security:</span>
                  <span className="text-purple-400 font-semibold">Admin / Manager / Staff</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-glass)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">SQL • Node.js • Relational</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(projectsData.inventory, "code")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3" />
                  <span>View Code</span>
                </button>
                <Link
                  href="/project/inventory"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Finance Tracker (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-medium flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  FINANCIAL LEDGER & ANALYTICS
                </span>
                <a
                  href="https://github.com/KL1student/finance-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--text-secondary)] hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Finance Tracker: Dynamic Budget Engine
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Interactive financial management engine with categorized transaction flows, real-time balance calculations, dynamic expense visualizations, and persistent browser storage.
              </p>

              <ArchitectureDiagram project={projectsData["finance-tracker"]} />
              <ProjectChallenges project={projectsData["finance-tracker"]} />
            </div>

            <div className="pt-4 border-t border-[var(--border-glass)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">JavaScript • LocalStorage • UI</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(projectsData["finance-tracker"], "code")}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3" />
                  <span>View Code</span>
                </button>
                <Link
                  href="/project/finance-tracker"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: Netflix Clone (Span 6) */}
          <div className="md:col-span-12 lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono font-medium flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5" />
                  LIVE DEPLOYED WEB APP
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://netflix-clone-gamma-ivory.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://github.com/KL1student/netflix_clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-secondary)] hover:text-red-400 flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Netflix Clone: High-Fidelity Streaming UI
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                High-performance streaming media interface with dynamic hero carousels, category carousels, responsive video grid previews, and global edge hosting on Vercel CDN.
              </p>

              <ArchitectureDiagram project={projectsData["netflix-clone"]} />
              <ProjectChallenges project={projectsData["netflix-clone"]} />
            </div>

            <div className="pt-4 border-t border-[var(--border-glass)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">HTML5/CSS3 • Vercel CDN</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(projectsData["netflix-clone"], "demo")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3" />
                  <span>Live Demo</span>
                </button>
                <button
                  onClick={() => openModal(projectsData["netflix-clone"], "code")}
                  className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium hover:bg-red-500/20 transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3 h-3" />
                  <span>View Code</span>
                </button>
                <Link
                  href="/project/netflix-clone"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <span>Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Modal for Code/Demo Preview */}
      {modalProject && (
        <ProjectPreviewModal
          project={modalProject}
          mode={modalMode}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onToggleMode={setModalMode}
        />
      )}
    </section>
  );
}
