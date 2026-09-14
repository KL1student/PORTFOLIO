import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ExternalLink, Activity, Terminal, CheckCircle2, GitBranch, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({ id }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  const projectKeys = Object.keys(projectsData);
  const currentIndex = projectKeys.indexOf(id);
  const nextProject = projectsData[projectKeys[(currentIndex + 1) % projectKeys.length]];
  const prevProject = projectsData[projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length]];

  return (
    <div className="pt-28 pb-16 min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Featured Codebases</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="apple-card p-6 sm:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl -z-10" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
              {project.badge}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-glass)] text-[11px] font-mono text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-8">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-body)] text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{project.githubLabel}</span>
            </a>

            {project.frontendUrl && (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-semibold text-[var(--text-primary)] hover:border-cyan-500/40 hover:text-cyan-400 transition-all flex items-center gap-2"
              >
                <GitBranch className="w-4 h-4" />
                <span>Frontend Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25 transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Deployment</span>
              </a>
            )}
          </div>
        </div>

        {/* Impact Metrics Row */}
        <div className="mb-10">
          <ImpactMetrics project={project} />
        </div>

        {/* Architecture Flow & Details */}
        <div className="apple-card p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              System Architecture & Execution Pipeline
            </h2>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
            {project.archDesc}
          </p>

          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Production Pipeline Tested & Verified</span>
            </div>
            <span className="text-[var(--text-tertiary)] font-mono">{project.codeFile}</span>
          </div>
        </div>

        {/* Code Snippet Viewer */}
        <div className="apple-card p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-glass)]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-[var(--text-primary)] font-semibold">
                {project.codeFile}
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase px-2 py-0.5 rounded bg-[var(--bg-surface)]">
              Core Source Implementation
            </span>
          </div>

          <div className="bg-black/60 rounded-xl p-4 sm:p-6 overflow-x-auto border border-[var(--border-glass)]">
            <pre className="text-xs font-mono text-cyan-300/90 leading-relaxed">
              <code>{project.code}</code>
            </pre>
          </div>
        </div>

        {/* Next / Prev Project Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[var(--border-glass)] mb-16">
          <Link
            href={`/project/${prevProject.id}`}
            className="apple-card p-5 hover:border-cyan-500/30 transition-all text-left group"
          >
            <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase">
              ← Previous Case Study
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-1 group-hover:text-cyan-400 transition-colors">
              {prevProject.title}
            </div>
          </Link>

          <Link
            href={`/project/${nextProject.id}`}
            className="apple-card p-5 hover:border-cyan-500/30 transition-all text-right group"
          >
            <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase">
              Next Case Study →
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-1 group-hover:text-cyan-400 transition-colors">
              {nextProject.title}
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
