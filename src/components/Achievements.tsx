import { Trophy, Sparkles, Star, GitCommit } from "lucide-react";

export function Achievements() {
  const milestones = [
    {
      title: "AI and Machine Learning Internship",
      issuer: "Infosys Springboard",
      desc: "Internship project: AI-Based Oil Spill Detection from SAR Satellite Imagery.",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Full Stack Development Internship Certificate",
      issuer: "Corizo",
      desc: "Full stack development internship certificate.",
      icon: Sparkles,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "AI Agent Architect",
      issuer: "IBM",
      desc: "AI Agent Architect certification.",
      icon: GitCommit,
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Cybersecurity and Privacy",
      issuer: "NPTEL",
      desc: "Cybersecurity and Privacy certification.",
      icon: Star,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Core Coordinator, Teranis’25",
      issuer: "Leadership",
      desc: "Coordinated more than 30 events for over 750 participants.",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Certifications & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Certifications and Leadership
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Professional development and event leadership.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="apple-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bg} border flex items-center justify-center ${item.color} mb-6`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-1">
                    {item.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
