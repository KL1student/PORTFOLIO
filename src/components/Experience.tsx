import { Briefcase, Building2, Calendar, CheckCircle2, ArrowUpRight, Award, GitBranch } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "AI and Machine Learning Intern",
      company: "Infosys Springboard",
      period: "November 2025 – February 2026",
      badge: "AI/ML INTERNSHIP",
      description:
        "Worked on AI-Based Oil Spill Detection from SAR Satellite Imagery using PyTorch, an enhanced U-Net, OpenCV, PIL, and Streamlit.",
      highlights: [
        "Implemented Focal Dice Loss to address class imbalance and improve segmentation of small oil-spill regions.",
        "Built an OpenCV and PIL preprocessing pipeline for 320×320 resizing, normalization, binary masks, and data augmentation.",
        "Applied Test Time Augmentation with flips and rotations, then fused predictions to improve inference robustness.",
        "Deployed interactive SAR image inference and visualization with Streamlit.",
        "Evaluated segmentation using IoU, Dice Coefficient, Precision, and Recall."
      ],
      githubUrl:
        "https://github.com/springboardmentor112r-Agri/Oil_Spill_Detection-/tree/AI_OSD-Shivanandh_V",
      githubLabel: "Project Repository"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Internship Experience
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            AI and machine learning internship focused on semantic segmentation of SAR satellite imagery.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="apple-card p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--border-glass)]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
                    <Award className="w-3.5 h-3.5" />
                    {exp.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 font-medium">
                    <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 font-mono text-[var(--text-tertiary)]">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Repo Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-medium text-[var(--text-primary)] hover:border-cyan-500/40 hover:text-cyan-400 transition-all shadow-sm"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>{exp.githubLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="pt-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="space-y-2.5">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
