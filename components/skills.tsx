"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatedSection, StaggeredAnimation } from "@/components/animated-section"

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Java", level: 70 },
      { name: "C", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Database & BI",
    skills: [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Power BI", level: 85 },
      { name: "Looker Studio", level: 80 },
    ],
  },
  {
    category: "Tools & Methodologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Agile Methodologies", level: 80 },
      { name: "Clean Code", level: 85 },
      { name: "SOLID Principles", level: 80 },
      { name: "AppSheet", level: 85 },
      { name: "PowerApps", level: 80 },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === index
                    ? "bg-primary text-background"
                    : "bg-surface-elevated text-foreground-muted hover:bg-surface hover:text-foreground border border-border"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <AnimatedSection key={activeCategory} direction="up" className="bg-surface-elevated border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">{skillCategories[activeCategory].category}</h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-foreground-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
