"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(5px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay }
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start lg:col-span-7">
          <motion.p {...enter(0.04)} className="mb-4 text-sm font-semibold text-[var(--accent)]">
            AI/ML + Software Developer <span className="px-1.5 text-[var(--foreground-muted)]" aria-hidden="true">/</span> CSE Graduate
          </motion.p>
          <motion.h1 {...enter(0.12)} className="mb-5 max-w-3xl text-5xl leading-[0.98] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            SHIVANANDH V
          </motion.h1>
          <motion.p {...enter(0.24)} className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)] sm:text-lg">
            I work across <strong className="font-semibold text-[var(--foreground)]">AI/ML</strong> and <strong className="font-semibold text-[var(--foreground)]">Full-Stack Development</strong>, using <strong className="font-semibold text-[var(--foreground)]">Python</strong> to build data-driven applications and practical <strong className="font-semibold text-[var(--foreground)]">system software</strong>. My work spans backend development, APIs, databases, and user-facing interfaces, with an emphasis on turning a defined problem into software people can use.
          </motion.p>

          <motion.div {...enter(0.36)} className="mb-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-colors hover:brightness-95"
            >
              <span>View Projects</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
            <button
              type="button"
              disabled
              title="Resume PDF will be added"
              aria-label="Download Resume. Resume PDF will be added."
              className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground-muted)]"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
              <span className="sr-only">Resume PDF will be added</span>
            </button>
          </motion.div>

          <motion.div {...enter(0.46)} className="flex flex-wrap gap-3">
            <a
              href="https://github.com/KL1student"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shivanandh-v-60525a275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div {...enter(0.54)} className="mt-8 border-t border-[var(--border)] pt-4 text-sm text-[var(--foreground-muted)]">
            Frontend <span aria-hidden="true">·</span> Backend &amp; APIs <span aria-hidden="true">·</span> Data-driven applications <span aria-hidden="true">·</span> ML integrations
          </motion.div>
        </div>

        <motion.div {...enter(0.3)} className="lg:col-span-5">
          <div
            role="img"
            aria-label="Profile photo placeholder with the initials SV"
            className="relative mx-auto flex aspect-[4/5] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface-muted)] text-center lg:ml-auto"
          >
            <div className="absolute inset-5 border border-[var(--border-active)]" aria-hidden="true" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border-active)] bg-[var(--surface)] text-3xl font-semibold text-[var(--accent)]">
              SV
            </div>
            <FileText className="relative mt-6 h-5 w-5 text-[var(--foreground-muted)]" aria-hidden="true" />
            <p className="relative mt-2 text-sm font-medium text-[var(--foreground-secondary)]">Profile photo coming soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
