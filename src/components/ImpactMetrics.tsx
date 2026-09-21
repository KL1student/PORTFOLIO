"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Target, TrendingUp, MessageCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import type { Project } from "@/types";

interface ImpactMetricsProps {
  project: Project;
}

const metricConfig = [
  {
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    glowColor: "shadow-amber-500/20",
    label: "PERFORMANCE",
  },
  {
    icon: Target,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    glowColor: "shadow-cyan-500/20",
    label: "ACCURACY",
  },
  {
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    glowColor: "shadow-emerald-500/20",
    label: "IMPACT",
  },
] as const;

export function ImpactMetrics({ project }: ImpactMetricsProps) {
  const [showGuideComment, setShowGuideComment] = useState(false);

  const metrics = [
    { value: project.metric1, sub: project.sub1 },
    { value: project.metric2, sub: project.sub2 },
    { value: project.metric3, sub: project.sub3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-3"
    >
      {/* Impact Stats Row */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        {metrics.map((metric, idx) => {
          const config = metricConfig[idx];
          const Icon = config.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              className={`flex-1 p-4 rounded-2xl ${config.bgColor} border ${config.borderColor} backdrop-blur-sm shadow-lg ${config.glowColor} hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className={`p-1 rounded-lg ${config.bgColor}`}>
                  <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${config.color}`}>
                  {config.label}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[var(--text-primary)] leading-tight">
                {metric.value}
              </div>
              <div className="text-[11px] text-[var(--text-secondary)] mt-1 leading-snug">
                {metric.sub}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Guide Impact Comment — Expandable */}
      <button
        onClick={() => setShowGuideComment(!showGuideComment)}
        className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] hover:border-cyan-500/30 transition-all group text-left"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shrink-0">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <span className="flex-1 text-xs font-medium text-[var(--text-secondary)] group-hover:text-cyan-400 transition-colors">
          AI Guide&apos;s take on this project&apos;s impact
        </span>
        {showGuideComment ? (
          <ChevronUp className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
        )}
      </button>

      <AnimatePresence>
        {showGuideComment && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex gap-3 px-4 py-3.5 rounded-xl bg-black/60 border border-cyan-500/20 backdrop-blur-md">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shrink-0 text-xs font-bold text-white shadow-sm mt-0.5">
                AI
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-400 mb-1">
                  Shivanandh&apos;s AI Guide
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  &quot;{project.guideImpactComment}&quot;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
