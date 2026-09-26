import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-glass)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Column: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-[var(--accent)] flex items-center justify-center text-[var(--accent-foreground)] text-[10px] font-bold">
                SV
              </div>
              <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                Shivanandh V
              </span>
            </div>
            <p className="text-xs text-[var(--text-tertiary)] font-mono">
              AI/ML + Software Developer
            </p>
          </div>

          {/* Center Column: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KL1student"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shivanandh-v-60525a275"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-blue-400 hover:border-blue-500/30 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#top"
              className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Micro Info */}
        <div className="mt-8 pt-6 border-t border-[var(--border-glass)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[var(--text-tertiary)]">
          <div>© {new Date().getFullYear()} Shivanandh V. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Chattanchal · Kasaragod · Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
