import type { Project } from "@/types";

interface ImpactMetricsProps {
  project: Project;
  compact?: boolean;
}

export function ImpactMetrics({ project, compact = false }: ImpactMetricsProps) {
  return (
    <dl className={compact
      ? "mt-5 grid grid-cols-3 gap-2 border-y border-[var(--border)] py-3"
      : "grid gap-4 border-y border-[var(--border)] py-5 sm:grid-cols-3"}>
      {project.metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={compact
            ? "min-w-0 px-2 first:pl-0 last:pr-0"
            : index > 0 ? "sm:border-l sm:border-[var(--border)] sm:pl-4" : ""}
        >
          <dt className={compact
            ? "mt-1 text-[11px] leading-snug text-[var(--foreground-muted)]"
            : "mb-1 text-xs font-medium text-[var(--foreground-muted)]"}>
            {metric.label}
          </dt>
          <dd className={compact
            ? "break-words text-sm font-semibold leading-snug text-[var(--foreground)]"
            : "text-lg font-semibold leading-snug text-[var(--foreground)]"}>
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
