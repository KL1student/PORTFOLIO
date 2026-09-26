"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import type { Project } from "@/types";

interface ProjectChallengesProps {
  project: Project;
}

export function ProjectChallenges({ project }: ProjectChallengesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--surface)]">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={`challenge-details-${project.id}`}
        className="flex w-full items-center gap-2 px-4 py-3 text-left text-[var(--foreground)]"
      >
        <CircleHelp className="h-3.5 w-3.5 text-[var(--accent)]" />
        <span className="flex-1 text-xs font-semibold text-[var(--text-primary)]">
          What was hard?
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--foreground-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div id={`challenge-details-${project.id}`} className="border-t border-[var(--border)] px-4 pb-4 pt-3">
          <p className="text-xs leading-relaxed text-[var(--foreground-secondary)]">
            {project.challengeDetails}
          </p>
        </div>
      )}
    </div>
  );
}
