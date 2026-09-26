import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

export function AcademicsBento() {
  const coursework = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Machine Learning",
    "Artificial Intelligence"
  ];

  return (
    <section id="academics" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Education
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-2xl">
            Computer Science and Engineering graduate, 2022–2026.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: B.Tech Degree (Span 6) */}
          <div className="lg:col-span-12 apple-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="text-xs font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  2022 – 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                Bachelor of Technology (B.Tech)
              </h3>
              <div className="text-sm font-semibold text-cyan-400 mb-4">
                Computer Science and Engineering
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Completed the B.Tech program with a CGPA of 7.69/10.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-glass)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                LBS College of Engineering, Kasaragod
              </span>
              <span className="text-emerald-400 font-semibold">Graduate</span>
            </div>
          </div>

          {/* Card 3: Key Coursework Pills (Span 12) */}
          <div className="lg:col-span-12 apple-card p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Core Undergraduate Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {course}
                    </div>
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
