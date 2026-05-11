"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { skillCategories } from "@/data/skills";

function SkillBadge({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      className="group relative flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-400/40 transition-all cursor-default shadow-sm hover:shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -3, scale: 1.02 }}
    >
      {/* Color dot */}
      <div
        className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800"
        style={{ backgroundColor: color, ringColor: color }}
      />

      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex-1">{name}</span>

      {/* Level dots */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={["w-1.5 h-1.5 rounded-full transition-colors", i < level ? "" : "bg-slate-200 dark:bg-slate-600"].join(" ")}
            style={{ backgroundColor: i < level ? color : undefined }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-400/10 text-sky-400 text-sm font-medium border border-sky-400/20 mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills &{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </ScrollReveal>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.1}>
              <div className="relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-sky-400/10 to-indigo-500/10 border border-sky-400/20">
            <span className="text-2xl">🚀</span>
            <p className="text-slate-600 dark:text-slate-400">
              Always learning and exploring new technologies.{" "}
              <a href="#contact" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">
                Let&apos;s build something together!
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
