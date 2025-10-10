"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "FRESNOMAQ (WAP & WAAW by Alok)",
    role: "Quality Analyst - Automation & Systems",
    period: "September 2023 - Present",
    description: [
      "Development of applications and automation solutions for quality processes",
      "Creation of dashboards and digital tools for data monitoring and analysis",
      "Development of internal systems for non-conformity management and audits",
      "Implementation of low-code solutions (AppSheet, PowerApps) for process optimization",
      "Technical support and training for teams on digital tools",
    ],
    tags: ["React", "Node.js", "AppSheet", "PowerApps", "Power BI"],
  },
  {
    company: "AGP GLASS",
    role: "Quality Inspector II - Systems & Automation",
    period: "January 2021 - January 2023",
    description: [
      "Work with quality management systems (SAP, SAGA, Sênior)",
      "Development of automated reports and performance indicators",
      "Technical drawing interpretation and high-precision measurements",
      "Support for internal audits and production line inspections",
    ],
    tags: ["SAP", "Excel", "Quality Systems", "Data Analysis"],
  },
]

export function Experience() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl leading-relaxed">
            My professional journey in automation, quality systems, and software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-surface" />

              <div className="bg-surface-elevated border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-foreground-muted">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-subtle">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-foreground-muted leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary-muted rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
