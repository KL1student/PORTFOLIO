"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  X, 
  Minimize2, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { ChatMessage } from "@/types";

export function LiquidChatHUD() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I am Shivanandh's AI Agent. Ask me about MindMate LLM, Infosys Springboard Oil Spill detection, or tap below to navigate.",
      timestamp: new Date()
    }
  ]);
  const [isListening, setIsListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

  // Voice Speech-to-Text
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Try Chrome/Edge!");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputVal(transcript);
        setIsListening(false);
        handleSend(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Text to Speech
  const speakText = (text: string) => {
    if (!ttsEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    // AI Intent Processing
    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText = "";
      let categoryType: string | undefined = undefined;

      if (lower.includes("challeng") || lower.includes("hard") || lower.includes("bug") || lower.includes("optimization")) {
        replyText = "That one was tough — check the 'What was hard?' Challenges section on each project card. I documented the real bug and optimization trade-offs instead of hiding the messy parts.";
        categoryType = "projects";
      } else if (lower.includes("architect") || lower.includes("diagram") || lower.includes("node") || lower.includes("stack")) {
        replyText = "Every project has an interactive architecture map. Hover a node to see why that technology was chosen — for example, MindMate uses SSE because its one-way stream keeps token-by-token responses simple and fast.";
        categoryType = "projects";
      } else if (lower.includes("project") || lower.includes("mindmate") || lower.includes("oil") || lower.includes("coin") || lower.includes("metric") || lower.includes("result") || lower.includes("code") || lower.includes("demo")) {
        replyText = "Every project has measurable impact and an architecture map — MindMate streams in under 180ms with 99.2% emotion accuracy. Want to see the retrieval logic? Click 'View Code' or hover a node on any project card. The Netflix Clone even has a Live Demo you can try.";
        categoryType = "projects";
      } else if (lower.includes("academic") || lower.includes("education") || lower.includes("degree") || lower.includes("college")) {
        replyText = "Shivanandh is pursuing B.Tech in CSE (Specialization in AI/ML, 2022-2026) with core coursework in Deep Learning, CV, and DBMS.";
        categoryType = "academics";
      } else if (lower.includes("internship") || lower.includes("experience") || lower.includes("infosys")) {
        replyText = "Shivanandh completed the Infosys Springboard AI/ML Internship Track focusing on Satellite SAR Oil Spill Detection (94.8% IoU).";
        categoryType = "experience";
      } else if (lower.includes("achievement") || lower.includes("certif")) {
        replyText = "Key achievements include Infosys Springboard verified project delivery, MindMate LLM lead development, and 6+ active production repositories.";
        categoryType = "achievements";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach")) {
        replyText = "You can connect with Shivanandh directly on GitHub @KL1student or via LinkedIn. Jump to the contact form below:";
        categoryType = "contact";
      } else {
        replyText = `Regarding "${query}": Shivanandh is an AI/ML Engineer skilled in Google Gemini LLMs (@google/genai), PyTorch, Satellite SAR Computer Vision, and Next.js full-stack development.`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: replyText,
        categoryCard: categoryType,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
      speakText(replyText);
    }, 450);
  };

  const jumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Collapsed Bouncing AI Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="fixed bottom-6 right-6 z-50 p-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-xl shadow-cyan-500/25 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce group"
        >
          <div className="px-4 py-2.5 rounded-full bg-black/90 backdrop-blur-md flex items-center gap-2.5 text-white font-medium text-xs">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-[10px] shadow-sm">
              ✨
            </div>
            <span className="tracking-tight">AI Copilot</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </button>
      )}

      {/* Backgroundless Liquid Chat Stream Overlay */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] flex flex-col pointer-events-auto">
          {/* Top Liquid Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-black/75 dark:bg-black/85 backdrop-blur-2xl border border-white/10 text-white shadow-2xl mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-xs font-bold shadow-sm">
                AI
              </div>
              <div>
                <div className="text-xs font-semibold tracking-tight">Shivanandh AI Agent</div>
                <div className="text-[10px] text-cyan-400 font-mono">Gemini Fast-Lane Engine</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setTtsEnabled(!ttsEnabled)}
                aria-label="Toggle Voice Reading"
                className={`p-1.5 rounded-lg border transition-colors ${
                  ttsEnabled
                    ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                }`}
                title={ttsEnabled ? "Voice Enabled" : "Voice Disabled"}
              >
                {ttsEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label="Minimize Chat"
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Liquid Messages Stream Container (No Solid Background Box) */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto px-2 py-3 space-y-3 max-h-[380px] no-scrollbar">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    {/* Message Bubble Capsule */}
                    <div
                      className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg backdrop-blur-xl border ${
                        msg.sender === "user"
                          ? "bg-cyan-600/80 text-white border-cyan-400/30 rounded-br-sm"
                          : "bg-black/80 text-neutral-200 border-white/10 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Dynamic Action Cards inside AI message */}
                    {msg.categoryCard === "projects" && (
                      <div className="mt-2 w-full max-w-[92%] space-y-1.5 p-2 rounded-xl bg-black/85 border border-cyan-500/20 backdrop-blur-md">
                        <button
                          onClick={() => jumpToSection("projects")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-left text-xs font-medium text-cyan-300 flex items-center justify-between transition-colors"
                        >
                          <span>🧠 MindMate AI Platform</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => jumpToSection("projects")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-left text-xs font-medium text-purple-300 flex items-center justify-between transition-colors"
                        >
                          <span>🛰️ SAR Oil Spill Detection</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => jumpToSection("projects")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-left text-xs font-medium text-cyan-300 flex items-center justify-between transition-colors"
                        >
                          <span>🪙 CoinVision OpenCV</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    {msg.categoryCard === "academics" && (
                      <div className="mt-2 w-full max-w-[92%] p-2 rounded-xl bg-black/85 border border-cyan-500/20 backdrop-blur-md">
                        <button
                          onClick={() => jumpToSection("academics")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-left text-xs font-medium text-cyan-300 flex items-center justify-between transition-colors"
                        >
                          <span>🎓 View Degree & Coursework</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    {msg.categoryCard === "experience" && (
                      <div className="mt-2 w-full max-w-[92%] p-2 rounded-xl bg-black/85 border border-cyan-500/20 backdrop-blur-md">
                        <button
                          onClick={() => jumpToSection("experience")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-left text-xs font-medium text-cyan-300 flex items-center justify-between transition-colors"
                        >
                          <span>💼 View Infosys Internship Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                    {msg.categoryCard === "contact" && (
                      <div className="mt-2 w-full max-w-[92%] p-2 rounded-xl bg-black/85 border border-cyan-500/20 backdrop-blur-md">
                        <button
                          onClick={() => jumpToSection("contact")}
                          className="w-full p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-left text-xs font-medium text-cyan-300 flex items-center justify-between transition-colors"
                        >
                          <span>✉️ Open Contact Form</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Horizontal Scrollable Chips Dock */}
              <div className="py-2 px-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {[
                  { label: "🚀 Projects", section: "projects" },
                  { label: "🧠 MindMate", section: "projects" },
                  { label: "🛰️ Oil Spill", section: "experience" },
                  { label: "🎓 Academics", section: "academics" },
                  { label: "💼 Experience", section: "experience" },
                  { label: "🏆 Milestones", section: "achievements" },
                  { label: "✉️ Contact", section: "contact" }
                ].map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => jumpToSection(chip.section)}
                    className="shrink-0 px-3 py-1.5 rounded-full bg-black/80 hover:bg-white/15 border border-white/15 text-neutral-300 hover:text-white text-[11px] font-medium backdrop-blur-md transition-all active:scale-95"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Liquid Input Field & Voice Mic */}
              <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/80 dark:bg-black/90 backdrop-blur-2xl border border-white/10 shadow-2xl">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={isListening ? "Listening to your voice..." : "Ask AI or search topics..."}
                  className="flex-1 bg-transparent px-3 py-1.5 text-xs text-white placeholder-neutral-400 focus:outline-none"
                />

                {/* Mic Speech-to-Text Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  aria-label="Toggle Voice Input"
                  className={`p-2 rounded-xl border transition-all ${
                    isListening
                      ? "bg-red-500/20 border-red-500 text-red-400 animate-pulse"
                      : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                  }`}
                  title={isListening ? "Listening..." : "Voice Input"}
                >
                  {isListening ? <Mic className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                </button>

                {/* Send Button */}
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!inputVal.trim()}
                  aria-label="Send Message"
                  className="p-2 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition-colors disabled:opacity-30"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
