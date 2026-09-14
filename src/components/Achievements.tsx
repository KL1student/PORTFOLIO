"use client";

import React from "react";
import { Trophy, Award, CheckCircle2, Sparkles, Star, GitCommit } from "lucide-react";

export function Achievements() {
  const milestones = [
    {
      title: "Infosys Springboard AI/ML Verified Project",
      issuer: "Infosys Springboard Track",
      desc: "Recognized for building end-to-end Satellite Marine Oil Spill Segmentation pipeline reaching 94.8% Mean IoU.",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "MindMate Generative AI Architecture",
      issuer: "Production AI Ecosystem",
      desc: "Designed sub-180ms TTFB token streaming engine with real-time emotion classification and 988 emergency escalation.",
      icon: Sparkles,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "6+ Production Repositories",
      issuer: "GitHub @KL1student",
      desc: "Architected full-stack apps, computer vision detection tools, relational DBMS schemas, and cloud deployments.",
      icon: GitCommit,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Key Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Verified Achievements
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Recognitions, competitive project milestones, and engineering deliverables.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="apple-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bg} border flex items-center justify-center ${item.color} mb-6`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                    {item.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-glass)] flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Deliverable</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
