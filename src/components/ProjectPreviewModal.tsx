"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Play, ExternalLink, Terminal, Copy, Check } from "lucide-react";
import type { Project } from "@/types";

type ModalMode = "code" | "demo";

interface ProjectPreviewModalProps {
  project: Project;
  mode: ModalMode;
  isOpen: boolean;
  onClose: () => void;
  onToggleMode: (mode: ModalMode) => void;
}

export function ProjectPreviewModal({
  project,
  mode,
  isOpen,
  onClose,
  onToggleMode,
}: ProjectPreviewModalProps) {
  const [copied, setCopied] = React.useState(false);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(project.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-[61] flex flex-col rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-body)] shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-glass)] bg-[var(--bg-surface)]">
              <div className="flex items-center gap-3">
                {/* Mode Toggle Tabs */}
                <div className="flex items-center rounded-xl bg-black/30 p-0.5 border border-[var(--border-glass)]">
                  <button
                    onClick={() => onToggleMode("code")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      mode === "code"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>View Code</span>
                  </button>
                  <button
                    onClick={() => onToggleMode("demo")}
                    disabled={!project.liveUrl}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      mode === "demo"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : project.liveUrl
                        ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent"
                        : "text-[var(--text-tertiary)] opacity-40 cursor-not-allowed border border-transparent"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>
                </div>

                {/* File name indicator */}
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-tertiary)]">
                  <Terminal className="w-3 h-3" />
                  <span>{mode === "code" ? project.codeFile : project.title}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Copy button (code mode only) */}
                {mode === "code" && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}

                {/* Open in new tab (demo mode) */}
                {mode === "demo" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-mono text-[var(--text-secondary)] hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Open in Tab</span>
                  </a>
                )}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-red-500/30 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {mode === "code" ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full overflow-auto p-5 sm:p-8 bg-black/80"
                  >
                    {/* Code header bar */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-white/40 ml-2">
                        {project.codeFile}
                      </span>
                    </div>

                    {/* Syntax-highlighted code */}
                    <pre className="text-xs sm:text-sm font-mono text-cyan-300/90 leading-relaxed whitespace-pre-wrap break-words">
                      <code>{project.code}</code>
                    </pre>
                  </motion.div>
                ) : (
                  <motion.div
                    key="demo"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {project.liveUrl ? (
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} — Live Demo`}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-center mb-4">
                          <Play className="w-6 h-6 text-[var(--text-tertiary)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                          No Live Demo Available
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-sm">
                          This project runs locally. Check out the source code or visit the GitHub repo.
                        </p>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-body)] text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
