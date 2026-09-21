"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Context & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-blue-600 uppercase tracking-wider">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-tight text-[var(--text-secondary)]">
                OPEN FOR AI/ML & SWE ROLES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.04] mb-6 max-w-4xl">
              AI/ML systems and software that make complex work clearer.
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="text-[var(--text-primary)] font-semibold">Shivanandh V</span> (<code className="text-cyan-500 text-sm font-mono">@KL1student</code>).
              Computer Science Engineer specializing in <span className="text-[var(--text-primary)] font-medium">Generative AI LLM pipelines</span>, 
              <span className="text-[var(--text-primary)] font-medium">Satellite Computer Vision</span> (Infosys Springboard), and <span className="text-blue-600 font-semibold">Full Stack</span> software architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 group"
              >
                <span>Explore Architecture</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="https://github.com/KL1student"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-white border border-[var(--border-active)] text-sm font-medium text-[var(--text-primary)] hover:border-blue-300 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-[var(--text-secondary)]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/shivanandh-v"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg bg-white border border-[var(--border-active)] text-sm font-medium text-[var(--text-primary)] hover:border-blue-300 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro-Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--border-glass)] w-full max-w-lg">
              <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-card)]/80 p-3 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.28)]">
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  &lt;180ms
                </div>
                <div className="text-[11px] font-mono text-[var(--text-tertiary)] mt-1">
                  LLM Streaming TTFB
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-card)]/80 p-3 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.28)]">
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  94.8%
                </div>
                <div className="text-[11px] font-mono text-[var(--text-tertiary)] mt-1">
                  SAR Oil Spill IoU
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-card)]/80 p-3 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.28)]">
                <div className="text-2xl font-bold font-mono tracking-tight text-[var(--text-primary)]">
                  6+
                </div>
                <div className="text-[11px] font-mono text-[var(--text-tertiary)] mt-1">
                  Production Repos
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Selected work index */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md border-t-2 border-[var(--text-primary)] pt-5">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)]">Selected work</span>
                <span className="text-xs font-mono text-blue-600">01—06</span>
              </div>
              <div className="space-y-0">
                {[
                  ["01", "MindMate", "Generative AI platform"],
                  ["02", "SAR Oil Spill Detection", "Satellite computer vision"],
                  ["03", "CoinVision", "OpenCV detection system"]
                ].map(([number, title, detail]) => (
                  <Link key={number} href="#projects" className="group flex items-start gap-4 py-4 border-b border-[var(--border-glass)]">
                    <span className="text-xs font-mono text-[var(--text-tertiary)] pt-1">{number}</span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-[var(--text-primary)] group-hover:text-blue-600 transition-colors">{title}</span>
                      <span className="block text-sm text-[var(--text-secondary)] mt-1">{detail}</span>
                    </span>
                    <ArrowDown className="w-4 h-4 text-[var(--text-tertiary)] -rotate-45 group-hover:text-blue-600 transition-colors" />
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-6 text-xs font-mono text-[var(--text-tertiary)]">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Focused on useful, reliable systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
