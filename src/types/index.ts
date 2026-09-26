export interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  metrics: ProjectMetric[];
  archDesc: string;
  githubUrl: string;
  githubLabel: string;
  aliases: string[];
  featured: boolean;
  challengeDetails: string;
  archNodes: ArchNode[];
  caseStudy: ProjectCaseStudy;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  contribution: string;
  implementation: { area: string; details: string }[];
  features: string[];
  techStack: { category: string; tools: string[] }[];
}

export interface ArchNode {
  id: string;
  label: string;
  tech: string;
  rationale: string;
}
