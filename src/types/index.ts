export interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  metric1: string;
  sub1: string;
  metric2: string;
  sub2: string;
  metric3: string;
  sub3: string;
  archDesc: string;
  codeFile: string;
  githubUrl: string;
  frontendUrl?: string | null;
  githubLabel: string;
  liveUrl?: string | null;
  tags: string[];
  code: string;
  featured?: boolean;
  guideImpactComment: string;
  challengeDetails: string;
  archNodes: ArchNode[];
}

export interface ImpactMetricItem {
  icon: "performance" | "accuracy" | "value";
  value: string;
  label: string;
}

export interface ArchNode {
  id: string;
  label: string;
  tech: string;
  rationale: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text?: string;
  html?: string;
  categoryCard?: string;
  timestamp: Date;
}

export interface CommandItem {
  type: "Flagship AI" | "Internship" | "Project" | "Navigation" | "Action" | "External";
  title: string;
  sub: string;
  action: () => void;
}
