"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Code2, Radar, Activity, CheckCircle2, Layers, ShieldAlert, Sparkles } from "lucide-react";

export function AboutBento() {
  const [ping, setPing] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(20 + Math.random() * 8));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stackCategories = [
    {
      category: "Generative AI & ML",
      skills: ["Google Gemini (@google/genai)", "PyTorch", "OpenCV", "SSE Streaming", "Hugging Face", "SAR Segmentation"]
    },
    {
      category: "Full Stack & Web",
      skills: ["Next.js 15", "React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "RESTful APIs"]
    },
    {
      category: "Systems & Infrastructure",
      skills: ["Relational DBMS", "SQL", "Git / GitHub", "Vercel Edge", "Linux / Shell", "Client-Side Caching"]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Architecture & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Engineering Precision. Scalable Systems.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            A comprehensive overview of my technical stack, engineering principles, and deep learning research workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Engineering DNA (Span 7) */}
          <div className="md:col-span-7 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                Architecting at the Intersection of AI & Web Performance
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                I specialize in building intelligent, human-centric software systems. From training deep learning UNet architectures for environmental satellite imagery to orchestrating sub-second streaming LLMs with prompt safety guardrails, my focus is always on high performance, clean architecture, and reliable execution.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[var(--border-glass)]">
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)]">
                <div className="text-xs font-mono text-cyan-400">01. Model Tuning</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">SAR & Vision Transformers</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)]">
                <div className="text-xs font-mono text-purple-400">02. LLM Streaming</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">SSE Token Concurrency</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-emerald-400">03. Production Web</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">Next.js & Vercel Edge</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Live Latency & Runtime Monitor (Span 5) */}
          <div className="md:col-span-5 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SYSTEM ACTIVE
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Live Runtime Health
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">
                Simulated telemetric monitoring across deployed AI models and edge services.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">Edge Latency</span>
                  <span className="text-cyan-400 font-semibold">{ping} ms</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">Safety Guardrails</span>
                  <span className="text-emerald-400 font-semibold">100% Defense</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">Infosys Benchmark</span>
                  <span className="text-purple-400 font-semibold">94.8% IoU</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[var(--text-tertiary)] pt-4 mt-4 border-t border-[var(--border-glass)]">
              Last synchronized: Today • Edge node ap-south-1
            </div>
          </div>

          {/* Bento Card 3: Deep Stack Breakdown (Span 12) */}
          <div className="md:col-span-12 apple-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Technical Mastery & Tooling
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {stackCategories.map((group) => (
                <div
                  key={group.category}
                  className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)]"
                >
                  <div className="text-xs font-mono font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
