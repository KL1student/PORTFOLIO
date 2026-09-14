"use client";

import React from "react";
import { Briefcase, Building2, Calendar, CheckCircle2, ArrowUpRight, Award, GitBranch } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AI/ML Engineering Intern (Infosys Springboard)",
      company: "Infosys Springboard",
      location: "Remote / Mentorship Track",
      period: "Springboard AI Internship Track",
      badge: "VERIFIED AI/ML INTERNSHIP",
      description:
        "Engineered deep learning computer vision architectures for environmental disaster response, analyzing Synthetic Aperture Radar (SAR) satellite imagery to detect, isolate, and segment marine oil spills.",
      highlights: [
        "Preprocessed high-resolution Sentinel-1 SAR satellite imagery with speckle noise filters & tiling pipelines.",
        "Constructed CNN & UNet deep learning segmentation models achieving 94.8% Mean IoU on validation datasets.",
        "Collaborated under industry mentor guidance with full code validation in designated repository branch."
      ],
      githubUrl:
        "https://github.com/springboardmentor112r-Agri/Oil_Spill_Detection-/tree/AI_OSD-Shivanandh_V",
      githubLabel: "Infosys AI_OSD Branch"
    },
    {
      title: "Full Stack AI Lead & Architect (MindMate)",
      company: "MindMate Platform",
      location: "AI Systems Engineering",
      period: "Flagship Project Lead",
      badge: "GENERATIVE AI & SAFETY",
      description:
        "Architected an enterprise-grade mental health support ecosystem leveraging Google Gemini LLM API (@google/genai) with real-time SSE token streaming, emotion classification, and 988 emergency escalation.",
      highlights: [
        "Designed sub-180ms TTFB Server-Sent Events (SSE) streaming engine between Node.js/Express and React+Vite.",
        "Built prompt injection defense layer and automated 988 crisis hotline escalation protocols.",
        "Maintained dual decoupled repositories for enterprise-ready backend services and modern frontend UI."
      ],
      githubUrl: "https://github.com/MindMate-mental-health-support-system/backend",
      githubLabel: "MindMate Backend Repo",
      frontendUrl: "https://github.com/MindMate-mental-health-support-system/frontend"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional & Project Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Experience & Verified Roles
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Hands-on industry internship experience with Infosys Springboard and leadership across production AI codebases.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="apple-card p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-glass)]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
                    <Award className="w-3.5 h-3.5" />
                    {exp.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 font-medium">
                    <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 font-mono text-[var(--text-tertiary)]">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Repo Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-medium text-[var(--text-primary)] hover:border-cyan-500/40 hover:text-cyan-400 transition-all shadow-sm"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>{exp.githubLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {exp.frontendUrl && (
                    <a
                      href={exp.frontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                    >
                      <span>Frontend Repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="space-y-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
