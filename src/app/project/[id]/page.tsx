import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectChallenges } from "@/components/ProjectChallenges";
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-10 border-b border-[var(--border)] pb-9">
          <p className="mb-3 text-sm font-semibold text-[var(--accent)]">{project.badge}</p>

          <h1 className="text-3xl leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--foreground-secondary)] leading-relaxed max-w-4xl mb-7">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-semibold hover:brightness-95 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{project.githubLabel}</span>
            </a>

          </div>
        </header>

        {/* Impact Metrics Row */}
        <div id="metrics" className="mb-10">
          <ImpactMetrics project={project} />
        </div>

        <div className="divide-y divide-[var(--border)]">
            <section id="overview" className="grid gap-8 py-8 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-2xl text-[var(--foreground)]">Project Overview</h2>
                <p className="leading-relaxed text-[var(--foreground-secondary)]">{project.caseStudy.overview}</p>
              </div>
              <div>
                <h2 className="mb-3 text-2xl text-[var(--foreground)]">Problem</h2>
                <p className="leading-relaxed text-[var(--foreground-secondary)]">{project.caseStudy.problem}</p>
              </div>
              <div className="md:col-span-2">
                <h2 className="mb-3 text-2xl text-[var(--foreground)]">My Contribution</h2>
                <p className="max-w-4xl leading-relaxed text-[var(--foreground-secondary)]">{project.caseStudy.contribution}</p>
              </div>
            </section>

            <section id="implementation" className="py-8">
              <h2 className="mb-5 text-2xl text-[var(--foreground)]">Technical Implementation</h2>
              <dl className="grid gap-x-10 md:grid-cols-2">
                {project.caseStudy.implementation.map((item) => (
                  <div key={item.area} className="border-t border-[var(--border)] py-4">
                    <dt className="mb-1 text-sm font-semibold text-[var(--foreground)]">{item.area}</dt>
                    <dd className="text-sm leading-relaxed text-[var(--foreground-secondary)]">{item.details}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="features" className="grid gap-8 py-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl text-[var(--foreground)]">Features</h2>
                <ul className="space-y-2 text-sm text-[var(--foreground-secondary)]">
                  {project.caseStudy.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-[var(--accent)]" aria-hidden="true">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="challenges">
                <h2 className="mb-3 text-2xl text-[var(--foreground)]">Challenges &amp; Solutions</h2>
                <ProjectChallenges project={project} />
              </div>
            </section>

            <section id="architecture" className="py-8">
              <h2 className="mb-4 text-2xl text-[var(--foreground)]">Architecture</h2>
              <p className="mb-5 max-w-4xl text-sm leading-relaxed text-[var(--foreground-secondary)]">{project.archDesc}</p>
              <ArchitectureDiagram project={project} />
            </section>

            <section id="technology-stack" className="py-8">
              <h2 className="mb-5 text-2xl text-[var(--foreground)]">Technology Stack</h2>
              <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                {project.caseStudy.techStack.map((group) => (
                  <div key={group.category} className="border-t border-[var(--border)] py-4">
                    <h3 className="mb-2 text-sm font-semibold text-[var(--foreground)]">{group.category}</h3>
                    <p className="text-sm leading-relaxed text-[var(--foreground-secondary)]">{group.tools.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </section>
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
