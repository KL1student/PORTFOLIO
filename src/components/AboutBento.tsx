import { Cpu, Code2, Layers, GraduationCap, MapPin } from "lucide-react";

export function AboutBento() {
  const stackCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL"]
    },
    {
      category: "Frontend & Backend",
      skills: ["React", "Vite", "HTML5", "CSS3", "Node.js", "Express.js", "REST APIs", "SSE", "JWT"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Google Gemini 2.5 Flash", "XLM-RoBERTa", "XGBoost"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Supabase", "Relational Database Design"]
    },
    {
      category: "Tools & Infrastructure",
      skills: ["Git", "GitHub", "Apache", "Docker (Basic)", "AWS (Basic)", "Streamlit", "Tkinter"]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Profile & Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            AI/ML & Full-Stack Developer
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Computer Science Engineering graduate with experience building full-stack applications and machine learning systems, including computer vision, semantic segmentation, conversational AI, and REST APIs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Engineering DNA (Span 7) */}
          <div className="md:col-span-7 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                Building AI Applications and Full-Stack Software
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                I work across Python, React, Node.js, and PyTorch, developing computer vision and semantic segmentation systems alongside conversational AI applications, APIs, and database-backed web projects.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[var(--border-glass)]">
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)]">
                <div className="text-xs font-mono text-cyan-400">01. Computer Vision</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">Image processing & segmentation</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)]">
                <div className="text-xs font-mono text-purple-400">02. Conversational AI</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">LLMs, emotion & safety workflows</div>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-emerald-400">03. Full-Stack Web</div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-1">Applications, APIs & databases</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Education & Location (Span 5) */}
          <div className="md:col-span-5 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                  CSE GRADUATE
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Education
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">
                B.Tech in Computer Science and Engineering, LBS College of Engineering, 2022–2026.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between">
                  <span className="text-[var(--text-secondary)]">CGPA</span>
                  <span className="text-cyan-400 font-semibold">7.69 / 10</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]"><MapPin className="w-3.5 h-3.5" />Location</span>
                  <span className="text-emerald-400 font-semibold text-right">Kasaragod, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[var(--text-tertiary)] pt-4 mt-4 border-t border-[var(--border-glass)]">
              AI/ML & full-stack development
            </div>
          </div>

          {/* Bento Card 3: Deep Stack Breakdown (Span 12) */}
          <div className="md:col-span-12 apple-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Technical Mastery & Tooling
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackCategories.map((group) => (
                <div
                  key={group.category}
                  className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)]"
                >
                  <div className="text-xs font-mono font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
