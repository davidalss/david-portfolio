"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layers, Zap } from "lucide-react"
import { AnimatedSection, StaggeredAnimation } from "@/components/animated-section"

const techCategories = [
  {
    icon: Code2,
    title: "Frontend",
    techs: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Layers,
    title: "Backend",
    techs: ["Node.js", "Java", "C", "REST APIs"],
  },
  {
    icon: Database,
    title: "Data & BI",
    techs: ["SQL", "MySQL", "PostgreSQL", "Power BI", "Looker Studio"],
  },
  {
    icon: Zap,
    title: "Automation",
    techs: ["AppSheet", "PowerApps", "Power Automate", "Git"],
  },
]

export function TechStack() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </AnimatedSection>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
          direction="up"
        >
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-surface-elevated border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-muted rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.techs.map((tech) => (
                  <li key={tech} className="text-sm text-foreground-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
