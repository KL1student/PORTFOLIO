"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Command, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Academics", href: "/#academics" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Contact", href: "/#contact" }
  ];

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("toggle-command-palette"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "frosted-nav py-3.5 shadow-lg shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-md bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] font-semibold text-sm tracking-tighter group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)] transition-colors">
            SV
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
              Shivanandh V
            </span>
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI/ML + Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 text-xs font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Spotlight Trigger */}
          <button
            onClick={triggerCommandPalette}
            aria-label="Open Command Palette"
            className="hidden sm:flex items-center gap-2 px-2 py-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-blue-600 transition-colors"
          >
            <Command className="w-3.5 h-3.5 text-cyan-500" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[10px] text-[var(--text-tertiary)]">
              ⌘K
            </kbd>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
              className="w-9 h-9 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent)]" />
            )}
          </button>

          {/* Connect CTA */}
          <Link
            href="/#contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] hover:brightness-95 transition-colors"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-9 h-9 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-secondary)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 mt-2 bg-[var(--bg-body)]/95 border-b border-[var(--border-glass)] backdrop-blur-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg-card)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerCommandPalette();
              }}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[var(--accent)] rounded-md hover:bg-[var(--surface)] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Command className="w-4 h-4" />
                Spotlight Search
              </span>
              <kbd className="px-2 py-0.5 rounded bg-[var(--bg-surface)] text-xs text-[var(--text-tertiary)] font-mono">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
