import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "var(--bg-body)",
        card: "var(--bg-card)",
        surface: "var(--bg-surface)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        glass: {
          border: "var(--border-glass)",
          hover: "var(--border-glass-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite alternate",
        "orb-spin": "orbSpin 6s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%": { opacity: "0.6", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1.02)" },
        },
        orbSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
