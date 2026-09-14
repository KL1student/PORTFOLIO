import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full apple-card p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl -z-10" />

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
          ERROR 404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
          Lost in Latent Space
        </h1>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
          The requested route does not exist in this neural network. Return to the main checkpoint.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[var(--text-primary)] text-[var(--bg-body)] text-xs font-semibold hover:opacity-90 transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  );
}
