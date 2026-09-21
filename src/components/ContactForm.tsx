"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleQuickPrompt = (prompt: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: prompt,
      message: `Hi Shivanandh,\n\nI'd like to connect regarding: "${prompt}". Looking forward to speaking soon!`
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Quick Prompts */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
              Let&apos;s Build Something Intelligent Together.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              Whether you&apos;re looking to recruit for AI/ML roles, explore deep learning research collaborations, or discuss production software architecture, my inbox is always open.
            </p>

            {/* Quick Prompts */}
            <div className="mb-8">
              <span className="text-xs font-mono text-[var(--text-tertiary)] block mb-3">
                QUICK INQUIRY TEMPLATES:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML Engineer Role",
                  "Full Stack Project Inquiry",
                  "Deep Learning Research",
                  "Technical Consultation"
                ].map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleQuickPrompt(prompt)}
                    className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-all text-left"
                  >
                    + {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-6 border-t border-[var(--border-glass)]">
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <div className="w-9 h-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-center text-cyan-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-tertiary)] font-mono">GITHUB</div>
                  <a
                    href="https://github.com/KL1student"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--text-primary)] hover:text-cyan-400 transition-colors"
                  >
                    github.com/KL1student
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <div className="w-9 h-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] flex items-center justify-center text-blue-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-tertiary)] font-mono">LINKEDIN</div>
                  <a
                    href="https://linkedin.com/in/shivanandh-v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--text-primary)] hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/shivanandh-v
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="apple-card p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    Message Ready to Send
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-sm mb-6">
                    Your message is ready, but this form is not connected to a delivery service yet. Please use GitHub or LinkedIn to reach me directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-active)] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--text-tertiary)] mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--text-tertiary)] mb-1.5 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-[var(--text-tertiary)] mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Engineering Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--text-tertiary)] mb-1.5 uppercase">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shivanandh, we came across your work on MindMate & Infosys Springboard..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-glass)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[var(--text-primary)] text-[var(--bg-body)] text-sm font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Payload...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
