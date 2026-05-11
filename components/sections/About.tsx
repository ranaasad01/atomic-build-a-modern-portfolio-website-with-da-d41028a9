"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { stats } from "@/data/skills";
import { MapPin, Coffee, Code2, Sparkles } from 'lucide-react';

const highlights = [
  { icon: MapPin, text: "San Francisco, CA" },
  { icon: Coffee, text: "Coffee-powered coder" },
  { icon: Code2, text: "5+ years experience" },
  { icon: Sparkles, text: "Open source enthusiast" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/10 text-sky-400 text-sm font-medium border border-sky-400/20 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Crafting Digital{" "}
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A passionate developer who loves turning complex problems into elegant solutions.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Alex Chen — Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Floating card — experience */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 z-20 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center">
                    <Code2 size={20} className="text-sky-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">5+</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Years Coding</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card — projects */}
              <motion.div
                className="absolute -top-4 -right-4 lg:-right-8 z-20 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-400/10 flex items-center justify-center">
                    <Sparkles size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">40+</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Projects Built</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl border-2 border-sky-400/20" />
              <div className="absolute -z-20 -top-12 -left-12 w-full h-full rounded-2xl bg-sky-400/5" />
            </div>
          </ScrollReveal>

          {/* Content side */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm border border-slate-200 dark:border-slate-700"
                  >
                    <Icon size={14} className="text-sky-400" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a full-stack developer with over 5 years of experience building
                  scalable web applications. My journey started with a Computer Science degree
                  from UC Berkeley, and I&apos;ve since worked with startups and Fortune 500
                  companies alike.
                </p>
                <p>
                  I specialize in the React ecosystem — from crafting pixel-perfect UIs to
                  architecting robust backend systems with Node.js and PostgreSQL. I believe
                  great software is not just functional, but also maintainable, accessible, and
                  a joy to use.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to open source,
                  writing technical articles, hiking the trails around the Bay Area, or
                  experimenting with new technologies.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2, borderColor: "rgba(56,189,248,0.4)" }}
                  >
                    <p className="text-2xl font-bold text-sky-400">{stat.value}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold transition-all shadow-md shadow-sky-400/20 hover:shadow-sky-400/30"
                >
                  See My Work
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-sky-400 hover:text-sky-400 font-semibold transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
