"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Context & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-glass)] backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-tight text-[var(--text-secondary)]">
                OPEN FOR AI/ML & SWE ROLES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
              Engineering <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Intelligent AI</span> Systems & High-Scale Code.
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="text-[var(--text-primary)] font-semibold">Shivanandh V</span> (<code className="text-cyan-400 text-sm font-mono">@KL1student</code>). 
              Computer Science Engineer specializing in <span className="text-[var(--text-primary)] font-medium">Generative AI LLM pipelines</span>, 
              <span className="text-[var(--text-primary)] font-medium"> Satellite Computer Vision</span> (Infosys Springboard), and full-stack software architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-body)] text-sm font-semibold hover:opacity-90 transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore Architecture</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="https://github.com/KL1student"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-active)] hover:bg-[var(--bg-surface)] transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-[var(--text-secondary)]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/shivanandh-v"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-active)] hover:bg-[var(--bg-surface)] transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro-Metrics Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-glass)] w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  &lt;180ms
                </div>
                <div className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5">
                  LLM Streaming TTFB
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  94.8%
                </div>
                <div className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5">
                  SAR Oil Spill IoU
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  6+
                </div>
                <div className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5">
                  Production Repos
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Apple Squircle Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md apple-card p-6 relative overflow-hidden group">
              {/* Glowing Background Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full filter blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-all" />

              {/* Header inside Card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-glass)]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">developer_profile.json</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
              </div>

              {/* Monospace Code Visualizer */}
              <div className="bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-glass)] font-mono text-xs text-[var(--text-secondary)] space-y-2 mb-4">
                <div className="text-cyan-400">const engineer = &#123;</div>
                <div className="pl-4">name: <span className="text-emerald-400">&apos;Shivanandh V&apos;</span>,</div>
                <div className="pl-4">github: <span className="text-amber-400">&apos;KL1student&apos;</span>,</div>
                <div className="pl-4">focus: [<span className="text-purple-400">&apos;Generative AI&apos;</span>, <span className="text-purple-400">&apos;Computer Vision&apos;</span>],</div>
                <div className="pl-4">internship: <span className="text-blue-400">&apos;Infosys Springboard AI&apos;</span>,</div>
                <div className="pl-4">status: <span className="text-emerald-400">&apos;Ready for Deployment&apos;</span></div>
                <div className="text-cyan-400">&#125;;</div>
              </div>

              {/* Status Chips */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">MindMate AI</div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Gemini LLM Lead</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">SAR Oil Spill</div>
                    <div className="text-[10px] text-[var(--text-tertiary)]">Infosys AI Mentor</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Latency Pill */}
              <div className="mt-4 pt-3 border-t border-[var(--border-glass)] flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Inference Rate
                </span>
                <span className="text-emerald-400 font-medium">99.8% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
