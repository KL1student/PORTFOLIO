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
    <div className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            Interactive architecture
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
              aria-label={`Explain ${node.label}`}
              className={`group relative min-w-[102px] rounded-xl border px-3 py-2 text-left transition-all ${
                activeNode === node.id
                  ? "border-cyan-400/60 bg-cyan-400/15 shadow-lg shadow-cyan-500/10"
                  : "border-[var(--border-glass)] bg-[var(--bg-surface)] hover:border-cyan-400/40"
              }`}
            >
              <span className="block text-[10px] font-mono text-cyan-300">{node.tech}</span>
              <span className="mt-1 block text-[11px] font-semibold text-[var(--text-primary)]">
                {node.label}
              </span>
              <Info className="absolute right-2 top-2 w-3 h-3 text-[var(--text-tertiary)] group-hover:text-cyan-300" />
            </button>
            {index < project.archNodes.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-cyan-400/50" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-xl border border-[var(--border-glass)] bg-black/20 px-3 py-2.5">
        <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
          <span className="font-semibold text-cyan-300">{selectedNode.label}:</span>{" "}
          {selectedNode.rationale}
        </p>
      </div>
      <p className="mt-2 text-[10px] text-[var(--text-tertiary)]">
        AI Guide: Hover a node to see why this technology fits the project.
      </p>
    </div>
  );
}
