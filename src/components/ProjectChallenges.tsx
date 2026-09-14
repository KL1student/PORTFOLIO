"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { Project } from "@/types";

interface ProjectChallengesProps {
  project: Project;
}

export function ProjectChallenges({ project }: ProjectChallengesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.04]">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2 px-4 py-3 text-left"
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
        <span className="flex-1 text-xs font-semibold text-[var(--text-primary)]">
          What was hard?
        </span>
        <ChevronDown
          className={`h-4 w-4 text-amber-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-amber-500/15 px-4 pb-4 pt-3">
          <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
            {project.challengeDetails}
          </p>
          <p className="mt-2 text-[10px] font-mono text-amber-300/80">
            AI Guide: That one was tough — the challenge shaped the final architecture.
          </p>
        </div>
      )}
    </div>
  );
}
