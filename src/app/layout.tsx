import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { LiquidChatHUD } from "@/components/LiquidChatHUD";
import { CommandPalette } from "@/components/CommandPalette";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000"
};

export const metadata: Metadata = {
  title: "Shivanandh V — AI/ML Engineer & Systems Architect",
  description:
    "Portfolio of Shivanandh V (@KL1student): Generative AI LLM architectures (MindMate), Infosys Springboard Satellite Oil Spill Detection, Computer Vision, and Next.js full-stack systems.",
  keywords: [
    "Shivanandh V",
    "KL1student",
    "AI Engineer",
    "Machine Learning",
    "MindMate",
    "Infosys Springboard",
    "PyTorch",
    "Computer Vision",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Shivanandh V", url: "https://github.com/KL1student" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <ThemeProvider>
          {/* Navigation Bar */}
          <Navigation />

          {/* Main Application Container */}
          <main className="relative z-10">{children}</main>

          {/* Backgroundless Liquid AI Chat Overlay */}
          <LiquidChatHUD />

          {/* Global Spotlight ⌘K Command Palette */}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
