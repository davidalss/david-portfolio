"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const education = [
  {
    degree: "Systems Analysis and Development",
    institution: "Anhanguera Educacional",
    period: "2025 - 2027",
    status: "In Progress",
    description: "Focus on web development, data analysis, and intelligent digital solutions",
  },
  {
    degree: "Technical in Quality Analysis and Control",
    institution: "SENAI",
    period: "2017 - 2018",
    status: "Completed",
    description: "Quality management systems, statistical process control, and metrology",
  },
]

export function Education() {
  return (
    <AnimatedSection
      direction="up"
      className="bg-surface-elevated border border-border rounded-lg p-6"
    >
      <h3 className="text-2xl font-bold mb-6">
        <span className="gradient-text">Education</span>
      </h3>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.degree} className="relative pl-6 border-l-2 border-border">
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary rounded-full" />

            <div className="mb-2">
              <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
              <div className="flex items-center gap-2 text-foreground-muted mt-1">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm">{edu.institution}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-foreground-subtle mb-2">
              <Calendar className="h-3 w-3" />
              <span className="text-xs">{edu.period}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  edu.status === "In Progress"
                    ? "bg-primary-muted text-primary border border-primary/20"
                    : "bg-surface text-foreground-muted"
                }`}
              >
                {edu.status}
              </span>
            </div>

            <p className="text-sm text-foreground-muted leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
