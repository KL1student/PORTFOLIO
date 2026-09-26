"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Mic,
  MicOff,
  Send,
  Volume2,
  VolumeX,
  X
} from "lucide-react";
import { projectsData } from "@/data/projects";

interface ChatAction {
  label: string;
  href: string;
}

interface ChatEntry {
  id: string;
  sender: "user" | "assistant";
  text: string;
  action?: ChatAction;
}

interface RecognitionAlternative {
  transcript: string;
}

interface RecognitionResult extends ArrayLike<RecognitionAlternative> {}

interface RecognitionEvent {
  results: ArrayLike<RecognitionResult>;
}

interface BrowserRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: RecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

type RecognitionConstructor = new () => BrowserRecognition;
type SpeechWindow = Window & {
  SpeechRecognition?: RecognitionConstructor;
  webkitSpeechRecognition?: RecognitionConstructor;
};

function findProjectFromQuery(query: string) {
  const normalized = query.toLowerCase();
  return Object.values(projectsData).find((project) =>
    [project.id, project.title, ...project.caseStudy.techStack.flatMap((group) => group.tools), ...project.aliases].some((term) =>
      normalized.includes(term.toLowerCase())
    )
  );
}

function getResponse(query: string, project: (typeof projectsData)[string] | undefined) {
  const normalized = query.toLowerCase();
  const targetProject = findProjectFromQuery(query);
  const wantsNavigation = /\b(open|go to|navigate|visit|take me)\b/.test(normalized);

  if (targetProject && wantsNavigation) {
    return {
      text: `Opening the ${targetProject.title} case study.`,
      action: { label: "Open case study", href: `/project/${targetProject.id}` }
    };
  }

  const sectionTargets = [
    { words: ["about", "skills", "technical skills", "profile"], id: "about", label: "Go to profile and skills" },
    { words: ["contact", "email", "hire", "reach"], id: "contact", label: "Go to contact" },
    { words: ["education", "degree", "coursework", "academic"], id: "academics", label: "Go to education" },
    { words: ["experience", "internship", "infosys"], id: "experience", label: "Go to experience" },
    { words: ["achievement", "certification", "leadership"], id: "achievements", label: "Go to certifications and leadership" },
    { words: ["projects", "all projects"], id: "projects", label: "Browse projects" }
  ].find((target) => target.words.some((word) => normalized.includes(word)));

  if (sectionTargets && (!project || wantsNavigation || sectionTargets.id !== "projects")) {
    return {
      text: `You can find that in the ${sectionTargets.id} section.`,
      action: { label: sectionTargets.label, href: `/#${sectionTargets.id}` }
    };
  }

  const activeProject = project ?? targetProject;
  if (activeProject) {
    const details = activeProject.caseStudy;
    if (/\b(hard|challenge|problem|solution|difficult)\b/.test(normalized)) {
      return {
        text: `${activeProject.challengeDetails}`,
        action: { label: "Read the challenge", href: `/project/${activeProject.id}#challenges` }
      };
    }
    if (/\b(architecture|pipeline|flow|system design|diagram|backend)\b/.test(normalized)) {
      return {
        text: `${activeProject.archDesc} ${activeProject.archNodes.map((node) => `${node.label}: ${node.rationale}`).join(" ")}`,
        action: { label: "View architecture", href: `/project/${activeProject.id}#architecture` }
      };
    }
    if (/\b(contribution|my work|your work|built|implemented|role)\b/.test(normalized)) {
      return {
        text: details?.contribution ?? activeProject.tagline,
        action: { label: "View project overview", href: `/project/${activeProject.id}#overview` }
      };
    }
    if (/\b(technology|technologies|tech stack|tools|language|framework)\b/.test(normalized)) {
      const stack = details.techStack
        .map((group) => `${group.category}: ${group.tools.join(", ")}`)
        .join(". ");
      return {
        text: stack,
        action: { label: "View technology stack", href: `/project/${activeProject.id}#technology-stack` }
      };
    }
    if (/\b(feature|features)\b/.test(normalized)) {
      return {
        text: details?.features.join(", ") ?? activeProject.tagline,
        action: { label: "View project features", href: `/project/${activeProject.id}#features` }
      };
    }
    if (/\b(result|results|metric|metrics|accuracy|evaluation)\b/.test(normalized)) {
      return {
        text: activeProject.metrics.map((metric) => `${metric.value}: ${metric.label}`).join(". "),
        action: { label: "View project metrics", href: `/project/${activeProject.id}#metrics` }
      };
    }
    return {
      text: details?.overview ?? activeProject.tagline,
      action: { label: "Open case study", href: `/project/${activeProject.id}` }
    };
  }

  if (/\b(project|work|code|built)\b/.test(normalized)) {
    return {
      text: "The project index includes AI/ML, full-stack, computer-vision, and data-driven applications. Each entry links to its repository and case study.",
      action: { label: "Browse projects", href: "/#projects" }
    };
  }

  return {
    text: "I can help you explore projects, technical contributions, architecture, experience, education, and contact details. What would you like to see?",
    action: { label: "Browse projects", href: "/#projects" }
  };
}

