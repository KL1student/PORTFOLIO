"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, Cpu } from "lucide-react";

export function AcademicsBento() {
  const coursework = [
    { name: "Data Structures & Algorithms", code: "CS201", grade: "Core" },
    { name: "Deep Learning & Neural Networks", code: "AI302", grade: "Advanced" },
    { name: "Computer Vision & Processing", code: "CV304", grade: "Advanced" },
    { name: "Relational DBMS & SQL Architecture", code: "DB205", grade: "Core" },
    { name: "Operating Systems & Concurrency", code: "CS208", grade: "Core" },
    { name: "Machine Learning & Statistical Methods", code: "ML301", grade: "Advanced" }
  ];

  return (
    <section id="academics" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Education & Certifications
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Rigorous undergraduate education in Computer Science with a specialization in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: B.Tech Degree (Span 6) */}
          <div className="lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  2022 – 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                Bachelor of Technology (B.Tech)
              </h3>
              <div className="text-sm font-semibold text-cyan-400 mb-4">
                Computer Science & Engineering (Specialization in AI & ML)
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Pursuing deep foundational and applied computer science curriculum with strong emphasis on algorithmic problem solving, machine learning model architectures, and distributed systems.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Department of Computer Science
              </span>
              <span className="text-emerald-400 font-semibold">Active Major</span>
            </div>
          </div>

          {/* Card 2: Infosys Springboard Certification (Span 6) */}
          <div className="lg:col-span-6 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium">
                  PROFESSIONAL CERTIFICATION
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                Infosys Springboard AI/ML Internship Track
              </h3>
              <div className="text-sm font-semibold text-purple-400 mb-4">
                Deep Learning & Satellite Computer Vision
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Comprehensive training and project completion in remote sensing, deep neural networks, and Synthetic Aperture Radar (SAR) segmentation pipelines with hands-on code reviews.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)]">Mentor: Springboard AI Lead</span>
              <span className="text-purple-400 font-semibold">94.8% IoU Achieved</span>
            </div>
          </div>

          {/* Card 3: Key Coursework Pills (Span 12) */}
          <div className="lg:col-span-12 apple-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Core Undergraduate Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursework.map((course) => (
                <div
                  key={course.name}
                  className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {course.name}
                    </div>
                    <div className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5">
                      {course.code}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[11px] font-mono text-cyan-400">
                    {course.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
