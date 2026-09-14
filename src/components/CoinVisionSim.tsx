"use client";

import React, { useState } from "react";
import { Play, RotateCcw, Check, Sparkles, Cpu, Eye } from "lucide-react";

export function CoinVisionSim() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{
    coinsDetected: number;
    totalValue: string;
    cannyEdges: number;
    latency: string;
  } | null>(null);

  const runSimulation = () => {
    setIsProcessing(true);
    setResult(null);

    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        coinsDetected: 5,
        totalValue: "₹ 18.00 (2x ₹5, 1x ₹5, 2x ₹1)",
        cannyEdges: 428,
        latency: "18.4 ms"
      });
    }, 1200);
  };

  const resetSimulation = () => {
    setResult(null);
    setIsProcessing(false);
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">
            CoinVision Interactive Lab
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
          OpenCV Canny Demo
        </span>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative h-28 rounded-xl bg-black/40 border border-[var(--border-glass)] flex items-center justify-center overflow-hidden mb-3">
        {/* Simulated Coins */}
        <div className="flex items-center gap-3 z-10">
          {[1, 5, 2, 5, 5].map((val, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all duration-500 ${
                result
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 scale-105 shadow-lg shadow-cyan-500/20 animate-pulse"
                  : isProcessing
                  ? "border-amber-400 bg-amber-500/10 text-amber-300"
                  : "border-[var(--border-glass)] bg-[var(--bg-card)] text-[var(--text-tertiary)]"
              }`}
            >
              ₹{val}
            </div>
          ))}
        </div>

        {/* Scan Bar during processing */}
        {isProcessing && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-bounce top-0" />
        )}
      </div>

      {/* Results output */}
      {result ? (
        <div className="grid grid-cols-3 gap-2 mb-3 font-mono text-[11px]">
          <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)]">
            <span className="text-[var(--text-tertiary)] block text-[9px]">COUNT</span>
            <span className="text-emerald-400 font-bold">{result.coinsDetected} Coins</span>
          </div>
          <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)]">
            <span className="text-[var(--text-tertiary)] block text-[9px]">EDGES</span>
            <span className="text-cyan-400 font-bold">{result.cannyEdges} pts</span>
          </div>
          <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)]">
            <span className="text-[var(--text-tertiary)] block text-[9px]">LATENCY</span>
            <span className="text-purple-400 font-bold">{result.latency}</span>
          </div>
        </div>
      ) : null}

      {/* Control Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={runSimulation}
          disabled={isProcessing}
          className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <Cpu className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing Contours...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span>Simulate Detection</span>
            </>
          )}
        </button>

        {result && (
          <button
            onClick={resetSimulation}
            className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-all"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
