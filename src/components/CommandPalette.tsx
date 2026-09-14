"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Command, ArrowRight, FolderGit2, Briefcase, GraduationCap, Trophy, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const items = [
    {
      type: "Flagship AI",
      title: "MindMate: Generative AI Platform",
      sub: "Gemini LLM, SSE streaming, emotion classification",
      action: () => router.push("/project/mindmate"),
      icon: FolderGit2
    },
    {
      type: "Internship",
      title: "Infosys Springboard: SAR Oil Spill Detection",
      sub: "Deep Learning satellite computer vision pipeline",
      action: () => router.push("/project/oil-spill"),
      icon: Briefcase
    },
    {
      type: "Project",
      title: "CoinVision: OpenCV Detection",
      sub: "Canny edge & contour recognition system",
      action: () => router.push("/project/coinvision"),
      icon: FolderGit2
    },
    {
      type: "Project",
      title: "Inventory Management: Relational DBMS",
      sub: "SQL schema, ACID transactions, access control",
      action: () => router.push("/project/inventory"),
      icon: FolderGit2
    },
    {
      type: "Project",
      title: "Finance Tracker: Dynamic Budget Engine",
      sub: "JavaScript analytics, transaction ledger",
      action: () => router.push("/project/finance-tracker"),
      icon: FolderGit2
    },
    {
      type: "Project",
      title: "Netflix Clone: Streaming UI",
      sub: "Live deployed on Vercel edge network",
      action: () => router.push("/project/netflix-clone"),
      icon: FolderGit2
    },
    {
      type: "Navigation",
      title: "Jump to About & Architecture",
      sub: "System design principles & stack pills",
      action: () => scrollToSection("about"),
      icon: Command
    },
    {
      type: "Navigation",
      title: "Jump to Academics & Coursework",
      sub: "B.Tech in CSE (AI/ML) & Springboard Cert",
      action: () => scrollToSection("academics"),
      icon: GraduationCap
    },
    {
      type: "Navigation",
      title: "Jump to Achievements & Milestones",
      sub: "Recognitions and verified engineering deliverables",
      action: () => scrollToSection("achievements"),
      icon: Trophy
    },
    {
      type: "Navigation",
      title: "Jump to Contact Form",
      sub: "Direct message dispatch & quick templates",
      action: () => scrollToSection("contact"),
      icon: Mail
    },
    {
      type: "External",
      title: "GitHub Profile (@KL1student)",
      sub: "Explore all open source repositories",
      action: () => window.open("https://github.com/KL1student", "_blank"),
      icon: GithubIcon
    },
    {
      type: "External",
      title: "LinkedIn Profile",
      sub: "Connect professionally on LinkedIn",
      action: () => window.open("https://linkedin.com/in/shivanandh-v", "_blank"),
      icon: LinkedinIcon
    }
  ];

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.sub.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  // Global Shortcut Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation within results
  const handleItemNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[var(--bg-body)]/95 border border-[var(--border-active)] shadow-2xl overflow-hidden z-10">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-glass)]">
          <Search className="w-4 h-4 text-cyan-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleItemNavigation}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none font-medium"
          />
          <kbd className="px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-tertiary)] border border-[var(--border-glass)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-[var(--text-tertiary)]">
              No matching commands or projects found for &quot;{query}&quot;.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-[var(--bg-surface)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--bg-surface)] text-[var(--text-tertiary)]">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--text-tertiary)] mt-0.5 font-normal">
                        {item.sub}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-0.5" : "text-[var(--text-tertiary)]"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[var(--bg-surface)] border-t border-[var(--border-glass)] flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
          <span>Use ↑ ↓ to navigate</span>
          <span>Press Enter to select</span>
        </div>
      </div>
    </div>
  );
}
