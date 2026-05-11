"use client";

// ScrollReveal + Projects + Contact + Footer + BackToTop all consolidated here
// Individual named exports used by page.tsx

import { useRef, useEffect, ReactNode, useState } from "react";
import { motion, useInView, useAnimation, Variants, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight, ArrowUp, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { projects, categories, Project } from "@/data/projects";
import Link from "next/link";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── ProjectCard ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-sky-400/40 shadow-sm hover:shadow-xl hover:shadow-sky-400/5 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-sky-400 text-slate-900 text-xs font-bold">Featured</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-white text-xs font-medium capitalize">{project.category}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-400 text-slate-900 text-sm font-semibold hover:bg-sky-300 transition-colors shadow-lg" onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 backdrop-blur-sm text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg" onClick={(e) => e.stopPropagation()}>
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-600">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 text-xs">+{project.tags.length - 4}</span>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub"><Github size={18} /></a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Live site"><ExternalLink size={18} /></a>
            )}
          </div>
          <Link href={"/projects/" + project.slug} className="inline-flex items-center gap-1 text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors group/link">
            Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/10 text-sky-400 text-sm font-medium border border-sky-400/20 mb-4">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects I&apos;ve built — from SaaS platforms to open-source tools.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                activeCategory === cat.id
                  ? "bg-sky-400 text-slate-900 border-sky-400 shadow-md shadow-sky-400/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-sky-400/40 hover:text-sky-400",
              ].join(" ")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">No projects in this category yet.</div>
        )}
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-sm";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/10 text-sky-400 text-sm font-medium border border-sky-400/20 mb-4">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "alex@alexchen.dev", href: "mailto:alex@alexchen.dev" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
                  { icon: Phone, label: "Phone", value: "+1 (415) 555-0123", href: "tel:+14155550123" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/alexchen", label: "GitHub", icon: Github },
                ].map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-sky-400/10 hover:text-sky-400 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-sky-400/30 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-400/10 to-indigo-500/10 border border-sky-400/20">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white">Currently available</span> for freelance projects and full-time opportunities. Response time is usually within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              {status === "success" ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="px-6 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold text-sm transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={inputClass + " resize-none"} />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-400/10 border border-red-400/20 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold transition-all shadow-md shadow-sky-400/20 hover:shadow-sky-400/30"
                    whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">AC</div>
              <span className="font-bold text-white text-lg">Alex Chen</span>
            </div>
            <p className="text-sm leading-relaxed">Full-stack developer crafting beautiful, performant web experiences with modern technologies.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["#about", "#skills", "#projects", "#contact"].map((href) => (
                <li key={href}>
                  <a href={href} className="hover:text-sky-400 transition-colors capitalize">{href.replace("#", "")}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/alexchen" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">Twitter</a></li>
              <li><a href="mailto:alex@alexchen.dev" className="hover:text-sky-400 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {currentYear} Alex Chen. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with <span className="text-sky-400">Next.js</span> &amp; <span className="text-sky-400">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
}

// ─── BackToTop ────────────────────────────────────────────────────────────────

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-sky-400 hover:bg-sky-500 text-slate-900 flex items-center justify-center shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