export function LiquidChatHUD() {
  const pathname = usePathname();
  const router = useRouter();
  const activeProject = Object.values(projectsData).find((project) => pathname === `/project/${project.id}`);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatEntry[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [notice, setNotice] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<BrowserRecognition | null>(null);
  const messageSequence = useRef(0);
  const cta = activeProject
    ? [...activeProject.caseStudy.techStack.flatMap((group) => group.tools), activeProject.badge]
      .some((technology) => /ai|ml|vision|pytorch|tensorflow|gemini|unet/i.test(technology))
      ? `Ask about ${activeProject.title.split(":")[0]}’s model or pipeline`
      : `Curious how ${activeProject.title.split(":")[0]} works?`
    : "Want to know more about my work?";

  useEffect(() => {
    if (isOpen && !isMinimized) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isMinimized]);

  useEffect(() => () => {
    recognitionRef.current?.stop();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const navigate = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior });
      return;
    }
    router.push(href);
  };

  const speak = (text: string) => {
    if (!voiceEnabled || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };

  const sendMessage = (value = input) => {
    const query = value.trim();
    if (!query) return;
    const sequence = ++messageSequence.current;
    const userMessage: ChatEntry = { id: `${sequence}-user`, sender: "user", text: query };
    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setNotice("");
    const response = getResponse(query, activeProject);
    setMessages((previous) => [...previous, {
      id: `${sequence}-assistant`,
      sender: "assistant",
      text: response.text,
      action: response.action
    }]);
    speak(response.text);
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }
    const speechWindow = window as SpeechWindow;
    const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
    if (!Recognition) {
      setNotice("Voice input is not supported in this browser.");
      return;
    }
    const recognition = new Recognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => sendMessage(event.results[0]?.[0]?.transcript ?? "");
    recognition.onerror = () => setNotice("Voice input could not start. You can type your question instead.");
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  };

  const suggestions = activeProject
    ? ["My contribution", "Architecture", "What was hard?", "Technology stack"]
    : ["Projects", "Experience", "Education", "Contact"];

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={cta}
          className="fixed bottom-5 right-4 z-50 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-left text-xs font-semibold text-[var(--foreground)] shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:bottom-6 sm:right-6"
        >
          <Bot className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
          <span className="truncate">{cta}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--foreground-muted)]" aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <section
          aria-label="Liquid portfolio assistant"
          className="fixed bottom-4 right-4 z-50 flex max-h-[min(82vh,640px)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-2xl sm:bottom-6 sm:right-6 sm:w-[390px]"
        >
          <header className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--surface-muted)] text-[var(--accent)]">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold">Liquid Portfolio Guide</p>
                <p className="text-[11px] text-[var(--foreground-muted)]">{activeProject ? activeProject.title : "Explore projects and experience"}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => setVoiceEnabled((enabled) => !enabled)} aria-label={voiceEnabled ? "Turn speech off" : "Turn speech on"} aria-pressed={voiceEnabled} className="rounded-md p-2 text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]">
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
              <button type="button" onClick={() => setIsMinimized((minimized) => !minimized)} aria-label={isMinimized ? "Expand guide" : "Minimize guide"} className="rounded-md p-2 text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]">
                <ChevronDown className={`h-4 w-4 transition-transform ${isMinimized ? "rotate-180" : ""}`} />
              </button>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close guide" className="rounded-md p-2 text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]">
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          {!isMinimized && (
            <>
              <div className="max-h-[min(48vh,360px)] flex-1 space-y-3 overflow-y-auto px-3 py-4" aria-live="polite">
                {messages.length === 0 && (
                  <div className="max-w-[92%] rounded-md border border-[var(--border)] bg-[var(--surface-muted)] p-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {activeProject
                      ? `Ask about your contribution, ${activeProject.title}, its architecture, or the project challenges.`
                      : "Ask about the projects, technical contributions, experience, education, or contact details. I can also take you directly to a section or case study."}
                  </div>
                )}
                {messages.map((message) => (
                  <div key={message.id} className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}>
                    <p className={`max-w-[92%] whitespace-pre-wrap rounded-md border px-3 py-2.5 text-sm leading-relaxed ${message.sender === "user" ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]" : "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground-secondary)]"}`}>
                      {message.text}
                    </p>
                    {message.action && (
                      <button type="button" onClick={() => navigate(message.action!.href)} className="mt-2 inline-flex min-h-9 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-xs font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--surface-muted)]">
                        {message.action.label}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex gap-2 overflow-x-auto border-t border-[var(--border)] px-3 py-2 no-scrollbar">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)} className="min-h-8 shrink-0 rounded-full border border-[var(--border)] px-3 text-[11px] font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    {suggestion}
                  </button>
                ))}
              </div>

              <form onSubmit={(event) => { event.preventDefault(); sendMessage(); }} className="border-t border-[var(--border)] p-3">
                {notice && <p role="status" className="mb-2 text-xs text-[var(--foreground-muted)]">{notice}</p>}
                <div className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--background)] px-2">
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder={activeProject ? `Ask about ${activeProject.title.split(":")[0]}...` : "Ask or navigate the portfolio..."}
                    aria-label="Ask the portfolio guide"
                    className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none"
                  />
                  <button type="button" onClick={toggleVoiceInput} aria-label={isListening ? "Stop voice input" : "Start voice input"} aria-pressed={isListening} className="rounded-md p-2 text-[var(--foreground-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]">
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </button>
                  <button type="submit" disabled={!input.trim()} aria-label="Send question" className="rounded-md bg-[var(--accent)] p-2 text-[var(--accent-foreground)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </section>
      )}
    </>
  );
}