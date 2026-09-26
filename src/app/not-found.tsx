import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full rounded-md border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 text-center">
        <div className="w-16 h-16 rounded-md bg-[var(--surface-muted)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-2">
          ERROR 404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Lost in Latent Space
        </h1>

        <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-8">
          This address does not point to a page. Head back to the portfolio and continue exploring.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-semibold hover:brightness-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to portfolio</span>
        </Link>
      </div>
    </div>
  );
}
