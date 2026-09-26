"use client";

import { useState } from "react";
import { ArrowRight, Cpu, Info } from "lucide-react";
import type { Project } from "@/types";

interface ArchitectureDiagramProps {
  project: Project;
}

export function ArchitectureDiagram({ project }: ArchitectureDiagramProps) {
  const [activeNode, setActiveNode] = useState(project.archNodes[0]?.id);
  const selectedNode = project.archNodes.find((node) => node.id === activeNode) ?? project.archNodes[0];

  if (!selectedNode) return null;

  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)]">
            Architecture flow
          </span>
        </div>
        <span className="text-[10px] text-[var(--text-tertiary)]">Hover or select a node</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
        {project.archNodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onMouseEnter={() => setActiveNode(node.id)}
              onFocus={() => setActiveNode(node.id)}
              onClick={() => setActiveNode(node.id)}
              aria-pressed={activeNode === node.id}
              aria-label={`Explain ${node.label}`}
              className={`group relative min-w-[102px] rounded-xl border px-3 py-2 text-left transition-all ${
                activeNode === node.id
                  ? "border-[var(--accent)] bg-[var(--surface-muted)]"
                    : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]"
              }`}
            >
              <span className="block text-[10px] font-mono text-[var(--accent)]">{node.tech}</span>
              <span className="mt-1 block text-[11px] font-semibold text-[var(--text-primary)]">
                {node.label}
              </span>
              <Info className="absolute right-2 top-2 w-3 h-3 text-[var(--foreground-muted)] group-hover:text-[var(--accent)]" />
            </button>
            {index < project.archNodes.length - 1 && (
              <ArrowRight className={`w-3.5 h-3.5 shrink-0 text-[var(--foreground-muted)] transition-transform ${activeNode === node.id ? "translate-x-0.5" : ""}`} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2.5">
        <p className="text-[11px] leading-relaxed text-[var(--foreground-secondary)]">
          <span className="font-semibold text-[var(--accent)]">{selectedNode.label}:</span>{" "}
          {selectedNode.rationale}
        </p>
      </div>
      <p className="mt-2 text-[10px] text-[var(--text-tertiary)]">
        Select an architecture step to see its role in the project.
      </p>
    </div>
  );
}
