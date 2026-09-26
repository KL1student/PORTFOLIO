import Link from "next/link";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ImpactMetrics } from "./ImpactMetrics";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  const projects = Object.values(projectsData);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <FolderGit2 className="h-4 w-4" aria-hidden="true" />
            <span>Selected Projects</span>
          </div>
          <h2 className="text-3xl text-[var(--foreground)] sm:text-4xl">Software, AI/ML &amp; Full-Stack Work</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground-secondary)]">
            Explore the applications, systems, and computer-vision work I have contributed to.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`apple-card flex min-w-0 flex-col p-5 sm:p-6 ${project.featured ? "md:col-span-2" : ""}`}
            >
              <div className="mb-3 text-xs font-semibold uppercase text-[var(--accent)]">{project.badge}</div>
              <h3 className="text-xl leading-snug text-[var(--foreground)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">{project.tagline}</p>

              <ImpactMetrics project={project} compact />

              <div className="mt-5 border-t border-[var(--border)] pt-4">
                <p className="text-xs font-semibold text-[var(--foreground)]">Contribution</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  {project.caseStudy.contribution}
                </p>
              </div>

              <div className="mt-5 border-t border-[var(--border)] pt-4">
                <p className="mb-1 text-xs font-semibold text-[var(--foreground)]">Technology</p>
                <p className="text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  {project.caseStudy.techStack.map((group) => group.tools.join(", ")).join(" · ")}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border)] pt-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)] active:scale-[0.98]"
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                  <span>Code</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <Link
                  href={`/project/${project.id}`}
                  className="ml-auto inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-[var(--accent)] transition-colors hover:underline active:scale-[0.98]"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}